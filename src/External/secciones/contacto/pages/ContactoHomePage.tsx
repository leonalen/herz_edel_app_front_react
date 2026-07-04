import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"; // Íconos de redes sociales
import { Head as Helmet } from "vite-react-ssg";


export const ContactoHomePage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
    botcheck: false
  });
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    setFormSuccess("");

    // Validación manual de formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setFormError(t('contacto_email_invalido', 'Por favor, ingresa un correo electrónico válido.'));
      return;
    }

    if (formData.botcheck) {
      setFormSuccess(t('contacto_exito', '¡Mensaje enviado con éxito! Nos pondremos en contacto a la brevedad.'));
      setFormData({ nombre: "", email: "", asunto: "", mensaje: "", botcheck: false });
      return;
    }

    setIsSubmitting(true);

    try {
      const key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: key || "TEST_KEY_FALLBACK",
          name: formData.nombre,
          email: formData.email,
          subject: formData.asunto,
          message: formData.mensaje,
          from_name: "Criadero Herz Edel - Sitio Web"
        }),
      });

      const result = await response.json();
      if (result.success) {
        setFormSuccess(t('contacto_exito', '¡Mensaje enviado con éxito! Nos pondremos en contacto a la brevedad.'));
        setFormData({ nombre: "", email: "", asunto: "", mensaje: "", botcheck: false });
      } else {
        setFormError(result.message || t('contacto_error', 'Ocurrió un error al enviar el mensaje.'));
      }
    } catch (err) {
      setFormError(t('contacto_error_red', 'Error de red. Por favor, intenta de nuevo más tarde.'));
    } finally {
      setIsSubmitting(false);
    }
  };

return (
    <main>
      <Helmet>
        <title>{`${t('contacto_titulo', 'Contacto')} | Herz Edel`}</title>
        <meta name="description" content={t('contacto_desc', 'Contáctanos para más información sobre Herz Edel.')} />
        <meta property="og:title" content={`${t('contacto_titulo', 'Contacto')} | Herz Edel`} />
        <meta property="og:description" content={t('contacto_desc', 'Contáctanos para más información sobre Herz Edel.')} />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="max-w-6xl mx-auto px-8 py-10">
        <h2 className="text-3xl font-bold text-yellow-600 text-center mb-2">{t('contacto_titulo', 'Contacto Herz Edel - Criadero de Rottweilers en Argentina, líneas alemanas y ejemplares ADRK')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Datos de contacto y redes sociales */}
            <div className="bg-slate-900 border border-slate-800 shadow-xl rounded-lg p-8 flex flex-col justify-between text-white">
                <div>
                    <h3 className="text-2xl font-bold text-yellow-500 mb-8">{t('contacto_datos', 'Datos de Contacto')}</h3>
                    <p className="text-lg font-medium text-gray-300 mb-4">
                        {t('contacto_nombre', 'Contacto')}: <span className="text-white font-normal">Leonardo Alencastro</span>
                    </p>
                    <p className="text-lg font-medium text-gray-300 mb-4">
                        📞 {t('contacto_telefono', 'Teléfono')}: <span className="text-white font-normal">11 3671 6131</span>
                    </p>
                    <p className="text-lg font-medium text-gray-300 mb-4">
                        📧 {t('contacto_email', 'Email')}: <span className="text-white font-normal">herzedel@gmail.com</span>
                    </p>
                </div>

                {/* Redes Sociales */}
                <div className="mt-8">
                    <h3 className="text-xl font-semibold text-yellow-500 mb-4">{t('contacto_siguenos', 'Síguenos en Redes')}</h3>
                    <div className="flex gap-5">
                        <a href="https://www.facebook.com/leonardo.alencastro.9" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-yellow-500 hover:text-yellow-400 hover:scale-110 transition duration-200">
                            <FaFacebook size={32} />
                        </a>
                        <a href="https://www.instagram.com/leonardo.alencastro.9" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-yellow-500 hover:text-yellow-400 hover:scale-110 transition duration-200">
                            <FaInstagram size={32} />
                        </a>
                        <a href="https://wa.me/5491136716131" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-yellow-500 hover:text-yellow-400 hover:scale-110 transition duration-200">
                            <FaWhatsapp size={32} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Formulario de contacto */}
            <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 shadow-xl rounded-lg p-8 text-white" aria-label={t('contacto_formulario', 'Formulario de contacto')}>
                <h3 className="text-2xl font-bold text-yellow-500 mb-6">{t('contacto_envianos', 'Envíanos un Mensaje')}</h3>
                {formError && <div className="mb-4 p-3 bg-red-900/30 border border-red-500/50 rounded-md text-red-200 text-sm" aria-live="polite">{formError}</div>}
                {formSuccess && <div className="mb-4 p-3 bg-green-900/30 border border-green-500/50 rounded-md text-green-200 text-sm" aria-live="polite">{formSuccess}</div>}
                
                <div className="mb-4">
                    <label className="block text-gray-300 font-semibold mb-1 text-sm" htmlFor="nombre">{t('contacto_nombre_label', 'Nombre')}</label>
                    <input 
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-slate-800 text-white border border-slate-700 rounded-md focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all duration-200"
                        required
                        aria-required="true"
                        aria-label={t('contacto_nombre_label', 'Nombre')}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-300 font-semibold mb-1 text-sm" htmlFor="email">{t('contacto_email_label', 'Email')}</label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-slate-800 text-white border border-slate-700 rounded-md focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all duration-200"
                        required
                        aria-required="true"
                        aria-label={t('contacto_email_label', 'Email')}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-300 font-semibold mb-1 text-sm" htmlFor="asunto">{t('contacto_asunto_label', 'Asunto')}</label>
                    <input 
                        type="text"
                        id="asunto"
                        name="asunto"
                        value={formData.asunto}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-slate-800 text-white border border-slate-700 rounded-md focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all duration-200"
                        required
                        aria-required="true"
                        aria-label={t('contacto_asunto_label', 'Asunto')}
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-300 font-semibold mb-1 text-sm" htmlFor="mensaje">{t('contacto_mensaje_label', 'Mensaje')}</label>
                    <textarea 
                        id="mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-slate-800 text-white border border-slate-700 rounded-md focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all duration-200"
                        rows={5}
                        required
                        aria-required="true"
                        aria-label={t('contacto_mensaje_label', 'Mensaje')}
                    ></textarea>
                </div>

                {/* Honeypot field (hidden from users) */}
                <div style={{ display: "none" }} aria-hidden="true">
                    <input 
                        type="checkbox" 
                        name="botcheck" 
                        id="botcheck"
                        checked={formData.botcheck}
                        onChange={handleChange}
                        className="hidden" 
                        style={{ display: "none" }} 
                        tabIndex={-1}
                        autoComplete="off"
                    />
                </div>

                <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-yellow-500 text-slate-900 font-bold py-3 rounded-md hover:bg-yellow-600 transition-all duration-200 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'shadow-lg hover:shadow-yellow-500/10'}`}
                >
                    {isSubmitting ? t('contacto_enviando', 'Enviando...') : t('contacto_enviar', 'Enviar Mensaje')}
                </button>
            </form>
        </div>

        <div className="mt-10 text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {t('contacto_info', 'En Herz Edel trabajamos exclusivamente con líneas de sangre alemanas e importamos ejemplares ADRK para garantizar la mejor genética y temperamento en nuestros Rottweilers. Consultanos para más información sobre camadas, cachorros y asesoramiento profesional.')}
          </p>
        </div>
      </div>
    </main>
);
};

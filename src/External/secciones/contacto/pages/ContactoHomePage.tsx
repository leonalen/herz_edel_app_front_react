import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"; // Íconos de redes sociales


export const ContactoHomePage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: ""
});
const [formError, setFormError] = useState("");
const [formSuccess, setFormSuccess] = useState("");


const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    setFormSuccess("");
    // Aquí iría la lógica real de envío
    setFormError(t('contacto_error', 'Error al enviar el mensaje.'));
    setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
};

return (
    <main>
      <title>{t('contacto_titulo', 'Contacto')} | Herz Edel</title>
      <meta name="description" content={t('contacto_desc', 'Contáctanos para más información sobre Herz Edel.')} />
      <meta property="og:title" content={`${t('contacto_titulo', 'Contacto')} | Herz Edel`} />
      <meta property="og:description" content={t('contacto_desc', 'Contáctanos para más información sobre Herz Edel.')} />
      <meta property="og:type" content="website" />
      <div className="max-w-6xl mx-auto px-8 py-10">
        <h2 className="text-3xl font-bold text-yellow-600 text-center mb-2">{t('contacto_titulo', 'Contacto Herz Edel - Criadero de Rottweilers en Argentina, líneas alemanas y ejemplares ADRK')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Datos de contacto y redes sociales */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">{t('contacto_datos', 'Datos de Contacto')}</h3>
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-300">
                        {t('contacto_nombre', 'Contacto')}: <span className="font-normal">Leonardo Alencastro</span>
                    </p>
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-300">
                        📞 {t('contacto_telefono', 'Teléfono')}: <span className="font-normal">+54 11 5724 9541</span>
                    </p>
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-300">
                        📧 {t('contacto_email', 'Email')}: <span className="font-normal">leonardo_alen@hotmail.com</span>
                    </p>
                </div>

                {/* Redes Sociales */}
                <div className="mt-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t('contacto_siguenos', 'Síguenos en Redes')}</h3>
                    <div className="flex gap-5">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-blue-600 hover:scale-110 transition">
                            <FaFacebook size={32} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-pink-600 hover:scale-110 transition">
                            <FaInstagram size={32} />
                        </a>
                        <a href="https://wa.me/5491234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-green-600 hover:scale-110 transition">
                            <FaWhatsapp size={32} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Formulario de contacto */}
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4" aria-label={t('contacto_formulario', 'Formulario de contacto')}>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{t('contacto_envianos', 'Envíanos un Mensaje')}</h3>
                {formError && <div className="mb-2 text-red-600" aria-live="polite">{formError}</div>}
                {formSuccess && <div className="mb-2 text-green-600" aria-live="polite">{formSuccess}</div>}
                <div className="mb-1">
                    <label className="block text-gray-500 dark:text-gray-300 font-semibold" htmlFor="nombre">{t('contacto_nombre_label', 'Nombre')}</label>
                    <input 
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus-visible:outline-2 focus-visible:outline-yellow-500"
                        required
                        aria-required="true"
                        aria-label={t('contacto_nombre_label', 'Nombre')}
                    />
                </div>

                <div className="mb-1">
                    <label className="block text-gray-700 dark:text-gray-300 font-semibold" htmlFor="email">{t('contacto_email_label', 'Email')}</label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus-visible:outline-2 focus-visible:outline-yellow-500"
                        required
                        aria-required="true"
                        aria-label={t('contacto_email_label', 'Email')}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300 font-semibold" htmlFor="asunto">{t('contacto_asunto_label', 'Asunto')}</label>
                    <input 
                        type="text"
                        id="asunto"
                        name="asunto"
                        value={formData.asunto}
                        onChange={handleChange}
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus-visible:outline-2 focus-visible:outline-yellow-500"
                        required
                        aria-required="true"
                        aria-label={t('contacto_asunto_label', 'Asunto')}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300 font-semibold" htmlFor="mensaje">{t('contacto_mensaje_label', 'Mensaje')}</label>
                    <textarea 
                        id="mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus-visible:outline-2 focus-visible:outline-yellow-500"
                        rows={5}
                        required
                        aria-required="true"
                        aria-label={t('contacto_mensaje_label', 'Mensaje')}
                    ></textarea>
                </div>

                <button 
                    type="submit"
                    className="w-full bg-yellow-500 text-white font-bold py-3 rounded-md hover:bg-yellow-600 transition-all"
                >
                    {t('contacto_enviar', 'Enviar Mensaje')}
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

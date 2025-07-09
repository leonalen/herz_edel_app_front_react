import { useState } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"; // Íconos de redes sociales


export const ContactoHomePage = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: ""
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
    alert("Error al enviar el mensaje.");
    setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
};

return (
    <div className="max-w-6xl mx-auto px-8 py-10">
        <h2 className="text-3xl font-bold text-yellow-600 text-center mb-2">Contacto</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Datos de contacto y redes sociales */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Datos de Contacto</h3>
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-300">
                        Contacto: <span className="font-normal">Leonardo Alencastro</span>
                    </p>
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-300">
                        📞 Teléfono: <span className="font-normal">+54 11 5724 9541</span>
                    </p>
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-300">
                        📧 Email: <span className="font-normal">leonardo_alen@hotmail.com</span>
                    </p>
                </div>

                {/* Redes Sociales */}
                <div className="mt-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Síguenos en Redes</h3>
                    <div className="flex gap-5">
                        <a href="https://facebook.com" target="_blank" className="text-blue-600 hover:scale-110 transition">
                            <FaFacebook size={32} />
                        </a>
                        <a href="https://instagram.com" target="_blank" className="text-pink-600 hover:scale-110 transition">
                            <FaInstagram size={32} />
                        </a>
                        <a href="https://wa.me/5491234567890" target="_blank" className="text-green-600 hover:scale-110 transition">
                            <FaWhatsapp size={32} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Formulario de contacto */}
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Envíanos un Mensaje</h3>

                <div className="mb-1">
                    <label className="block text-gray-500 dark:text-gray-300 font-semibold">Nombre</label>
                    <input 
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        required
                    />
                </div>

                <div className="mb-1">
                    <label className="block text-gray-700 dark:text-gray-300 font-semibold">Email</label>
                    <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300 font-semibold">Asunto</label>
                    <input 
                        type="text"
                        name="asunto"
                        value={formData.asunto}
                        onChange={handleChange}
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300 font-semibold">Mensaje</label>
                    <textarea 
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        rows={5}
                        required
                    ></textarea>
                </div>

                <button 
                    type="submit"
                    className="w-full bg-yellow-500 text-white font-bold py-3 rounded-md hover:bg-yellow-600 transition-all"
                >
                    Enviar Mensaje
                </button>
            </form>
        </div>
    </div>
);
};

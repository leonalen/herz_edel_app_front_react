import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";

export const HeaderPro = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false); // Estado para menú móvil

  const menuItems = [
    { label: "INICIO", handler: () => navigate("/") },
    { label: "MACHOS", handler: () => navigate("/machos") },
    { label: "HEMBRAS", handler: () => navigate("/hembras") },
    { label: "JÓVENES", handler: () => navigate("/jovenes") },
    { label: "CAMADAS", handler: () => navigate("/camadas") },
    { label: "CONTACTO", handler: () => navigate("/contacto") },
    // { label: "LOGIN", handler: () => navigate("/login") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-black border-b-4 border-white shadow-lg">
        <nav className="flex items-center justify-between px-4 py-2">
          {/* Menú Hamburguesa en Móvil */}
          <button
            className="lg:hidden text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú de navegación"
          >
            <FiMenu size={24} />
          </button>

          {/* Selector de idioma visible en desktop */}
          <div className="hidden lg:block ml-2">
          </div>

          {/* Botones de Navegación (desktop) */}
          <div className="hidden lg:flex space-x-4 mx-auto">
            {menuItems.map(({ label, handler }) => (
              <Button
                key={label}
                onClick={handler}
                className="hover:text-[#FFD700] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 transition-colors duration-200 bg-transparent text-white font-semibold"
                aria-label={`Ir a ${label}`}
                style={{ color: 'gold' }}
              >
                {label}
              </Button>
            ))}
          </div>

          {/* Logo (alineado a la derecha) */}
          <div className="ml-auto">
            <img
              src="/img/varios/rottweiler3.png"
              alt="Logo Herz Edel, criadero de Rottweilers"
              className="h-16 md:h-24 object-contain block"
              style={{ width: 'auto' }}
              loading="lazy"
            />
          </div>
        </nav>

        {/* Drawer para menú móvil */}
        {open && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex">
            <aside className="w-64 h-full bg-gray-900 text-white flex flex-col shadow-lg animate-slideInLeft">
              <button
                className="self-end m-4 text-white text-2xl focus:outline-none"
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
              >
                ×
              </button>
              {/* Selector de idioma en menú móvil */}
          
              <nav className="flex-1">
                <ul className="mt-8 space-y-2">
                  {menuItems.map(({ label, handler }) => (
                    <li key={label}>
                      <button
                        onClick={() => { handler(); setOpen(false); }}
                        className="w-full text-left px-6 py-3 hover:bg-gray-800 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        aria-label={`Ir a ${label}`}
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
            <div className="flex-1" onClick={() => setOpen(false)} aria-label="Cerrar menú móvil" />
          </div>
        )}
      </header>
  );
};

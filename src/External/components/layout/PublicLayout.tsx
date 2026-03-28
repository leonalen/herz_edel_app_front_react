import { Outlet } from "react-router-dom";
import { HeaderPro } from "./HeaderPro";
import { Footer } from "../../pages/components/Footer";

export const PublicLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header Principal (Negro con Logo y Menú) */}
      <HeaderPro />
      
      {/* Sub-Header Específico del Home de antes */}
      <header className="w-full px-4 py-2 bg-gray-200 shadow-sm border-b border-gray-300">
        <h1 className="text-xl md:text-2xl font-bold text-center text-gray-800 tracking-tight">
          Herz Edel Kennel
        </h1>
      </header>

      {/* Contenido Dinámico de las Sub-Páginas */}
      <main
        className="flex-grow w-full max-w-[1400px] mx-auto bg-white rounded-lg shadow-lg p-2 md:p-6 my-4"
        role="main"
      >
        <Outlet />
      </main>

      {/* Footer Fijo al Fondo */}
      <Footer />
    </div>
  );
};

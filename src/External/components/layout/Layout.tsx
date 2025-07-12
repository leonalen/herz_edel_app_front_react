import { Helmet } from "react-helmet-async";
import { HeaderPro } from "./HeaderPro";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Helmet>
        <title>Layout | Herz Edel</title>
        <meta
          name="description"
          content="Estructura principal de la aplicación Herz Edel."
        />
      </Helmet>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <HeaderPro />
        {/* Contenedor centrado y responsive */}
        <div className="flex justify-center py-2 w-full">
          {/* Aquí puedes agregar banners, alertas, etc. */}
        </div>
        <main
          className="flex-1 p-4 flex flex-col justify-center items-center flex-wrap gap-4 w-full max-w-7xl mx-auto bg-white rounded-lg shadow-md"
          role="main"
          tabIndex={-1}
          aria-label="Contenido principal"
        >
          {children}
        </main>
      </div>
    </>
  );
};

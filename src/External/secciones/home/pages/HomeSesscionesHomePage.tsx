import { CarouselHome } from "../../../pages/components/CarouselHome";
import { SeparadorContainers } from "../components/SeparadorContainers";
import { Helmet } from "react-helmet-async";

export const HomeSesscionesHomePage = () => {
  return (
    <main>
      <Helmet>
        <title>Inicio | Herz Edel</title>
        <meta
          name="description"
          content="Bienvenido a la página principal de Herz Edel."
        />
        <meta property="og:title" content="Inicio | Herz Edel" />
        <meta
          property="og:description"
          content="Bienvenido a la página principal de Herz Edel."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="max-w-[1100px] max-h-[100vh] w-full h-auto flex flex-col items-center justify-center bg-gray-200 p-0 rounded-lg shadow-lg mx-auto">
        {/* Contenedor del separador */}
        <div className="w-full flex justify-center mb-3">
          <SeparadorContainers />
        </div>

        {/* Contenedor del carrusel */}
        <div className="w-full flex justify-center">
          <CarouselHome />
        </div>
      </div>
    </main>
  );
};

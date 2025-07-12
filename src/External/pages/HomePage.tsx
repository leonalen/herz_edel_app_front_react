import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { CamadasHomePage } from "../secciones/camadas/pages/CamadasHomePage";
import { ContactoHomePage } from "../secciones/contacto/pages/ContactoHomePage";
import { LoginHomePage } from "../secciones/login/pages/LoginHomePage";
import { HomeSesscionesHomePage } from "../secciones/home/pages/HomeSesscionesHomePage";
import ReproductoresHerzEdel from "../secciones/machos/pages/ReproductoresHerzEdel";
import { Irko } from "../secciones/machos/components/Irko";
import { Nash } from "../secciones/machos/components/Nash";
import { Pedro } from "../secciones/machos/components/Pedro";
import { HembrasHomePages } from "../secciones/hembras/pages/HembrasHomePages";
import { Maxima } from "../secciones/hembras/components/Maxima";
import { Misitica } from "../secciones/hembras/components/Misitica";
import { Tessa } from "../secciones/hembras/components/Tessa";
import { JovenesHomePages } from "../secciones/jovenes/pages/JovenesHomePages";
import { Xammy } from "../secciones/jovenes/components/Xammy";
import { Zafira } from "../secciones/jovenes/components/Zafira";
import { Footer } from "./components/Footer";
import { useNavegacion } from "../../store/external/NavegacionContext";

export const HomePage = () => {
  const { value: navegacion } = useNavegacion();
  const [navecacionState, setNavecacionState] = useState<string | undefined>();

  useEffect(() => {
    setNavecacionState(navegacion as string | undefined);
  }, [navegacion]);

  const componentes: Record<string, JSX.Element> = {
    inicio: <HomeSesscionesHomePage />,
    machos: <ReproductoresHerzEdel />,
    hembras: <HembrasHomePages />,
    jovenes: <JovenesHomePages />,
    camadas: <CamadasHomePage />,
    contacto: <ContactoHomePage />,
    login: <LoginHomePage />,
    pedro: <Pedro />,
    irko: <Irko />,
    nash: <Nash />,
    maxima: <Maxima />,
    mistica: <Misitica />,
    tessa: <Tessa />,
    xammy: <Xammy />,
    zafira: <Zafira />,
  };

  return (
    <main>
      <Helmet>
        <title>Inicio | Herz Edel</title>
        <meta
          name="description"
          content="Bienvenido a Herz Edel. Descubre nuestras líneas de sangre ADRK y reproductores TOP Alemanes."
        />
        <meta property="og:title" content="Inicio | Herz Edel" />
        <meta
          property="og:description"
          content="Bienvenido a Herz Edel. Descubre nuestras líneas de sangre ADRK y reproductores TOP Alemanes."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="flex flex-col min-h-screen bg-white">
        <header className="w-full px-4 py-2 bg-gray-100 shadow-md">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 tracking-tight">
            Herz Edel Kennel
          </h1>
        </header>
        {/* Presentación SEO visible SOLO en la home */}
        {(!navecacionState || navecacionState === "inicio") && (
          <section className="w-full max-w-2xl mx-auto mt-4 mb-2 text-center">
            <p className="text-lg text-gray-700 font-medium">
              Bienvenido a Herz Edel, criadero de Rottweilers en Argentina. Trabajamos exclusivamente con líneas de sangre alemanas e importamos ejemplares ADRK para garantizar la mejor genética, temperamento y salud. Ofrecemos cachorros de pedigree, camadas seleccionadas, machos reproductores, y asesoramiento profesional para familias y criadores responsables.
            </p>
          </section>
        )}
        {/* Contenido principal */}
        <main
          className="flex-grow w-full max-w-[1400px] mx-auto bg-white rounded-lg shadow-lg p-2 md:p-6"
          role="main"
          tabIndex={-1}
          aria-label="Contenido principal"
        >
          {componentes[navecacionState || "inicio"]}
        </main>
        {/* Footer siempre abajo */}
        <Footer />
      </div>
    </main>
  );
};

export default HomePage;

import { useEffect, useState, lazy, Suspense } from "react";
import { Helmet } from 'react-helmet-async';
import { useNavegacion } from "../../store/external/NavegacionContext";
import { Footer } from "./components/Footer";

// Lazy loading the components to drastically reduce initial bundle size
const CamadasHomePage = lazy(() => import("../secciones/camadas/pages/CamadasHomePage").then(m => ({ default: m.CamadasHomePage })));
const ContactoHomePage = lazy(() => import("../secciones/contacto/pages/ContactoHomePage").then(m => ({ default: m.ContactoHomePage })));
const LoginHomePage = lazy(() => import("../../Auth/pages/LoginHomePage").then(m => ({ default: m.LoginHomePage })));
const HomeSesscionesHomePage = lazy(() => import("../secciones/home/pages/HomeSesscionesHomePage").then(m => ({ default: m.HomeSesscionesHomePage })));
const ReproductoresHerzEdel = lazy(() => import("../secciones/machos/pages/ReproductoresHerzEdel"));
const Irko = lazy(() => import("../secciones/machos/components/Irko").then(m => ({ default: m.Irko })));
const Nash = lazy(() => import("../secciones/machos/components/Nash").then(m => ({ default: m.Nash })));
const Pedro = lazy(() => import("../secciones/machos/components/Pedro").then(m => ({ default: m.Pedro })));
const HembrasHomePages = lazy(() => import("../secciones/hembras/pages/HembrasHomePages").then(m => ({ default: m.HembrasHomePages })));
const Maxima = lazy(() => import("../secciones/hembras/components/Maxima").then(m => ({ default: m.Maxima })));
const Misitica = lazy(() => import("../secciones/hembras/components/Misitica").then(m => ({ default: m.Misitica })));
const Tessa = lazy(() => import("../secciones/hembras/components/Tessa").then(m => ({ default: m.Tessa })));
const Zafira = lazy(() => import("../secciones/hembras/components/Zafira").then(m => ({ default: m.Zafira })));
const Xammy = lazy(() => import("../secciones/hembras/components/Xammy").then(m => ({ default: m.Xammy })));
const JovenesHomePages = lazy(() => import("../secciones/jovenes/pages/JovenesHomePages").then(m => ({ default: m.JovenesHomePages })));
const Bruce = lazy(() => import("../secciones/jovenes/components/Bruce").then(m => ({ default: m.Bruce })));
const Conny = lazy(() => import("../secciones/jovenes/components/Conny").then(m => ({ default: m.Conny })));
const DashboardPage = lazy(() => import("../../Logged/pages/DashboardPage").then(m => ({ default: m.DashboardPage })));

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
    bruce: <Bruce />,
    conny: <Conny />, 
    DashboardPage: <DashboardPage />,
  };

  return (
    <main>
        <Helmet>
          <title>Venta de Cachorros Rottweiler | Criadero Herz Edel</title>
          <meta
            name="description"
            content="Bienvenido a Herz Edel. Criadero especialista en venta de cachorros Rottweiler y líneas de sangre ADRK en Argentina."
          />
          <meta property="og:title" content="Venta de Cachorros Rottweiler | Criadero Herz Edel" />
          <meta
            property="og:description"
            content="Bienvenido a Herz Edel. Criadero especialista en venta de cachorros Rottweiler y líneas de sangre ADRK en Argentina."
          />
          <meta property="og:type" content="website" />
        </Helmet>
      <div className="flex flex-col min-h-screen bg-white">
        <header className="w-full px-4 py-2 bg-gray-100 shadow-md">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 tracking-tight">
            Herz Edel Kennel
          </h1>
        </header>
        {/* Presentación SEO visible SOLO en la home (inicio) */}
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
          <Suspense fallback={<div className="flex justify-center p-12"><div className="w-10 h-10 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div></div>}>
            {componentes[navecacionState || "inicio"]}
          </Suspense>
        </main>
        {/* Footer siempre abajo */}
        <Footer />
      </div>
    </main>
  );
};

export default HomePage;

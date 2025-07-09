 import { useSelector } from "react-redux";
 import { useEffect, useState } from "react"; 
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





export const HomePage = () => {
  const navegacion = useSelector<{ navegacion: { value: string | null } }>(
    (state) => state.navegacion.value || null
  );



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
    zafira: <Zafira />
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
 
      {/* Contenido principal */}
      <div className="flex-grow w-full max-w-[1400px] mx-auto bg-white rounded-lg shadow-lg">
        {componentes[navecacionState || "inicio"]}
      </div>

      {/* Footer siempre abajo */}
      <Footer />
    </div>
  );
};

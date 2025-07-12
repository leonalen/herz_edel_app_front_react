import { Helmet } from "react-helmet-async";
import { Button } from "../components/ui/Button";


export const Settings = () => {
  return (
    <main>
      <Helmet>
        <title>Configuración | Herz Edel</title>
        <meta name="description" content="Página de configuración de usuario en Herz Edel." />
        <meta property="og:title" content="Configuración | Herz Edel" />
        <meta property="og:description" content="Página de configuración de usuario en Herz Edel." />
        <meta property="og:type" content="website" />
      </Helmet>
      <section
        className="w-full max-w-2xl mx-auto p-4 md:p-8 bg-white rounded-lg shadow-md"
        role="region"
        aria-label="Configuración"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Configuración</h2>
        <div className="flex flex-col items-center gap-4">
          <Button onClick={() => alert('¡Configuración guardada!')}>
            Guardar configuración
          </Button>
        </div>
      </section>
    </main>
  );
};

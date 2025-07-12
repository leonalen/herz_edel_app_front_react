import { Card } from "../components/ui/Card";
import { Helmet } from "react-helmet-async";

export const Dashboard = () => {
  return (
    <main>
      <Helmet>
        <title>Panel de Control | Herz Edel</title>
        <meta
          name="description"
          content="Panel de control de Herz Edel. Accede a estadísticas y configuraciones."
        />
        <meta property="og:title" content="Panel de Control | Herz Edel" />
        <meta
          property="og:description"
          content="Panel de control de Herz Edel. Accede a estadísticas y configuraciones."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <section
        className="w-full max-w-5xl mx-auto p-4 md:p-8"
        role="region"
        aria-label="Panel de control"
      >
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 text-center">
          Panel de Control
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card title="Dashboard" content="Welcome to the dashboard!" />
          <Card title="Statistics" content="Here are some stats." />
        </div>
      </section>
    </main>
  );
};

import { useAuth } from "../../Auth/context/useAuth";
import { Card } from "../../External/components/ui/Card";

export const DashboardPage = () => {
  const { user } = useAuth();
  return (
    <main className="w-full max-w-5xl mx-auto p-4 md:p-8">
      <title>Panel de Control | Herz Edel</title>
      <meta name="robots" content="noindex, nofollow" />
      
      <section role="region" aria-label="Panel de control">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center">
          Panel de Control
        </h1>
        {user && (
          <p className="text-lg text-center text-gray-600 mb-8">
            Bienvenido, <span className="font-semibold">{user.name}</span>!
          </p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="Gestión de Usuarios" content="Administra los roles y permisos de los usuarios." />
          <Card title="Contenido del Sitio" content="Edita las secciones de machos, hembras y camadas." />
        </div>
      </section>
    </main>
  );
};

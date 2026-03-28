import { Route, Routes } from "react-router-dom"
import { Suspense, lazy } from "react"
import { FiSettings } from "react-icons/fi"
import { PublicLayout } from "../External/components/layout/PublicLayout"

// Lazy loading the components to drastically reduce initial bundle size
const CamadasHomePage = lazy(() => import("../External/secciones/camadas/pages/CamadasHomePage").then(m => ({ default: m.CamadasHomePage })));
const ContactoHomePage = lazy(() => import("../External/secciones/contacto/pages/ContactoHomePage").then(m => ({ default: m.ContactoHomePage })));
const LoginHomePage = lazy(() => import("../Auth/pages/LoginHomePage").then(m => ({ default: m.LoginHomePage })));
const HomeSesscionesHomePage = lazy(() => import("../External/secciones/home/pages/HomeSesscionesHomePage").then(m => ({ default: m.HomeSesscionesHomePage })));
const ReproductoresHerzEdel = lazy(() => import("../External/secciones/machos/pages/ReproductoresHerzEdel"));
const Irko = lazy(() => import("../External/secciones/machos/components/Irko").then(m => ({ default: m.Irko })));
const Nash = lazy(() => import("../External/secciones/machos/components/Nash").then(m => ({ default: m.Nash })));
const Pedro = lazy(() => import("../External/secciones/machos/components/Pedro").then(m => ({ default: m.Pedro })));
const HembrasHomePages = lazy(() => import("../External/secciones/hembras/pages/HembrasHomePages").then(m => ({ default: m.HembrasHomePages })));
const Maxima = lazy(() => import("../External/secciones/hembras/components/Maxima").then(m => ({ default: m.Maxima })));
const Misitica = lazy(() => import("../External/secciones/hembras/components/Misitica").then(m => ({ default: m.Misitica })));
const Tessa = lazy(() => import("../External/secciones/hembras/components/Tessa").then(m => ({ default: m.Tessa })));
const Zafira = lazy(() => import("../External/secciones/hembras/components/Zafira").then(m => ({ default: m.Zafira })));
const Xammy = lazy(() => import("../External/secciones/hembras/components/Xammy").then(m => ({ default: m.Xammy })));
const JovenesHomePages = lazy(() => import("../External/secciones/jovenes/pages/JovenesHomePages").then(m => ({ default: m.JovenesHomePages })));
const Bruce = lazy(() => import("../External/secciones/jovenes/components/Bruce").then(m => ({ default: m.Bruce })));
const Conny = lazy(() => import("../External/secciones/jovenes/components/Conny").then(m => ({ default: m.Conny })));
const DashboardPage = lazy(() => import("../Logged/pages/DashboardPage").then(m => ({ default: m.DashboardPage })));

export const AppRouter = () => {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-gray-50"><div className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div></div>}>
      <Routes>
        {/* Rutas Públicas bajo PublicLayout */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={
            <>
              <section className="w-full max-w-2xl mx-auto mt-4 mb-2 text-center px-4">
                <p className="text-lg text-gray-700 font-medium">
                  Bienvenido a Herz Edel, criadero de Rottweilers en Argentina. Trabajamos exclusivamente con líneas de sangre alemanas e importamos ejemplares ADRK para garantizar la mejor genética, temperamento y salud. Ofrecemos cachorros de pedigree, camadas seleccionadas, machos reproductores, y asesoramiento profesional.
                </p>
              </section>
              <HomeSesscionesHomePage />
            </>
          } />
          
          <Route path="machos" element={<ReproductoresHerzEdel />} />
          <Route path="machos/irko" element={<Irko />} />
          <Route path="machos/nash" element={<Nash />} />
          <Route path="machos/pedro" element={<Pedro />} />
          
          <Route path="hembras" element={<HembrasHomePages />} />
          <Route path="hembras/maxima" element={<Maxima />} />
          <Route path="hembras/mistica" element={<Misitica />} />
          <Route path="hembras/tessa" element={<Tessa />} />
          <Route path="hembras/zafira" element={<Zafira />} />
          <Route path="hembras/xammy" element={<Xammy />} />
          
          <Route path="jovenes" element={<JovenesHomePages />} />
          <Route path="jovenes/bruce" element={<Bruce />} />
          <Route path="jovenes/conny" element={<Conny />} />
          
          <Route path="camadas" element={<CamadasHomePage />} />
          <Route path="contacto" element={<ContactoHomePage />} />
          <Route path="login" element={<LoginHomePage />} />
        </Route>

        {/* Dashboard completamente aislado del layout público */}
        <Route path="/dashboard" element={<DashboardPage />} />
        
        {/* Settings (existente independiente) */}
        <Route path="/settings" element={<FiSettings size={48} />} />
      </Routes>
    </Suspense>
  )
}

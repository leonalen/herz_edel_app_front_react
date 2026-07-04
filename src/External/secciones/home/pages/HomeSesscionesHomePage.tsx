import { CarouselHome } from "../../../pages/components/CarouselHome";
import { SeparadorContainers } from "../components/SeparadorContainers";
import { Head as Helmet } from "vite-react-ssg";

export const HomeSesscionesHomePage = () => {
  return (
    <main>
      <Helmet>
        <title>Inicio | Herz Edel | Rottweilers de excelencia</title>
        <meta name="description" content="Bienvenido a Herz Edel, criadero de Rottweilers en Argentina. Líneas de sangre alemanas e importaciones ADRK." />
        <meta property="og:title" content="Inicio | Herz Edel" />
        <meta property="og:description" content="Bienvenido a Herz Edel, criadero de Rottweilers en Argentina." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Criadero Herz Edel",
            "image": "https://herzedel.com.ar/img/varios/rottweiler.webp",
            "@id": "https://herzedel.com.ar/#localbusiness",
            "url": "https://herzedel.com.ar/",
            "telephone": "+5491136716131",
            "email": "herzedel@gmail.com",
            "priceRange": "$$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Glew",
              "addressRegion": "Buenos Aires",
              "postalCode": "1856",
              "addressCountry": "AR"
            },
            "sameAs": [
              "https://www.facebook.com/leonardo.alencastro.9",
              "https://www.instagram.com/leonardo.alencastro.9"
            ],
            "description": "Criadero de Rottweilers de excelencia en Argentina con líneas de sangre alemanas e importaciones ADRK."
          })}
        </script>
      </Helmet>

      <section className="w-full max-w-2xl mx-auto mt-4 mb-6 text-center px-4">
        <p className="text-lg text-gray-700 font-medium">
          Bienvenido a Herz Edel, criadero de Rottweilers en Argentina. Trabajamos exclusivamente con líneas de sangre alemanas e importamos ejemplares ADRK para garantizar la mejor genética, temperamento y salud. Ofrecemos cachorros de pedigree, camadas seleccionadas, machos reproductores, y asesoramiento profesional.
        </p>
      </section>

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

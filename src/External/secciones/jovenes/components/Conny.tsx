import { useState } from 'react';
import OptimizedImage from '../../../components/OptimizedImage';
import { Head as Helmet } from "vite-react-ssg";

export const Conny = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const images = [
    { name: "Conny", src: "/img/varios/jovenes/conny/main.jpg" },
    { name: "Conny", src: "/img/varios/jovenes/conny/1.JPG" },
    { name: "Conny", src: "/img/varios/jovenes/conny/2.JPG" },
    { name: "Conny", src: "/img/varios/jovenes/conny/3.JPG" },
    { name: "Conny", src: "/img/varios/jovenes/conny/4.JPG" },
    { name: "Conny", src: "/img/varios/jovenes/conny/5.JPG" },
  ];
  return (
    <main className="container mx-auto px-2 py-4 w-full max-w-screen-xl">
      <Helmet>
        <title>Conny Herz Edel | Herz Edel</title>
        <meta name="description" content="Galería de imágenes de Conny Herz Edel, línea de sangre 100% ADRK, Joven Campeona Argentina." />
      </Helmet>

      <header>
        <h1 className="text-xl font-bold text-center text-yellow-600">Conny Herz Edel</h1>
        <p className="text-lg font-normal text-center text-yellow-600">Línea de sangre 100% ADRK</p>
        <p className="mb-3 text-lg font-bold text-center text-yellow-600">Joven Campeona Argentina</p>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-screen-xl mx-auto" aria-label="Galería de Conny">
        {images.map((dog, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center transition-transform duration-300"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <OptimizedImage
              src={dog.src}
              alt={`Foto de Conny ${index + 1}`}
              loading="lazy"
              width="400"
              height="400"
              className={`rounded-lg border-2 border-white shadow-lg transition-transform duration-300 scale-75 ${hoveredIndex === index ? "scale-125 z-20" : ""}`}
            />
          </div>
        ))}
      </section>
    </main>
  );
};

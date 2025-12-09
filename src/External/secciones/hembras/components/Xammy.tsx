import { useState } from 'react';
import OptimizedImage from '../../../components/OptimizedImage';

export const Xammy = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const images = [
    { name: "Xammy", src: "/img/varios/hembras/xammy/1.JPG" },
    { name: "Xammy", src: "/img/varios/hembras/xammy/2.JPG" },
    { name: "Xammy", src: "/img/varios/hembras/xammy/3.JPG" },
    { name: "Xammy", src: "/img/varios/hembras/xammy/4.JPG" },
    { name: "Xammy", src: "/img/varios/hembras/xammy/5.JPG" },
      
  ];

  return (
    <main className="container mx-auto px-2 py-4 w-full max-w-screen-xl">
      <title>Xammy Max Herz Edel | Herz Edel</title>
      <meta name="description" content="Galería de imágenes de Xammy Max Herz Edel, genética 100% ADRK." />
      <header>
        <h1 className="text-xl font-bold text-center text-yellow-600">Xammy Max Herz Edel</h1>
        <p className="mb-3 text-lg font-normal text-center text-yellow-600">Genética 100% ADRK (HD- ED- ACRR) (Vitus 2-2)</p>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-screen-xl mx-auto" aria-label="Galería de Xammy">
        {images.map((dog, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center transition-transform duration-300"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <OptimizedImage
              src={dog.src}
              alt={`Foto de Xammy ${index + 1}`}
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
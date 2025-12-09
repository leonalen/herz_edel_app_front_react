import { useState } from "react";
import OptimizedImage from "../../../components/OptimizedImage";


export const Maxima = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const images = [
    { name: "Maxima", src: "/img/varios/hembras/maxima/1.JPG" },
    { name: "Maxima", src: "/img/varios/hembras/maxima/2.JPG" },
    { name: "Maxima", src: "/img/varios/hembras/maxima/3.JPG" },
    { name: "Maxima", src: "/img/varios/hembras/maxima/4.JPG" },
    { name: "Maxima", src: "/img/varios/hembras/maxima/5.JPG" },
    { name: "Maxima", src: "/img/varios/hembras/maxima/6.JPG" },
  ];
  return (
    <main className="container mx-auto px-2 py-4 w-full max-w-screen-xl">
      <title>Maxima vom Willicher Wappen | Herz Edel</title>
      <meta name="description" content="Galería de imágenes de Maxima vom Willicher Wappen, importada de Alemania." />
      <header>
        <h1 className="text-xl font-bold text-center text-yellow-600">Maxima vom Willicher Wappen HD- ED- ACRR</h1>
        <p className="mb-3 text-lg font-normal text-center text-yellow-600">Importada de Alemania.</p>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-screen-xl mx-auto" aria-label="Galería de Maxima">
        {images.map((dog, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center transition-transform duration-300"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <OptimizedImage
              src={dog.src}
              alt={`Foto de Maxima ${index + 1}`}
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
}

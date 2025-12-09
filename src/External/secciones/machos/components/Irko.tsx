import { useState } from "react";
import OptimizedImage from "../../../components/OptimizedImage";

export const Irko = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const images = [
    { name: "Irko", src: "/img/varios/machos/irko/1.JPG" },
    { name: "Irko", src: "/img/varios/machos/irko/2.JPG" },
    { name: "Irko", src: "/img/varios/machos/irko/3.jpg" },
    { name: "Irko", src: "/img/varios/machos/irko/4.JPG" },
    { name: "Irko", src: "/img/varios/machos/irko/5.jpg" },
    { name: "Irko", src: "/img/varios/machos/irko/6.jpg" },
    { name: "Irko", src: "/img/varios/machos/irko/7.jpg" },
    { name: "Irko", src: "/img/varios/machos/irko/8.jpg" }
  ];
  return (
    <main className="container mx-auto px-2 py-4 w-full max-w-screen-xl">
      <title>Irko de Batanen | Herz Edel</title>
      <meta name="description" content="Galería de imágenes de Irko de Batanen, reproductor Herz Edel." />
      <header>
        <h1 className="text-xl font-bold text-center text-yellow-600">Irko de Batanen</h1>
        <p className="mb-3 text-lg font-normal text-center text-yellow-600">Importado de España - Genética 100% ADRK</p>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-screen-xl mx-auto" aria-label="Galería de Irko">
        {images.map((dog, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center transition-transform duration-300"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <OptimizedImage
              src={dog.src}
              alt={`Foto de Irko ${index + 1}`}
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
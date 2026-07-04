import { useState } from "react";
import OptimizedImage from "../../../components/OptimizedImage";
import { Head as Helmet } from "vite-react-ssg";

export const Mistica = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const images = [
    { name: "Mistica", src: "/img/varios/hembras/mistica/1.jpg" },
    { name: "Mistica", src: "/img/varios/hembras/mistica/2.jpg" },
    { name: "Mistica", src: "/img/varios/hembras/mistica/3.jpg" },
    { name: "Mistica", src: "/img/varios/hembras/mistica/4.jpg" },
    { name: "Mistica", src: "/img/varios/hembras/mistica/5.jpg" },
    { name: "Mistica", src: "/img/varios/hembras/mistica/6.jpg" },
    { name: "Mistica", src: "/img/varios/hembras/mistica/7.jpg" },
    { name: "Mistica", src: "/img/varios/hembras/mistica/8.jpg" },
    { name: "Mistica", src: "/img/varios/hembras/mistica/9.jpg" },
    { name: "Mistica", src: "/img/varios/hembras/mistica/10.JPG" },
    { name: "Mistica", src: "/img/varios/hembras/mistica/11.JPG" },
    { name: "Mistica", src: "/img/varios/hembras/mistica/12.jpg" },
    { name: "Mistica", src: "/img/varios/hembras/mistica/13.jpg" },
    { name: "Mistica", src: "/img/varios/hembras/mistica/14.jpg" },
    { name: "Mistica", src: "/img/varios/hembras/mistica/15.jpg" },
    { name: "Mistica", src: "/img/varios/hembras/mistica/16.jpg" },
    { name: "Mistica", src: "/img/varios/hembras/mistica/17.jpg" },
    { name: "Mistica", src: "/img/varios/hembras/mistica/18.jpg" },
  ];
  return (
    <main className="container mx-auto px-2 py-4 w-full max-w-screen-xl">
      <Helmet>
        <title>Mistica Max Herz Edel | Herz Edel</title>
        <meta name="description" content="Galería de imágenes de Mistica Max Herz Edel, genética 100% ADRK, Multi V1, Campeona y Gran Campeona Argentina." />
      </Helmet>
      <header>
        <h1 className="text-xl font-bold text-center text-yellow-600">Mistica Max Herz Edel</h1>
        <p className="mb-3 text-lg font-normal text-center text-yellow-600">Genética 100% ADRK - Multi V1 - Campeona y Gran Campeona Argentina.</p>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-screen-xl mx-auto" aria-label="Galería de Mistica">
        {images.map((dog, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center transition-transform duration-300"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <OptimizedImage
              src={dog.src}
              alt={`Foto de Mistica ${index + 1}`}
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

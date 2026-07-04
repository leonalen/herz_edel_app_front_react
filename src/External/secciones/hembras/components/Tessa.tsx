import { useState } from 'react'
import OptimizedImage from '../../../components/OptimizedImage';
import { Head as Helmet } from "vite-react-ssg";

export const Tessa = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const images = [
    { name: "Tessa", src: "/img/varios/hembras/tessa/1.jpg" },
    { name: "Tessa", src: "/img/varios/hembras/tessa/2.jpg" },
    { name: "Tessa", src: "/img/varios/hembras/tessa/3.JPG" },
    { name: "Tessa", src: "/img/varios/hembras/tessa/4.JPG" },
    { name: "Tessa", src: "/img/varios/hembras/tessa/5.JPG" },
    { name: "Tessa", src: "/img/varios/hembras/tessa/6.JPG" },
    { name: "Tessa", src: "/img/varios/hembras/tessa/7.JPG" },
    { name: "Tessa", src: "/img/varios/hembras/tessa/8.JPG" },
    { name: "Tessa", src: "/img/varios/hembras/tessa/9.JPG" },
    { name: "Tessa", src: "/img/varios/hembras/tessa/10.jpg" },
    { name: "Tessa", src: "/img/varios/hembras/tessa/11.jpg" },
  ];
  return (
    <main className="container mx-auto px-2 py-4 w-full max-w-screen-xl">
      <Helmet>
        <title>Tessa Max Herz Edel | Herz Edel</title>
        <meta name="description" content="Galería de imágenes de Tessa Max Herz Edel, genética 100% ADRK." />
      </Helmet>
      <header>
        <h1 className="text-xl font-bold text-center text-yellow-600">Tessa Max Herz Edel HD- ED- ACRR</h1>
        <p className="mb-3 text-lg font-normal text-center text-yellow-600">Genética 100% ADRK</p>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-screen-xl mx-auto" aria-label="Galería de Tessa">
        {images.map((dog, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center transition-transform duration-300"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <OptimizedImage
              src={dog.src}
              alt={`Foto de Tessa ${index + 1}`}
              loading="lazy"
              width="400"
              height="400"
              className={`rounded-lg border-2 border-white shadow-lg transition-transform duration-300 scale-75 ${hoveredIndex === index ? "scale-125 z-20" : ""}`}
            />
          </div>
        ))}
      </section>
    </main>
  )
}

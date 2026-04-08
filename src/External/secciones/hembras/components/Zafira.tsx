import { useState } from 'react'
import OptimizedImage from '../../../components/OptimizedImage';

export const Zafira = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const images = [
    { name: "Zafira", src: "/img/varios/hembras/zafira/1.jpg" },
    { name: "Zafira", src: "/img/varios/hembras/zafira/2.jpg" },
    { name: "Zafira", src: "/img/varios/hembras/zafira/3.jpg" },
    { name: "Zafira", src: "/img/varios/hembras/zafira/4.JPG" },
    { name: "Zafira", src: "/img/varios/hembras/zafira/5.jpg" },
    { name: "Zafira", src: "/img/varios/hembras/zafira/6.jpg" },
    { name: "Zafira", src: "/img/varios/hembras/zafira/7.jpg" },
    { name: "Zafira", src: "/img/varios/hembras/zafira/8.jpg" },
    { name: "Zafira", src: "/img/varios/hembras/zafira/9.jpg" },
    { name: "Zafira", src: "/img/varios/hembras/zafira/10.jpg" },
    { name: "Zafira", src: "/img/varios/hembras/zafira/11.jpg" },
  ];
  return (
    <main className="container mx-auto px-2 py-4 w-full max-w-screen-xl">
      <title>Zafira Herz Edel | Herz Edel</title>
      <meta name="description" content="Galería de imágenes de Zafira Herz Edel, línea de sangre 100% ADRK." />
      <header>
        <h1 className="text-xl font-bold text-center text-yellow-600">Zafira Herz Edel</h1>
        <p className="mb-3 text-lg font-normal text-center text-yellow-600">Línea de sangre 100% ADRK</p>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-screen-xl mx-auto" aria-label="Galería de Zafira">
        {images.map((dog, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center transition-transform duration-300"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <OptimizedImage
              src={dog.src}
              alt={`Foto de Zafira ${index + 1}`}
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

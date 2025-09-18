import { Helmet } from "react-helmet-async";
import { useState } from 'react'

export const Bruce = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const images = [
    { name: "Bruce", src: "/img/varios/jovenes/bruce/1.JPG" },
    { name: "Bruce", src: "/img/varios/jovenes/bruce/2.JPG" },
    { name: "Bruce", src: "/img/varios/jovenes/bruce/3.JPG" },
  ];
  return (
    <main className="container mx-auto px-2 py-4 w-full max-w-screen-xl">
      <Helmet>
        <title>Bruce Leal Do Riacho Negro | Herz Edel</title>
        <meta name="description" content="Galería de imágenes de Xammy Max Herz Edel, línea de sangre 100% ADRK." />
      </Helmet>
      <header>
        <h1 className="text-xl font-bold text-center text-yellow-600">Bruce Leal Do Riacho Negro</h1>
        <p className="mb-3 text-lg font-normal text-center text-yellow-600">Líneas de sangre 100% ADRK</p>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-screen-xl mx-auto" aria-label="Galería de Xammy">
        {images.map((dog, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center transition-transform duration-300"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <picture>
              <img
                src={dog.src}
                alt={`Fotos de Bruce ${index + 1}`}
                loading="lazy"
                width="400"
                height="400"
                className={`rounded-lg border-2 border-white shadow-lg transition-transform duration-300 scale-75 ${hoveredIndex === index ? "scale-125 z-20" : ""}`}
              />
            </picture>
          </div>
        ))}
      </section>
    </main>
  )
}

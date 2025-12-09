import { useState } from 'react'
import OptimizedImage from '../../../components/OptimizedImage';

export const Pedro = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const images = [
    { name: "Pedro", src: "/img/varios/machos/pedro/1.jpg" },
    { name: "Pedro", src: "/img/varios/machos/pedro/2.jpg"},
    { name: "Pedro", src: "/img/varios/machos/pedro/3.jpg" },
    { name: "Pedro", src: "/img/varios/machos/pedro/4.jpg" },
    { name: "Pedro", src: "/img/varios/machos/pedro/5.jpg"},
    { name: "Pedro", src: "/img/varios/machos/pedro/6.jpg" }
  ];
  return (
    <main className="container mx-auto px-2 py-4 w-full max-w-screen-xl">
      <title>Pedro vom Willicher Wappen | Herz Edel</title>
      <meta name="description" content="Galería de imágenes de Pedro vom Willicher Wappen, reproductor Herz Edel." />
      <header>
        <h1 className="text-xl font-bold text-center text-yellow-600">Pedro vom Willicher Wappen HD +/- ED- ACRR</h1>
        <p className="mb-3 text-lg font-normal text-center text-yellow-600">Importado de Alemania.</p>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-screen-xl mx-auto" aria-label="Galería de Pedro">
        {images.map((dog, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center transition-transform duration-300"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <OptimizedImage
              src={dog.src}
              alt={`Foto de Pedro ${index + 1}`}
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

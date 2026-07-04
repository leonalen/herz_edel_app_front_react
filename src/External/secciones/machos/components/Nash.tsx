import { useState } from "react";
import OptimizedImage from "../../../components/OptimizedImage";
import { Head as Helmet } from "vite-react-ssg";

export const Nash = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const images = [
    { name: "Nash", src: "/img/varios/machos/nash/1.JPG" },
    { name: "Nash", src: "/img/varios/machos/nash/2.JPG" },
    { name: "Nash", src: "/img/varios/machos/nash/3.JPG" },
    { name: "Nash", src: "/img/varios/machos/nash/4.JPG" },
    { name: "Nash", src: "/img/varios/machos/nash/5.JPG" },
    { name: "Nash", src: "/img/varios/machos/nash/6.JPG" },
    { name: "Nash", src: "/img/varios/machos/nash/7.JPG" },
    { name: "Nash", src: "/img/varios/machos/nash/8.JPG" },
    { name: "Nash", src: "/img/varios/machos/nash/9.JPG" },
    { name: "Nash", src: "/img/varios/machos/nash/10.JPG" },
    { name: "Nash", src: "/img/varios/machos/nash/11.jpg" },
    { name: "Nash", src: "/img/varios/machos/nash/12.jpg" },
    { name: "Nash", src: "/img/varios/machos/nash/13.jpg" },
    { name: "Nash", src: "/img/varios/machos/nash/14.jpg" },
    { name: "Nash", src: "/img/varios/machos/nash/15.jpg" },
  ];
  return (
    <main className="container mx-auto px-2 py-4 w-full max-w-screen-xl">
      <Helmet>
        <title>Nash vom Willicher Wappen | Herz Edel</title>
        <meta name="description" content="Galería de imágenes de Nash vom Willicher Wappen, reproductor Herz Edel." />
      </Helmet>

      <header>
        <h1 className="text-xl font-bold text-center text-yellow-600">Nash vom Willicher Wappen HD- ED- ACRR</h1>
        <p className="mb-3 text-lg font-normal text-center text-yellow-600">Importado de Alemania - Joven Campeón Argentino.</p>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-screen-xl mx-auto" aria-label="Galería de Nash">
        {images.map((dog, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center transition-transform duration-300"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <OptimizedImage
              src={dog.src}
              alt={`Foto de Nash ${index + 1}`}
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

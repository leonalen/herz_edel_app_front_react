import { useState, useEffect, useRef } from "react";
import slide1 from "../../../assets/img/carousel/imagenes/dos.jpg";
import slide2 from "../../../assets/img/carousel/imagenes/tres.jpg";
import slide3 from "../../../assets/img/carousel/imagenes/cuatro.jpg";
import slide4 from "../../../assets/img/carousel/imagenes/cinco.jpg";
import slide5 from "../../../assets/img/carousel/imagenes/2025-03-23 - leo.jpg";
import slide6 from "../../../assets/img/carousel/imagenes/seis.jpg";
import slide7 from "../../../assets/img/carousel/imagenes/lucille1.jpg";
import slide8 from "../../../assets/img/carousel/imagenes/lucille2.jpg";

export const CarouselHome = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<number | null>(null);
  const images = [
    { name: "Mística", src: slide1 },
    { name: "Mística", src: slide2 },
    { name: "Mística", src: slide3 },
    { name: "Mística", src: slide4 },
    { name: "Mística", src: slide5 },
    { name: "Mística", src: slide6 },
    { name: "Mística", src: slide7 },
    { name: "Mística", src: slide8 },
  ];

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 3500);
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }
    return undefined;
  }, [current, isMobile, images.length]);

  const goTo = (idx: number) => setCurrent(idx);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const next = () => setCurrent((prev) => (prev + 1) % images.length);

  return (
    <div className="flex items-center justify-center bg-gray-200 py-4">
      {isMobile ? (
        <div className="container mx-auto px-2 py-4 w-full max-w-screen-xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mx-auto">
            {images.map((dog, index) => (
              <div key={index} className="relative flex justify-center items-center">
                <img
                  src={dog.src}
                  alt={dog.name}
                  className="rounded-lg border-2 border-white shadow-lg transition-transform duration-300 scale-90 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full max-w-[1000px] h-[400px] relative flex items-center justify-center">
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-2 z-10 hover:bg-opacity-70 focus:outline-none"
            aria-label="Anterior"
          >
            &#8592;
          </button>
          <img
            src={images[current].src}
            alt={images[current].name}
            className="rounded-lg border-2 border-white shadow-lg object-cover w-full h-full"
          />
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-2 z-10 hover:bg-opacity-70 focus:outline-none"
            aria-label="Siguiente"
          >
            &#8594;
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`w-3 h-3 rounded-full border-2 border-white ${current === idx ? 'bg-yellow-400' : 'bg-gray-400'} focus:outline-none`}
                aria-label={`Ir a la imagen ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

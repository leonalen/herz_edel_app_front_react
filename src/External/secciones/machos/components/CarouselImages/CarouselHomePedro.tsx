import { useState, useEffect, useRef } from "react";
import slide1 from "../../../../../../src/assets/img/varios/machos/irko.jpg";
import slide2 from "../../../../../../src/assets/img/varios/machos/irko.jpg";
import slide3 from "../../../../../../src/assets/img/varios/machos/irko.jpg";
import slide4 from "../../../../../../src/assets/img/varios/machos/irko.jpg";

export const CarouselHomePedro = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<number | null>(null);
  const images = [slide1, slide2, slide3, slide4];

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, images.length]);

  const goTo = (idx: number) => setCurrent(idx);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const next = () => setCurrent((prev) => (prev + 1) % images.length);

  return (
    <div className="flex items-center justify-center bg-gray-200">
      <div className="w-[900px] h-[400px] relative flex items-center justify-center">
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-2 z-10 hover:bg-opacity-70 focus:outline-none"
          aria-label="Anterior"
        >
          &#8592;
        </button>
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
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
    </div>
  );
};

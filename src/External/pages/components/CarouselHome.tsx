import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

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

  // Detectar el tamaño de pantalla
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Menos de 768px es móvil
    };

    checkScreenSize(); // Ejecutar en carga inicial
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

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

  return (
    <div className="flex items-center justify-center bg-gray-200 py-4">
      {isMobile ? (
        // 📱 Grid de imágenes en móvil
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
        // 🖥 Carrusel en pantallas grandes
        <div className="w-full max-w-[1000px] h-auto">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={500}
            pagination={{ clickable: true }}
            navigation={true}
            className="w-full h-auto"
          >
            {images.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center h-full">
                  <img
                    src={slide.src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

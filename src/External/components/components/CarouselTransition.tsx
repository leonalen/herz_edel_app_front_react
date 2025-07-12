import { Carousel } from "@material-tailwind/react";
import { Helmet } from "react-helmet-async";

const CarouselTransition = () => {
  return (
    <>
      <Helmet>
        <title>Carrusel de imágenes | Herz Edel</title>
        <meta name="description" content="Carrusel de imágenes de ejemplares Herz Edel." />
      </Helmet>
      <Carousel
        transition={{ duration: 0.5 }}
        loop={true}
        autoplay={true}
        autoplayDelay={3000}
        className="rounded-lg"
        placeholder="Carousel placeholder"
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        aria-label="Carrusel de imágenes"
      >
        <img
          src="https://via.placeholder.com/800x400"
          alt="Slide 1"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <img
          src="https://via.placeholder.com/800x400"
          alt="Slide 2"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <img
          src="https://via.placeholder.com/800x400"
          alt="Slide 3"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </>
  );
};

export default CarouselTransition;


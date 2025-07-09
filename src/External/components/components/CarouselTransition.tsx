import { Carousel } from "@material-tailwind/react";

const CarouselTransition = () => {

  return (
    <Carousel
        transition={{ duration: 0.5 }}
        loop={true}
        autoplay={true}
        autoplayDelay={3000}
        className="rounded-lg"
        placeholder="Carousel placeholder" // Agregado para cumplir con los tipos
        onPointerEnterCapture={() => {}} // Callback vacío
        onPointerLeaveCapture={() => {}} // Callback vacío
    >
        <img
        src="https://via.placeholder.com/800x400"
        alt="Slide 1"
        className="h-full w-full object-cover"
        />
        <img
        src="https://via.placeholder.com/800x400"
        alt="Slide 2"
        className="h-full w-full object-cover"
        />
        <img
        src="https://via.placeholder.com/800x400"
        alt="Slide 3"
        className="h-full w-full object-cover"
        />
  </Carousel>
  );
};

export default CarouselTransition;


import { CarouselHomePedro } from "./CarouselImages/CarouselHomePedro"

export const PedroCarousel = () => {


  return (
      <div className="max-w-[1100px] max-h-[100vh] w-full h-auto flex flex-col items-center justify-center bg-gray-200 p-0 rounded-lg shadow-lg mx-auto">
        {/* Contenedor del separador */}
        <div className="w-full flex justify-center mb-3">
                Pedro vom Willicher Wappen
        </div>
  
        {/* Contenedor del carrusel */}
        <div className="w-full flex justify-center">
          <CarouselHomePedro />
        </div>
      </div>
  )
}

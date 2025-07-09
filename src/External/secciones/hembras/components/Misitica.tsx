

import  { useState } from 'react'

export const Misitica = () => {

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
   
       const images = [
           { name: "Mistica", src: "/img/varios/hembras/mistica/1.jpg" },
           { name: "Mistica", src: "/img/varios/hembras/mistica/2.jpg" },
           { name: "Mistica", src: "/img/varios/hembras/mistica/3.jpg" },
           { name: "Mistica", src: "/img/varios/hembras/mistica/4.jpg" },
           { name: "Mistica", src: "/img/varios/hembras/mistica/5.jpg" },
           { name: "Mistica", src: "/img/varios/hembras/mistica/6.jpg" },
           { name: "Mistica", src: "/img/varios/hembras/mistica/7.jpg" },
           { name: "Mistica", src: "/img/varios/hembras/mistica/8.jpg" },
           { name: "Mistica", src: "/img/varios/hembras/mistica/9.jpg" },
           { name: "Mistica", src: "/img/varios/hembras/mistica/10.jpg" },
           { name: "Mistica", src: "/img/varios/hembras/mistica/11.jpg" },
           { name: "Mistica", src: "/img/varios/hembras/mistica/12.jpg" },
           { name: "Mistica", src: "/img/varios/hembras/mistica/13.jpg" },
           { name: "Mistica", src: "/img/varios/hembras/mistica/14.jpg" },
           { name: "Mistica", src: "/img/varios/hembras/mistica/15.jpg" },
           { name: "Mistica", src: "/img/varios/hembras/mistica/16.jpg" },
           { name: "Mistica", src: "/img/varios/hembras/mistica/17.jpg" },
           { name: "Mistica", src: "/img/varios/hembras/mistica/18.jpg" },
       ];
   
       return (
        <div className="container mx-auto px-2 py-4 w-full max-w-screen-xl">
               <p className="text-xl font-bold text-center text-yellow-600">Mistica Max Herz Edel</p>
               <p className="mb-3 text-lg font-normal text-center text-yellow-600">
                     Genética 100% ADRK - Multi V1 - Campeona y Gran Campeona Argentina.
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-screen-xl mx-auto">
                   {images.map((dog, index) => (
                       <div 
                           key={index} 
                           className="relative flex justify-center items-center transition-transform duration-300"
                           onMouseEnter={() => setHoveredIndex(index)}
                           onMouseLeave={() => setHoveredIndex(null)}
                       >
                                <img 
                                    src={dog.src} 
                                    alt={dog.name} 
                                    className={`rounded-lg border-2 border-white shadow-lg transition-transform duration-300 
                                        scale-75 ${hoveredIndex === index ? "scale-125 z-20" : ""}
                                    `}
                                />
                       </div>
                   ))}
               </div>
           </div>
  )
}


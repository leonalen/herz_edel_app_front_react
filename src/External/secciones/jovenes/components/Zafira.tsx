


import { useState } from 'react'

export const Zafira = () => {

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
   
       const images = [
        { name: "Zafira", src: "/img/varios/jovenes/zafira/1.jpg" },
        { name: "Zafira", src: "/img/varios/jovenes/zafira/2.jpg" },
        { name: "Zafira", src: "/img/varios/jovenes/zafira/3.jpg" },
        { name: "Zafira", src: "/img/varios/jovenes/zafira/4.jpg" },
        { name: "Zafira", src: "/img/varios/jovenes/zafira/5.jpg" },
        { name: "Zafira", src: "/img/varios/jovenes/zafira/6.jpg" },
        { name: "Zafira", src: "/img/varios/jovenes/zafira/7.jpg" },
       ];
   
       return (
        <div className="container mx-auto px-2 py-4 w-full max-w-screen-xl">
               <p className="text-xl font-bold text-center text-yellow-600">Zafira Herz Edel</p>
               <p className="mb-3 text-lg font-normal text-center text-yellow-600">
                   Linea de sangre 100% ADRK
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


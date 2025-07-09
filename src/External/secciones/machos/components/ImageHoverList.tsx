

import { useState } from "react";

const ImageHoverList = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const images = [
        { name: "Pedro", src: "/img/varios/machos/pedro.jpg" },
        { name: "Irko", src: "/img/varios/machos/irko.jpg" },
        { name: "Nash", src: "/img/varios/machos/nash.jpg" },
        { name: "Pedro", src: "/img/varios/machos/pedro.jpg" },
        { name: "Irko", src: "/img/varios/machos/irko.jpg" },
        { name: "Nash", src: "/img/varios/machos/nash.jpg" },
        { name: "Pedro", src: "/img/varios/machos/pedro.jpg" },
        { name: "Irko", src: "/img/varios/machos/irko.jpg" },
        { name: "Nash", src: "/img/varios/machos/nash.jpg" },
        { name: "Pedro", src: "/img/varios/machos/pedro.jpg" },
        { name: "Irko", src: "/img/varios/machos/irko.jpg" },
        { name: "Nash", src: "/img/varios/machos/nash.jpg" }
    ];

    return (
        <div className="container mx-auto px-2 py-4 max-w-screen-md">
            <p className="text-xl font-bold text-center text-yellow-600">Reproductores Herz Edel</p>
            <p className="mb-3 text-lg font-normal text-center text-yellow-600">
                Pasa el mouse sobre una imagen para ampliarla.
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
                                ${hoveredIndex === index ? "scale-125 z-10" : "scale-100"}
                            `}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageHoverList;

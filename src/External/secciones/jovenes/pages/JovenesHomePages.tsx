import { useDispatch } from "react-redux";
import { addNavegacion } from "../../../../store/external/navegacionExternalSlice";


export const JovenesHomePages = () => {
    const dispatch = useDispatch();

    const handleSelectReproductor = (name: string) => {
        dispatch(addNavegacion(name.toLowerCase())); // Guarda en Redux con el nombre en minúsculas
    };

    return (
        <div className="container mx-auto px-2 py-4 max-w-screen-md">
            <p className="text-xl font-bold text-center text-yellow-600">Jovenes Herz Edel</p>
            <p className="mb-3 text-lg font-normal text-center text-yellow-600">
                Líneas de sangre 100% ADRK con los reproductores TOP Alemanes.
            </p>

            {/* Contenedor flex para centrar las imágenes */}
            <div className="flex flex-wrap justify-center gap-8 max-w-screen-xl mx-auto">
                {[
                    {
                        name: "Xammy",
                        img: "/img/varios/jovenes/xammy/1.jpg",
                        details: " Genética 100% ADRK (Vitus 2-2)",
                        lineage: "Jerry del' All Serrat X Maxima vom Willicher Wappen"
                    },
                    {
                        name: "Zafira",
                        img: "/img/varios/jovenes/zafira/1.jpg",
                        details: "Genética 100% ADRK",
                        lineage: "Nash vom Willicher Wappen X Tessa Max Herz Edel"
                    },
                ].map((dog, index) => (
                    <div 
                        key={index} 
                        className="flex flex-col items-center text-center h-full cursor-pointer"
                        onClick={() => handleSelectReproductor(dog.name)}
                    >
                        <img 
                            alt={dog.name} 
                            src={dog.img} 
                            className="object-cover rounded-lg h-48 w-48 border-2 border-white dark:border-gray-800"
                        />
                        <div className="px-3 py-3 bg-white rounded-lg shadow dark:bg-gray-800 mt-4 flex flex-col h-full max-w-[250px]">
                            <p className="text-lg font-semibold text-yellow-500 dark:text-white">{dog.name}</p>
                            <p className="text-md font-light text-gray-600 dark:text-gray-200">{dog.details}</p>
                            <p className="py-2 text-sm font-light text-gray-500 dark:text-gray-400 flex-grow">
                                {dog.lineage}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

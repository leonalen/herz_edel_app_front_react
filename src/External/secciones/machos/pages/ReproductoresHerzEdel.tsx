import { useDispatch } from "react-redux";
import { addNavegacion } from "../../../../store/external/navegacionExternalSlice";

const ReproductoresHerzEdel = () => {
    const dispatch = useDispatch();

    const handleSelectReproductor = (name: string) => {
        dispatch(addNavegacion(name.toLowerCase())); // Guarda en Redux con el nombre en minúsculas
    };

    return (
        <div className="container mx-auto px-2 py-4 max-w-screen-md">
            <p className="text-xl font-bold text-center text-yellow-600">Reproductores Herz Edel</p>
            <p className="mb-3 text-lg font-normal text-center text-yellow-600">
                Las mejores líneas de sangre ADRK con los reproductores TOP Alemanes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
                {[
                    {
                        name: "Pedro",
                        img: "/img/varios/machos/pedro.jpg",
                        details: "ADRK (HD+/- ED- ACRR)",
                        lineage: "Adolf Bagieras X Hope vom Holzmichel"
                    },
                    {
                        name: "Irko",
                        img: "/img/varios/machos/irko.jpg",
                        details: "Importado de España - 100% líneas ADRK (HD- ED- ACRR)",
                        lineage: "Puma vom Wiltes Westen x Dasty de Batanen"
                    },
                    {
                        name: "Nash",
                        img: "/img/varios/machos/nash.jpg",
                        details: "ADRK (HD- ED- ACRR)",
                        lineage: "Rudi vom Hause Neubrand x Kim vom Willicher Wappen"
                    }
                ].map((dog, index) => (
                    <div 
                        key={index} 
                        className="flex flex-col items-center text-center h-full cursor-pointer"
                        onClick={() => handleSelectReproductor(dog.name)}
                    >
                       <img 
                            alt={dog.name} 
                            src={dog.img} 
                            className="object-cover aspect-square rounded-lg h-48 w-48 border-2 border-white dark:border-gray-800"
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

export default ReproductoresHerzEdel;

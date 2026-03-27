import { useTranslation } from "react-i18next";
import { useNavegacion } from "../../../../store/external/NavegacionContext";
import OptimizedImage from "../../../components/OptimizedImage";


export const JovenesHomePage = () => {
    const { addNavegacion } = useNavegacion();
    const { t } = useTranslation();

    const handleSelectReproductor = (name: string) => {
        addNavegacion(name.toLowerCase());
    };

  return (
        <main className="container mx-auto px-2 py-4 max-w-screen-md">
            <title>{t('jovenes_titulo', 'Jovenes Herz Edel')} | Herz Edel</title>
            <meta name="description" content={t('jovenes_desc', 'Líneas de sangre 100% ADRK con los reproductores TOP Alemanes.')} />
            <meta property="og:title" content={t('jovenes_titulo', 'Jovenes Herz Edel')} />
            <meta property="og:description" content={t('jovenes_desc', 'Líneas de sangre 100% ADRK con los reproductores TOP Alemanes.')} />
            <meta property="og:type" content="website" />

            <p className="text-xl font-bold text-center text-yellow-600">{t('jovenes_titulo', 'Jovenes Herz Edel')}</p>
            <p className="mb-3 text-lg font-normal text-center text-yellow-600">
                {t('jovenes_desc', 'Líneas de sangre 100% ADRK con los reproductores TOP Alemanes.')}
            </p>

            {/* Contenedor flex para centrar las imágenes */}
            <div className="flex flex-wrap justify-center gap-8 max-w-screen-xl mx-auto">
                {[
                    {
                        name: "Bruce",
                        img: "/img/varios/jovenes/bruce/1.jpg",
                        details: t('bruce_details', 'Genética 100% ADRK'),
                        lineage: t('bruce_lineage', 'Leal Do Riacho Negro')
                    },
                    {
                        name: "Conny",
                        img: "/img/varios/jovenes/conny/1.jpg",
                        details: t('zafira_details', 'Genética 100% ADRK'),
                        lineage: t('zafira_lineage', 'Pedro vom Willicher Wappen X Xammy Max Herz Edel')
                    }
                ].map((dog, index) => (
                    <div 
                        key={index} 
                        className="flex flex-col items-center text-center h-full cursor-pointer focus:outline-none focus-visible:outline-2 focus-visible:outline-yellow-500"
                        onClick={() => handleSelectReproductor(dog.name)}
                        role="button"
                        tabIndex={0}
                        aria-label={t('ver_detalles', { name: dog.name, defaultValue: `Ver detalles de ${dog.name}` })}
                        aria-pressed="false"
                        aria-describedby={`details-${dog.name}`}
                        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') handleSelectReproductor(dog.name); }}
                    >
                        <OptimizedImage 
                            alt={t('foto_joven_alt', { name: dog.name, defaultValue: `Foto de ${dog.name}, joven Herz Edel` })}
                            title={t('foto_joven_alt', { name: dog.name, defaultValue: `Foto de ${dog.name}, joven Herz Edel` })}
                            src={dog.img} 
                            className="object-cover rounded-lg h-48 w-48 border-2 border-white dark:border-gray-800" // object-cover para que llene el espacio
                            loading="lazy"
                            width="192"
                            height="192"
                        />
                        <div id={`details-${dog.name}`} className="px-3 py-3 bg-white rounded-lg shadow dark:bg-gray-800 mt-4 flex flex-col h-full max-w-[250px]">
                            <p className="text-lg font-semibold text-yellow-500 dark:text-white">{dog.name}</p>
                            <p className="text-md font-light text-gray-600 dark:text-gray-200">{dog.details}</p>
                            <p className="py-2 text-sm font-light text-gray-500 dark:text-gray-400 flex-grow">
                                {dog.lineage}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
  );
};

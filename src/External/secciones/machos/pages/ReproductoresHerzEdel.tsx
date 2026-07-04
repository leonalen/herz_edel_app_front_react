import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Head as Helmet } from "vite-react-ssg";

const ReproductoresHerzEdel = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleSelectReproductor = (name: string) => {
        navigate(`/machos/${name.toLowerCase()}`);
    };

    return (
        <main className="container mx-auto px-2 py-4 max-w-screen-md">
        <Helmet>
            <title>{`${t('reproductores_titulo', 'Reproductores Herz Edel')} | Herz Edel`}</title>
            <meta name="description" content={t('reproductores_desc', 'Las mejores líneas de sangre ADRK con los reproductores TOP Alemanes.')} />
            <meta property="og:title" content={t('reproductores_titulo', 'Reproductores Herz Edel')} />
            <meta property="og:description" content={t('reproductores_desc', 'Las mejores líneas de sangre ADRK con los reproductores TOP Alemanes.')} />
            <meta property="og:type" content="website" />
        </Helmet>
            <header>
                <h1 className="text-xl font-bold text-center text-yellow-600">{t('reproductores_titulo', 'Reproductores Herz Edel - Machos ADRK importados y líneas alemanas de excelencia')}</h1>
                <p className="mb-3 text-lg font-normal text-center text-yellow-600">
                    {t('reproductores_desc', 'En Herz Edel trabajamos exclusivamente con machos reproductores de líneas de sangre alemanas e importamos ejemplares ADRK para garantizar la mejor genética, temperamento y salud en nuestros Rottweilers.')}
                </p>
            </header>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-screen-xl mx-auto" aria-label={t('reproductores_grid_label', 'Lista de reproductores Herz Edel')}>
                {[
                    {
                        name: "Pedro",
                        img: "/img/varios/machos/pedro.jpg",
                        details: t('pedro_details', 'ADRK (HD+/- ED- ACRR)'),
                        lineage: t('pedro_lineage', 'Adolf Bagieras X Hope vom Holzmichel')
                    },
                    {
                        name: "Irko",
                        img: "/img/varios/machos/irko.jpg",
                        details: t('irko_details', 'Importado de España - 100% líneas ADRK (HD- ED- ACRR)'),
                        lineage: t('irko_lineage', 'Puma vom Wiltes Westen x Dasty de Batanen')
                    },
                    {
                        name: "Nash",
                        img: "/img/varios/machos/nash.jpg",
                        details: t('nash_details', 'ADRK (HD- ED- ACRR)'),
                        lineage: t('nash_lineage', 'Rudi vom Hause Neubrand x Kim vom Willicher Wappen')
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
                       <img 
                            alt={t('foto_reproductor_alt', { name: dog.name, defaultValue: `Foto de ${dog.name}, reproductor Herz Edel` })}
                            title={t('foto_reproductor_alt', { name: dog.name, defaultValue: `Foto de ${dog.name}, reproductor Herz Edel` })}
                            src={dog.img} 
                            className="object-cover aspect-square rounded-lg h-48 w-48 border-2 border-white dark:border-gray-800"
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
            </section>
        </main>
    );
};

export default ReproductoresHerzEdel;

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import OptimizedImage from "../../../components/OptimizedImage";

export const HembrasHomePages = () => {
   const { t } = useTranslation();
   const navigate = useNavigate();
  
    const handleSelectReproductor = (name: string) => {
        // Limpia el nombre para quitar prefijos como "RIP - "
        const cleanName = name.replace(/rip\s*-\s*/i, '').trim();
        navigate(`/hembras/${cleanName.toLowerCase()}`);
    };
  
      return (
          <main className="container mx-auto px-2 py-4 max-w-screen-md">
            <Helmet>
              <title>{t('hembras_titulo', 'Reproductoras Herz Edel')} | Herz Edel</title>
              <meta name="description" content={t('hembras_desc', 'Líneas de sangre 100% ADRK con los reproductores TOP Alemanes.')} />
              <meta property="og:title" content={t('hembras_titulo', 'Reproductoras Herz Edel')} />
              <meta property="og:description" content={t('hembras_desc', 'Líneas de sangre 100% ADRK con los reproductores TOP Alemanes.')} />
              <meta property="og:type" content="website" />
            </Helmet>
              <p className="text-xl font-bold text-center text-yellow-600">{t('hembras_titulo', 'Reproductoras Herz Edel - Hembras ADRK y líneas alemanas seleccionadas')}</p>
              <p className="mb-3 text-lg font-normal text-center text-yellow-600">
                 {t('hembras_desc', 'En Herz Edel seleccionamos hembras reproductoras de líneas de sangre alemanas e importando ejemplares ADRK para asegurar la mejor genética, temperamento y salud en cada camada.')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
                  {[
                      {
                          name: "RIP - Maxima",
                          img: "/img/varios/hembras/maxima/1.JPG",
                          details: t('maxima_details', 'ADRK (HD- ED- ACRR)'),
                          lineage: t('maxima_lineage', 'Vitus vom Hause Neubrand X Pussy vom Cassanova')
                      },
                      {
                          name: "Mistica",
                          img:  "/img/varios/hembras/misti.jpg",
                          details: t('mistica_details', 'Cruza ADRK (HD- ED- ACRR) - Multi V1 - Campeona y Gran Campeona Argentina'),
                          lineage: t('mistica_lineage', 'Pedro vom Willicher Wappen x Maxima vom Willicher Wappen')
                      },
                      {
                          name: "Tessa",
                          img: "/img/varios/hembras/tessa.jpg",
                          details: t('tessa_details', 'Cruza ADRK (HD- ED- ACRR)'),
                          lineage: t('tessa_lineage', 'Zappa vom Kummelsee x Maxima vom Willicher Wappen')
                      },
                      {
                          name: "Xammy",
                          img: "/img/varios/hembras/xammy/1.jpg",
                          details: t('xammy_details', 'Genética 100% ADRK (HD- ED- ACRR) (Vitus 2-2)'),
                          lineage: t('xammy_lineage', "Jerry del' All Serrat X Maxima vom Willicher Wappen")
                      },
                      {
                          name: "Zafira",
                          img: "/img/varios/hembras/zafira/1.jpg",
                          details: t('zafira_details', 'Genética 100% ADRK (HD- ED- ACRR)'),
                          lineage: t('zafira_lineage', "Nash vom Willicher Wappen X Tessa Max Herz Edel")
                      }
                  ].map((dog, index) => (
                      <div 
                          key={index} 
                          className="flex flex-col items-center text-center h-full cursor-pointer"
                          onClick={() => handleSelectReproductor(dog.name)}
                          role="button"
                          tabIndex={0}
                          aria-label={t('ver_detalles', { name: dog.name, defaultValue: `Ver detalles de ${dog.name}` })}
                          onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') handleSelectReproductor(dog.name); }}
                      >
                            <OptimizedImage 
                                alt={`Foto de ${dog.name}, hembra Herz Edel`} 
                                src={dog.img} 
                                className="object-contain aspect-square rounded-lg h-48 w-48 border-2 border-white dark:border-gray-800"
                                loading="lazy"
                                width="192"
                                height="192"
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
          </main>
      );
  };
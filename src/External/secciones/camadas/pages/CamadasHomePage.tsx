import { useTranslation } from "react-i18next";
import { ImageCard } from "../../components/ImageCard";
import { Head as Helmet } from "vite-react-ssg";

export const CamadasHomePage = () => {
    const { t } = useTranslation();
    return (
        <main>
        <Helmet>
            <title>{`${t('camadas_titulo', 'Camadas Herz Edel')} | Herz Edel`}</title>
            <meta name="description" content={t('camadas_desc', 'Próximas camadas de Rottweiler Herz Edel, criadero en Argentina con líneas alemanas y ejemplares ADRK importados.')} />
            <meta property="og:title" content={`${t('camadas_titulo', 'Camadas Herz Edel')} | Herz Edel`} />
            <meta property="og:description" content={t('camadas_desc', 'Próximas camadas de Rottweiler Herz Edel, criadero en Argentina con líneas alemanas y ejemplares ADRK importados.')} />
            <meta property="og:type" content="website" />
        </Helmet>
            <div className="w-full max-w-3xl mx-auto">
                <ImageCard 
                    title={t('camadas_proxima', 'Próxima camada')} 
                    imageSrc="/img/varios/camadas/camadaK.jpg"
                    alt={t('camadas_proxima_alt', 'Foto de la próxima camada: Bruce x Tessa')}
                />
            </div>
        </main>
    );
};

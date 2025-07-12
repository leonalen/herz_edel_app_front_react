import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { ImageCard } from "../../components/ImageCard";

export const CamadasHomePage = () => {
    const { t } = useTranslation();
    return (
        <main>
            <Helmet>
                <title>{t('camadas_titulo', 'Camadas Herz Edel')} | Herz Edel</title>
                <meta name="description" content={t('camadas_desc', 'Próximas camadas de Rottweiler Herz Edel, criadero en Argentina con líneas alemanas y ejemplares ADRK importados.')} />
                <meta property="og:title" content={`${t('camadas_titulo', 'Camadas Herz Edel')} | Herz Edel`} />
                <meta property="og:description" content={t('camadas_desc', 'Próximas camadas de Rottweiler Herz Edel, criadero en Argentina con líneas alemanas y ejemplares ADRK importados.')} />
                <meta property="og:type" content="website" />
            </Helmet>
            <ImageCard 
                title={t('camadas_proxima', 'Próxima camada')} 
                imageSrc="/img/varios/camadas/pedroXtessa.jpg"
                alt={t('camadas_proxima_alt', 'Foto de la próxima camada: Pedro x Tessa')}
            />
        </main>
    );
};

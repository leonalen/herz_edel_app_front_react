import { Helmet } from "react-helmet-async";

export const JovenesHomePage = () => {
  const imagenes = [
    { src: "/img/varios/machos/pedro.jpg", descripcion: "Pedro" },
    { src: "/img/varios/machos/irko.jpg", descripcion: "Irko" },
    { src: "/img/varios/machos/nash.jpg", descripcion: "Nash" },
  ];

  return (
    <main>
      <Helmet>
        <title>Jóvenes | Herz Edel</title>
        <meta name="description" content="Galería de jóvenes ejemplares Herz Edel." />
        <meta property="og:title" content="Jóvenes | Herz Edel" />
        <meta property="og:description" content="Galería de jóvenes ejemplares Herz Edel." />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="flex flex-wrap justify-center gap-8 p-4 w-full max-w-screen-lg mx-auto">
        {imagenes.map((img, index) => (
          <div key={index} className="w-48 flex flex-col items-center">
            <img
              src={img.src}
              alt={img.descripcion}
              width="192"
              height="192"
              loading="lazy"
              className="w-48 h-48 object-cover rounded-lg shadow-md"
            />
            <span className="mt-2 text-black text-lg font-semibold text-center">{img.descripcion}</span>
          </div>
        ))}
      </div>
    </main>
  );
};

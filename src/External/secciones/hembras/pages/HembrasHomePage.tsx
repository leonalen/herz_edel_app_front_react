import ImageGrid from "../../../components/components/ImageGrid"

export const HembrasHomePage = () => {
  return (
    <main>

        <title>Galería de Hembras | Herz Edel</title>
        <meta name="description" content="Galería de imágenes de hembras Herz Edel." />
        <meta property="og:title" content="Galería de Hembras | Herz Edel" />
        <meta property="og:description" content="Galería de imágenes de hembras Herz Edel." />
        <meta property="og:type" content="website" />

      <ImageGrid
        images={[
          { src: "/img/varios/machos/pedro.jpg", title: "Imagen 1", description: "Descripción 1" },
          { src: "/img/varios/machos/irko.jpg", title: "Imagen 2", description: "Descripción 2" },
          { src: "/img/varios/machos/nash.jpg", title: "Imagen 3", description: "Descripción 3" },
        ]}
        alignment="right"
      />
    </main>
  )
}

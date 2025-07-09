import ImageGrid from "../../../components/components/ImageGrid"



export const HembrasHomePage = () => {
  return (
    
    <ImageGrid
        images={[
          { src: "/img/varios/machos/pedro.jpg", title: "Imagen 1", description: "Descripción 1" },
          { src: "/img/varios/machos/irko.jpg", title: "Imagen 2", description: "Descripción 2" },
          { src: "/img/varios/machos/nash.jpg", title: "Imagen 3", description: "Descripción 3" },
        ]}
        alignment="right"
  />
  
  )
}

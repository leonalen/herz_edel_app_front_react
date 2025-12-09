import React from "react";

interface ImageGridProps {
  images: { src: string; title: string; description: string }[];
  alignment?: "left" | "center" | "right";
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, alignment = "center" }) => {
  const justifyClass = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  }[alignment];

  return (
    <>
      <title>Galería de imágenes | Herz Edel</title>
      <meta name="description" content="Galería de imágenes de ejemplares Herz Edel." />
      <section className={`flex flex-wrap ${justifyClass} gap-6 p-4`} aria-label="Galería de imágenes">
        {images.map((img, index) => (
          <figure key={index} className="w-60 text-center">
            <img
              src={img.src}
              alt={img.title}
              loading="lazy"
              className="w-40 h-40 object-cover rounded-lg mx-auto border-2 border-gray-300 shadow-md transition-transform duration-200 hover:scale-105"
            />
            <figcaption className="mt-2">
              <p className="text-xl font-semibold">{img.title}</p>
              <p className="text-gray-600">{img.description}</p>
            </figcaption>
          </figure>
        ))}
      </section>
    </>
  );
};

export default ImageGrid;

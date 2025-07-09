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
    <div className={`flex flex-wrap ${justifyClass} gap-6 p-4`}>
      {images.map((img, index) => (
        <div key={index} className="w-60 text-center">
          <img
            src={img.src}
            alt={img.title}
            className="w-40 h-40 object-cover rounded-lg mx-auto border-2 border-gray-300"
          />
          <p className="mt-2 text-xl font-semibold">{img.title}</p>
          <p className="text-gray-600">{img.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;

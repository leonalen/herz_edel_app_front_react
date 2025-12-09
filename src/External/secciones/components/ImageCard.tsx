import OptimizedImage from "../../components/OptimizedImage";

interface ImageCardProps {
    title: string;
    imageSrc: string;
    alt?: string;
    width?: string;
    height?: string;
  }
  
  export const ImageCard = ({
    title,
    imageSrc,
    alt,
    // width,
    // height,
  }: ImageCardProps) => {
    return (
      <div
        className="flex flex-col items-center justify-center border border-gray-300 rounded-lg shadow-lg bg-white w-full mx-auto aspect-[4/3] p-2"
      >
        <div className="w-full h-full p-2"> {/* Contenedor para la imagen */}
          <OptimizedImage
            src={imageSrc}
            alt={alt || title}
            title={alt || title}
            className="w-full h-full object-contain rounded-md" // Cambiado a object-contain
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </div>
        <h2 className="text-center text-lg font-semibold leading-none mt-1">{title}</h2>
      </div>
    );
  };

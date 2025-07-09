interface ImageCardProps {
    title: string;
    imageSrc: string;
    width?: string;
    height?: string;
  }
  
  export const ImageCard = ({
    title,
    imageSrc,
    width = "700px",
    height = "600px",
  }: ImageCardProps) => {
    return (
      <div
        className="flex flex-col items-center justify-center border border-gray-300 rounded-lg shadow-lg bg-white"
        style={{ width, height, maxWidth: "100%", maxHeight: "100%" }}
      >
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-auto object-cover rounded-md"
          style={{ maxHeight: "85%", maxWidth: "100%" }}
        />
        <h2 className="text-center text-lg font-semibold leading-none mt-1">{title}</h2>
      </div>
    );
  };
  
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
        className="flex flex-col items-center justify-center border border-gray-300 rounded-lg shadow-lg bg-white w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto aspect-[4/3] p-2"
      >
        <img
          src={imageSrc}
          alt={alt || title}
          title={alt || title}
          className="w-full h-full object-cover rounded-md"
          style={{ maxHeight: "100%", maxWidth: "100%" }}
        />
        <h2 className="text-center text-lg font-semibold leading-none mt-1">{title}</h2>
      </div>
    );
  };

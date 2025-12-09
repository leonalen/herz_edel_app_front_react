type CardProps = {
  title: string;
  content: string;
};

export const Card = ({ title, content }: CardProps) => {
  return (
    <article className="bg-white shadow-md rounded-md p-4 w-full max-w-md mx-auto flex flex-col items-center text-center" role="region" aria-label={title}>
      <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </article>
  );
};

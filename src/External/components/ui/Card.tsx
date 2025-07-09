

export const Card = ({ title, content }: any) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p>{content}</p>
  </div>
  )
}

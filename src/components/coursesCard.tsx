interface CardProps {
  title: string;
  brand: string;
  image: string;
  category: string;
  price: number;
}

const CoursesCard: React.FC<CardProps> = ({
  title,
  brand,
  image,
  category,
  price,
}) => {
  return (
    <div>
      <div className="card border rounded hover:border-2 cursor-pointer p-4 m-4 text-center max-w-xs">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover mb-4"
        />
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-1">{brand}</p>
        <p className="text-gray-500 mb-2">{category}</p>
        <p className="text-green-500 font-bold">${price}</p>
      </div>
    </div>
  );
};

export default CoursesCard

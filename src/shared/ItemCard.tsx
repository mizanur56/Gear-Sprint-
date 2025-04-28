import { Rating, ThinStar } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

type TItem = {
  image: string;
  name: string;
  category: string;
  description: string;
  price: string;
  rating: number;
};

type ItemCardProps = {
  product: TItem;
};
const ItemCard = ({ product }: ItemCardProps) => {
  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: "#0891b2",
    inactiveFillColor: "#d1d5db",
  };
  const { image, name, category, description, price, rating } = product;
  return (
    <div className="p-5 shadow-lg flex flex-col gap-2 justify-between rounded-lg overflow-hidden">
      <img src={image} alt="" />
      <h2 className="text-xl font-bold text-cyan-600">{name}</h2>
      <p className="text-lg text-gray-900 whitespace-nowrap">
        Category: {category}
      </p>
      <p className="text-sm text-gray-500">{description}</p>
      <div className="flex justify-between items-center">
        <Rating
          readOnly
          style={{ maxWidth: 100 }}
          value={rating}
          itemStyles={myStyles}
        />

        <p className="text-lg font-bold text-cyan-600">${price}</p>
      </div>
    </div>
  );
};

export default ItemCard;

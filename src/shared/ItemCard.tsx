import { Rating, ThinStar } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { TProduct } from "../pages/AllProduct/AllProduct";

// type TItem = {
//   image: string;
//   name: string;
//   category: string;
//   description: string;
//   price: string;
//   rating: number;
//   stock: number;
// };

type ItemCardProps = {
  product: TProduct;
};
const ItemCard = ({ product }: ItemCardProps) => {
  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: "#0891b2",
    inactiveFillColor: "#d1d5db",
  };
  const { image, name, category, description, price, rating, stock } = product;
  return (
    <div className="p-5 relative shadow-lg flex flex-col gap-2 justify-between rounded-lg overflow-hidden">
      <img className="w-full h-44" src={image} alt="" />
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
        <p className="bg-black text-white p-2 rounded-lg text-sm absolute top-8 right-8">
          Stock: {stock}
        </p>
      </div>
    </div>
  );
};

export default ItemCard;

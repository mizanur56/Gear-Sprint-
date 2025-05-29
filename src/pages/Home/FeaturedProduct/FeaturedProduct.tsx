import { useEffect, useState } from "react";
import ItemCard from "../../../shared/ItemCard";
import { Link } from "react-router-dom";

type Product = {
  id: number;
  name: string;
  price: number;
  isFeatured: boolean;
  image: string;
  description: string;
  category: string;
  rating: number;
  reviews: number;
  stock: number;
  brand: string;
  // Add other properties as needed
};
const FeaturedProduct = () => {
  const [products, setProducts] = useState([]);
  const featuredItems = products.filter(
    (product: Product) => product.isFeatured === true
  );
  useEffect(() => {
    fetch("item.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  });
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-1">
      <h1 className="text-3xl font-bold py-5 lg:py-10">
        Featured Products :{featuredItems.length}{" "}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
          {featuredItems.map((product, index) => (
            <ItemCard key={index} product={product} />
          ))}
        </div>
      </h1>
      <div className="flex justify-center items-center">
        <Link to={"/allProduct"}>
          <button className="bg-teal-700 hover:bg-teal-600 cursor-pointer text-white font-bold py-2 px-4 rounded-md mt-2">
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProduct;

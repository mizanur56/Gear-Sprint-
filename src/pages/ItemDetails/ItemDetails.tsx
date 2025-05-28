import { Rating, ThinStar } from "@smastrom/react-rating";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { addToCart, CartItem } from "../../cart/handleAddCart";
import { useGetSingleProductQuery } from "../../redux/features/product/productApi";
import { toast } from "react-toastify";

const ItemDetails: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const { id } = useParams();
  const { data: data, isLoading } = useGetSingleProductQuery(id!);
  const product = data?.data;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleIncrement = () => {
    if (product && quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      const cartItem: CartItem = {
        id: product._id,
        name: product.name,
        price: product.price,
        stock: product.stock,
        quantity: quantity,
        image: product.image,
      };

      // Add product to cart and store it in localStorage
      addToCart(cartItem);
      toast.success("Product added to cart!");
    }
  };
  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: "#0891b2",
    inactiveFillColor: "#d1d5db",
  };

  if (!product) {
    return (
      <div className="text-center text-gray-500 py-10">Product not found.</div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 object-cover rounded-lg"
        />
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-4">{product.category}</p>
          <p className="text-lg font-semibold text-green-600 mb-2">
            ${product.price}
          </p>
          <p className="mb-4">{product.description}</p>

          <div className="flex flex-wrap gap-4 mb-4">
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
              Stock: {product.stock}
            </span>
            <Rating
              readOnly
              style={{ maxWidth: 100 }}
              value={product.rating}
              itemStyles={myStyles}
            />
            {product.isFeatured && (
              <span className="bg-yellow-300 text-black px-3 py-1 rounded-full">
                Featured
              </span>
            )}
            {product.isDeleted && (
              <span className="bg-red-300 text-black px-3 py-1 rounded-full">
                Deleted
              </span>
            )}
          </div>

          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={handleDecrement}
              className="px-3 py-1 bg-gray-200 rounded text-lg"
            >
              -
            </button>
            <span className="text-xl font-semibold">{quantity}</span>
            <button
              onClick={handleIncrement}
              className="px-3 py-1 bg-gray-200 rounded text-lg"
            >
              +
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="text-white shadow-[0px_0px_20px_0px_rgba(0,255,255,0.7),0px_0px_40px_0px_rgba(0,0,255,0.5),0px_0px_60px_0px_rgba(0,0,128,0.3)] p-3 rounded-lg bg-teal-600 hover:bg-teal-800"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;

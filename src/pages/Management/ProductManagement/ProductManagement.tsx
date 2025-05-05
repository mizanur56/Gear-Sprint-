import React from "react";
import { FaEdit, FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../../../redux/features/product/productApi";
import { TProduct } from "../../AllProduct/AllProduct";
import { MdDeleteForever } from "react-icons/md";

// interface Product {
//   id: number;
//   name: string;
//   brand: string;
//   price: number;
//   quantity: number;
//   total: number;
//   imageUrl: string;
// }

const ProductManagement: React.FC = () => {
  const { data, isLoading } = useGetAllProductsQuery(undefined);
  const products = data?.data || [];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-50 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl text-black font-bold mb-3">Product List</h1>
          <p className="text-sm mb-8 text-gray-700">
            The product list effectively dictates product presentation and
            provides space to list your products and offering in the most
            appealing way.
          </p>
        </div>
        <Link to={"/management/addProduct"}>
          {" "}
          <button className="bg-teal-500 hover:bg-teal-700 flex items-center gap-2 text-white font-bold py-2 px-4 rounded-lg">
            <FaPlusCircle />
            Add Product
          </button>
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <div className="overflow-x-auto w-full">
          <table className="w-full bg-white shadow-md rounded-lg border border-gray-200">
            <thead>
              <tr className="border-b">
                <th className="px-6 py-4 text-left text-gray-600 font-medium">
                  Product
                </th>
                <th className="px-6 py-4 text-left text-gray-600 font-medium">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-gray-600 font-medium">
                  Price
                </th>
                <th className="px-6 py-4 text-left text-gray-600 font-medium">
                  Stock
                </th>
                <th className="px-6 py-4 text-left text-gray-600 font-medium">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product: TProduct) => (
                <tr key={product._id} className="border-b last:border-0">
                  <td className="px-6 py-4 flex items-center gap-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 rounded-md object-cover"
                    />
                    <div>
                      <p className="text-gray-800 font-medium">
                        {product.name}
                      </p>
                      {/* <span className="text-green-500 text-sm">
                        {product.category}
                      </span> */}
                    </div>
                  </td>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4">${product.price}</td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {product.stock}
                  </td>
                  <td className="px-6 py-4 flex gap-2 items-center">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                      <MdDeleteForever />
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      <FaEdit />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;

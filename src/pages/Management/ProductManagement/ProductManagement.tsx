import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  quantity: number;
  total: number;
  imageUrl: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Apple Watch Series 8 GPS 45mm",
    brand: "UBL",
    price: 550,
    quantity: 3,
    total: 1500,
    imageUrl:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "Apple Watch Series 8 GPS 45mm",
    brand: "UBL",
    price: 550,
    quantity: 3,
    total: 1500,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1681711647066-ef84575c0d95?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww",
  },
  {
    id: 3,
    name: "Apple Watch Series 8 GPS 45mm",
    brand: "UBL",
    price: 550,
    quantity: 3,
    total: 1500,
    imageUrl:
      "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtMzYyLTAxYS1tb2NrdXAuanBn.jpg",
  },
];

const ProductManagement: React.FC = () => {
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
              {products.map((product) => (
                <tr key={product.id} className="border-b last:border-0">
                  <td className="px-6 py-4 flex items-center gap-4">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-12 h-12 rounded-md object-cover"
                    />
                    <div>
                      <p className="text-gray-800 font-medium">
                        {product.name}
                      </p>
                      <span className="text-green-500 text-sm">
                        {product.brand}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">${product.price}</td>
                  <td className="px-6 py-4">x{product.quantity}</td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    ${product.total}
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

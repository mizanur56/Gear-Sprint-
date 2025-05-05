// import React, { useEffect, useState } from "react";
// import { MdDeleteForever } from "react-icons/md";
// import Checkout from "./Checkout";

// type Product = {
//   id: number;
//   name: string;
//   price: number;
//   quantity: number;
//   image: string;
//   brand: string;
// };

// const ShoppingCart: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]); // ✅ Start with empty array

//   useEffect(() => {
//     const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
//     setProducts(cartItems);
//   }, []);
//   const handleQuantityChange = (id: number, change: number) => {
//     const updatedProducts = products.map((product) => {
//       if (product.id === id) {
//         return { ...product, quantity: product.quantity + change };
//       }
//       return product;
//     });

//     setProducts(updatedProducts);
//     localStorage.setItem("cart", JSON.stringify(updatedProducts));
//   };
//   const handleDelete = (id: number) => {
//     const updatedProducts = products.filter((product) => product.id !== id);
//     setProducts(updatedProducts);
//     localStorage.setItem("cart", JSON.stringify(updatedProducts));
//   };

//   return (
//     <div className="flex justify-between bg-gray-100 p-4">
//       <div className="w-2/3 max-w-4xl">
//         <h2 className="text-2xl font-bold mb-6 text-center">Shopping Cart</h2>
//         {products.length === 0 ? (
//           <p className="text-center text-gray-500">Your cart is empty.</p>
//         ) : (
//           <table className="w-full bg-white shadow-md rounded-lg border border-gray-200">
//             <thead>
//               <tr className="border-b">
//                 <th className="px-6 py-4 text-left text-gray-600">
//                   Product Name
//                 </th>
//                 <th className="px-6 py-4 text-left text-gray-600">
//                   Unit Price
//                 </th>
//                 <th className="px-6 py-4 text-left text-gray-600">Qty</th>
//                 <th className="px-6 py-4 text-left text-gray-600">Total</th>
//                 <th></th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.map((product) => (
//                 <tr key={product.id} className="border-b">
//                   <td className="px-6 py-4 flex items-center gap-4">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-12 h-12 rounded-md object-cover"
//                     />
//                     <div>
//                       <p className="text-gray-800 font-medium">
//                         {product.name}
//                       </p>
//                       <span className="text-green-500 text-sm">
//                         {product.brand}
//                       </span>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4">${product.price}</td>
//                   <td className="px-6 py-4">
//                     <div className="flex items-center gap-2">
//                       <button
//                         onClick={() => handleQuantityChange(product.id, -1)}
//                         className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                       >
//                         −
//                       </button>
//                       <span className="min-w-[20px] text-center">
//                         {product.quantity}
//                       </span>
//                       <button
//                         onClick={() => handleQuantityChange(product.id, 1)}
//                         className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                       >
//                         +
//                       </button>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 font-semibold text-gray-900">
//                     ${product.price * product.quantity}
//                   </td>
//                   <td className="px-6 py-4">
//                     <MdDeleteForever
//                       onClick={() => handleDelete(product.id)}
//                       className="text-red-500 cursor-pointer text-xl"
//                     />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//       <div className="w-1/3">
//         <Checkout />
//       </div>
//     </div>
//   );
// };

// export default ShoppingCart;

import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import Checkout from "./Checkout";

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  stock: number;
};

const ShoppingCart: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    setProducts(cartItems);
  }, []);

  const handleQuantityChange = (id: number, change: number) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        const newQty = product.quantity + change;

        // Prevent going below 1 and above stock
        if (newQty < 1) return { ...product, quantity: 1 };
        if (newQty > product.stock) return product; // do not update

        return { ...product, quantity: newQty };
      }
      return product;
    });

    setProducts(updatedProducts);
    localStorage.setItem("cart", JSON.stringify(updatedProducts));
  };

  const handleDelete = (id: number) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("cart", JSON.stringify(updatedProducts));
  };

  return (
    <div className="flex justify-between bg-gray-100 p-4">
      <div className="w-2/3 max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Shopping Cart</h2>
        {products.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <table className="w-full bg-white shadow-md rounded-lg border border-gray-200">
            <thead>
              <tr className="border-b">
                <th className="px-6 py-4 text-left text-gray-600">
                  Product Name
                </th>
                <th className="px-6 py-4 text-left text-gray-600">
                  Unit Price
                </th>
                <th className="px-6 py-4 text-left text-gray-600">Qty</th>
                <th className="px-6 py-4 text-left text-gray-600">Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b">
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
                    </div>
                  </td>
                  <td className="px-6 py-4">${product.price}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleQuantityChange(product.id, -1)}
                        disabled={product.quantity <= 1}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="min-w-[20px] text-center">
                        {product.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(product.id, 1)}
                        disabled={product.quantity >= product.stock}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    ${product.price * product.quantity}
                  </td>
                  <td className="px-6 py-4">
                    <MdDeleteForever
                      onClick={() => handleDelete(product.id)}
                      className="text-red-500 cursor-pointer text-xl"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="w-1/3">
        <Checkout />
      </div>
    </div>
  );
};

export default ShoppingCart;

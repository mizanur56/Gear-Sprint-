import React from "react";

type Item = {
  name: string;
  category: string;
  price: number;
  stock: number;
  description: string;
  image: string;
  isDeleted: boolean;
  isFeatured: boolean;
  rating: number;
};

interface ItemDetailsProps {
  item: Item;
}

const ItemDetails: React.FC<ItemDetailsProps> = ({ item }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={item?.image}
          alt={item?.name}
          className="w-full md:w-1/2 object-cover rounded-lg"
        />
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">GUYGHIHIUHOSOAHO</h2>
          <p className="text-gray-600 mb-4">aiuyuiyiufyh</p>
          <p className="text-lg font-semibold text-green-600 mb-2">$100</p>
          <p className="mb-4">
            ufe98yf98yf98y879yq98fya9fyu98ach98yu98qy798qyf98qr98uy
          </p>

          <div className="flex flex-wrap gap-4">
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
              Stock: In stock
            </span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
              Rating: 4.5
            </span>

            <span className="bg-yellow-300 text-black px-3 py-1 rounded-full">
              Featured
            </span>

            <span className="bg-red-300 text-black px-3 py-1 rounded-full">
              Deleted
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;

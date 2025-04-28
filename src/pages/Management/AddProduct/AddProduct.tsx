import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  category: string;
  stock: number;
  price: number;
  image: string;
  description: string;
};

const AddProduct: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Product Submitted:", data);
    reset();
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Add Product</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-bold mb-2">Name *</label>
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Enter Name"
              className="w-full border rounded p-2"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Category *
            </label>
            <select
              {...register("category", { required: "Category is required" })}
              className="w-full border rounded p-2"
            >
              <option value="">Select Category</option>
              <option value="Cardio Machines">Cardio Machines</option>
              <option value="Strength Equipment">Strength Equipment</option>
              <option value="Accessories">Accessories</option>
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category.message}</p>
            )}
          </div>

          {/* Stock */}
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Stock *
            </label>
            <input
              type="number"
              {...register("stock", {
                required: "Stock is required",
                valueAsNumber: true,
              })}
              placeholder="Enter Stock"
              className="w-full border rounded p-2"
            />
            {errors.stock && (
              <p className="text-red-500 text-sm">{errors.stock.message}</p>
            )}
          </div>

          {/* Price */}
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Price *
            </label>
            <input
              type="number"
              {...register("price", {
                required: "Price is required",
                valueAsNumber: true,
              })}
              placeholder="Enter Price"
              className="w-full border rounded p-2"
            />
            {errors.price && (
              <p className="text-red-500 text-sm">{errors.price.message}</p>
            )}
          </div>

          {/* Image */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-bold mb-2">
              Image *
            </label>
            <input
              {...register("image", { required: "Image link is required" })}
              placeholder="Enter Image Link"
              className="w-full border rounded p-2"
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-bold mb-2">
              Description/Product Details *
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              placeholder="Details"
              className="w-full border rounded p-2 h-32"
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>
        </div>

        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;

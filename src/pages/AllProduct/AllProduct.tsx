import { useState } from "react";
import ItemCard from "../../shared/ItemCard";
import { categories } from "../../data/data";
import { useGetAllProductsQuery } from "../../redux/features/product/productApi";

export type TProduct = {
  _id: number;
  name: string;
  price: number; // <-- change this to number
  category: string;
  image: string;
  description: string;
  rating: number;
  stock: number;
};

const AllProduct = () => {
  // const [products, setProducts] = useState<TProduct[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("");

  const { data, isLoading } = useGetAllProductsQuery(undefined);
  const products = data?.data || [];

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  // useEffect(() => {
  //   fetch("item.json")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // });

  // let filteredProducts =
  //   selectedCategory === "All"
  //     ? products
  //     : products.filter((product) => product.category === selectedCategory);

  let filteredProducts = products.filter((product: TProduct) =>
    selectedCategory === "All" ? true : product.category === selectedCategory
  );

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };
  if (sortOrder === "low-to-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortOrder === "high-to-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  const handleFilterRemove = () => {
    setSelectedCategory("All");
    setSortOrder("");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-1">
      <div className="py-5 flex items-center gap-5">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          defaultValue="All"
          className="border border-teal-700 p-2 rounded-lg"
        >
          <option>All</option>
          {categories.map((category, index) => (
            <option key={index}>{category.name}</option>
          ))}
        </select>
        <select
          value={sortOrder}
          onChange={handleSortChange}
          className="border p-2 rounded border-teal-700 "
        >
          <option value="">Sort By</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
        <button
          onClick={handleFilterRemove}
          className="bg-teal-700 text-white px-4 py-2 rounded-lg hover:bg-teal-600"
        >
          Clear Filter
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        {filteredProducts.map((product: TProduct, index: number) => (
          <ItemCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProduct;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

const Checkout: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("cash");

  // Fetch cart from localStorage anytime the component mounts or storage updates
  useEffect(() => {
    const syncCart = () => {
      const cartData = localStorage.getItem("cart");
      if (cartData) {
        try {
          const parsedCart = JSON.parse(cartData);
          if (Array.isArray(parsedCart)) {
            setProducts(parsedCart);
            calculateTotal(parsedCart);
          }
        } catch (error) {
          console.error("Failed to parse cart:", error);
        }
      } else {
        setProducts([]);
        setTotal(0);
      }
    };

    // Initial load
    syncCart();

    // Listen to changes made in other tabs/components
    const interval = setInterval(syncCart, 500); // Check every 500ms

    return () => clearInterval(interval);
  }, []);

  // Total calculation
  const calculateTotal = (cart: Product[]) => {
    const totalAmount = cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    setTotal(totalAmount);
  };

  const handleCheckout = (event: React.FormEvent) => {
    event.preventDefault();

    if (paymentMethod === "stripe") {
      navigate("/payment");
    } else {
      const paymentData = {
        id: `cash-${Date.now()}`,
        date: new Date().toISOString(),
        products: products,
        amount: total,
        paymentMethod: "cash",
        status: "pending",
      };

      try {
        const existingOrders = localStorage.getItem("paymentInfo");
        let parsedOrders: any[] = [];

        if (existingOrders) {
          const parsed = JSON.parse(existingOrders);
          if (Array.isArray(parsed)) {
            parsedOrders = parsed;
          } else {
            toast.warning("Existing orders were not an array. Resetting.");
          }
        }

        const updatedOrders = [...parsedOrders, paymentData];
        localStorage.setItem("paymentInfo", JSON.stringify(updatedOrders));
        localStorage.removeItem("cart");

        toast.success("Checkout successful!");
        navigate("/management/orderHistory");
      } catch (error) {
        toast.error("Something went wrong during checkout. Please try again.");
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6">Checkout</h2>
      <form onSubmit={handleCheckout}>
        {/* Cart Items */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Your Order:</h3>
          <ul>
            {products.map((product) => (
              <li key={product.id} className="flex justify-between mb-2">
                <span>{product.name}</span>
                <span>
                  {product.quantity} x ${product.price}
                </span>
              </li>
            ))}
          </ul>
          <hr className="my-4" />
          <div className="flex justify-between font-bold">
            <span>Total:</span>
            <span>${total}</span>
          </div>
        </div>

        {/* Payment Method */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Payment Method</label>
          <div className="flex gap-4">
            <label>
              <input
                type="radio"
                name="payment"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-2"
              />
              Cash on Delivery
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="stripe"
                checked={paymentMethod === "stripe"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-2"
              />
              Pay with Card (Stripe)
            </label>
          </div>
        </div>

        {/* Submit Button */}
        {paymentMethod === "stripe" ? (
          <Link to={"/payment"}>
            <button
              type="submit"
              className="w-full py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
            >
              Checkout
            </button>
          </Link>
        ) : (
          <button
            type="submit"
            className="w-full py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
          >
            Place order
          </button>
        )}
      </form>
    </div>
  );
};

export default Checkout;

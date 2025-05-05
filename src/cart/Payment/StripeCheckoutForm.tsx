import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useCreatePaymentMutation } from "../../redux/features/payment/paymentApi";
import { Product } from "../Checkout";

const StripeCheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [createPayment] = useCreatePaymentMutation();

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
        setTotalPrice(0);
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
    setTotalPrice(totalAmount);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (card == null) return;

    try {
      const price = totalPrice; // this could come from props or context
      const { data } = await createPayment({ price }).unwrap();

      const clientSecret = data.clientSecret;

      // 2. Confirm the card payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
        },
      });
      console.log(result);

      if (result.error) {
        setError(result.error.message || "Payment failed");
        setSuccess("");
      } else if (result.paymentIntent?.status === "succeeded") {
        setSuccess("Payment successful!");
        setError("");

        const paymentData = {
          id: result.paymentIntent.id,
          date: new Date().toISOString(),
          products: products,
          amount: price,
          paymentMethod: "stripe",
          status: "pending",
        };

        localStorage.setItem("paymentInfo", JSON.stringify(paymentData));

        localStorage.removeItem("cart");
      }
    } catch (err: any) {
      console.error("Payment Error:", err);
      setError("Something went wrong during payment.");
    }

    // You can add logic here to create PaymentIntent and confirm card payment
  };

  return (
    <div className=" flex items-center justify-center bg-gray-100 px-4 my-4">
      <form
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Checkout:{totalPrice}
        </h2>

        <div className="mb-6 border rounded-md p-4">
          <CardElement
            options={{
              style: {
                base: {
                  color: "#32325d",
                  fontFamily: "Arial, sans-serif",
                  fontSmoothing: "antialiased",
                  fontSize: "16px",
                  "::placeholder": {
                    color: "#a0aec0",
                  },
                },
                invalid: {
                  color: "#fa755a",
                  iconColor: "#fa755a",
                },
              },
            }}
          />
        </div>
        <div className="text-red-700 text-sm my-2">{error}</div>
        {success && (
          <div className="text-green-600 text-sm my-2">{success}</div>
        )}

        <button
          className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          type="submit"
          disabled={!stripe}
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default StripeCheckoutForm;

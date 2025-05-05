import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripeCheckoutForm from "./StripeCheckoutForm";
const Payment = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
  return (
    <div>
      <Elements stripe={stripePromise}>
        <StripeCheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;

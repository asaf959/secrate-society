import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/completion`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsProcessing(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <h2 style={{ padding: "0 10px", color: "#000" }}>
        91% of users stay with us after the initial 30-day subscription
      </h2>
      <PaymentElement id="payment-element" />
      <div
        style={{
          display: "flex",
          padding: "4px",
          justifyContent: "space-between",
          fontWeight: 600,
          fontSize: "18px",
          letterSpacing: "1px",
        }}
      >
        <div style={{ color: "#000" }}>Total:</div>
        <div style={{ color: "#000" }}>$6.99</div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          disabled={isProcessing || !stripe || !elements}
          id="submit"
          className="btn-grad"
        >
          <span id="button-text">
            {isProcessing ? "Processing ... " : "Continue"}
          </span>
        </button>
      </div>

      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}

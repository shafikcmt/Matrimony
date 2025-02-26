import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

const PaymentPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const plan = searchParams.get("plan");
  const userId = "user123"; // Replace with actual logged-in user ID

  const handlePayment = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/payment/purchase-plan", {
        userId,
        plan
      });

      if (response.data.success) {
        alert("Payment Successful!");
        navigate("/search-results");
      }
    } catch (error) {
      console.error("Payment Error:", error);
    }
  };

  return (
    <div className="container">
      <h2>Payment for {plan} Plan</h2>
      <button className="btn btn-success" onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default PaymentPage;

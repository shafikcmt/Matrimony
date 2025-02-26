import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MembershipPlans = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    { name: "Basic", price: "₹199", features: ["No Photo Access"] },
    { name: "Standard", price: "₹499", features: ["Photo Access", "No Phone Number"] },
    { name: "Premium", price: "₹999", features: ["Full Access"] },
  ];

  const handlePurchase = (plan) => {
    setSelectedPlan(plan);
    navigate(`/payment?plan=${plan.name}`);
  };

  return (
    <div className="container">
      <h2>Choose Your Plan</h2>
      <div className="row">
        {plans.map((plan, index) => (
          <div className="col-md-4" key={index}>
            <div className="card p-3">
              <h3>{plan.name}</h3>
              <h4>{plan.price}</h4>
              <ul>
                {plan.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
              <button className="btn btn-primary" onClick={() => handlePurchase(plan)}>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembershipPlans;

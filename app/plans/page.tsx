"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function PlansPage() {
  const plans = [
    {
      name: "Basic",
      price: "29",
      duration: "month",
      features: [
        "View up to 10 profiles per day",
        "Basic search filters",
        "Send 5 messages per day",
        "View contact details",
      ],
      popular: false,
    },
    {
      name: "Premium",
      price: "49",
      duration: "month",
      features: [
        "Unlimited profile views",
        "Advanced search filters",
        "Unlimited messages",
        "View contact details",
        "Priority support",
        "Profile highlighting",
      ],
      popular: true,
    },
    {
      name: "Platinum",
      price: "99",
      duration: "month",
      features: [
        "All Premium features",
        "Profile verification badge",
        "Personal matchmaker",
        "Video calls",
        "Priority in search results",
        "24/7 premium support",
      ],
      popular: false,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 py-16"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-accent">Premium Plans</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose the perfect plan to find your perfect match. Upgrade now to unlock premium features and increase your chances of finding love.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Card
              className={`p-8 relative ${
                plan.popular ? "border-accent border-2" : ""
              }`}
            >
              {plan.popular && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute top-0 right-8 transform -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm"
                >
                  Most Popular
                </motion.div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-600">/{plan.duration}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="flex items-center gap-2"
                  >
                    <Check className="h-5 w-5 text-accent" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className={`w-full ${
                    plan.popular ? "bg-accent hover:bg-accent/90" : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Choose Plan
                </Button>
              </motion.div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

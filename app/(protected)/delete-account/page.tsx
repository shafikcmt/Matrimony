"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const DeleteAccount = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center p-8 mb-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white  p-6 md:p-10 rounded-xl shadow-xl w-full max-w-xl text-center"
      >
        <div className="flex flex-col items-center space-y-4">
          <AlertTriangle className="text-red-500 w-12 h-12" />

          <h2 className="text-2xl font-semibold text-red-600">
            Delete Your Account
          </h2>

          <p className="text-gray-600">
            Are you sure you want to delete your account? This action is{" "}
            <span className="font-semibold text-red-500">permanent</span> and
            cannot be undone.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-2 bg-accent/10 text-accent font-semibold rounded-md shadow-md hover:bg-accent hover:text-white transition"
          >
            Delete My Account
          </motion.button>
        </div>
      </motion.div>
    </motion.main>
  );
};

export default DeleteAccount;

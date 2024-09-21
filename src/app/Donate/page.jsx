"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";

// Dynamically import PaystackButton with no SSR
const PaystackButton = dynamic(
  () => import("react-paystack").then((mod) => mod.PaystackButton),
  { ssr: false }
);

const Donate = () => {
  const publicKey = "pk_test_e66822d2e3553a1dd1143d6dbcb609e62dbab7ac"; // Replace with your actual public key
  const [customAmount, setCustomAmount] = useState("");

  const handleSuccess = () => {
    alert("Thanks for donation!");
  };

  const handleClose = () => {
    alert("Are you sure you want to close?");
  };

  const style = {
    input:
      "block w-full px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-primary-500",
    button: "block w-full px-4 py-2 bg-[#1369A1] text-white rounded-md mb-4",
  };

  const presetAmounts = [500, 1000, 2000]; // Preset amounts in Naira

  return (
    <div className="px-4">
      <div>
        <Navbar/>
      </div>
      <h1 className="text-center text-[25px] my-4 font-[600]">
        Make your payment here
      </h1>
      <div className="max-w-md mx-auto my-4">
        <input
          type="number"
          placeholder="Enter custom amount"
          className={style.input}
          value={customAmount}
          onChange={(e) => setCustomAmount(e.target.value)}
        />
        <PaystackButton
          className="text-black h-10 w-24 bg-transparent border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white"
          amount={customAmount * 100} // Convert amount to kobo
          publicKey={publicKey}
          text="Donate"
          email="Jeremiahv791@gmail.com" // Replace with a valid email address
          onSuccess={handleSuccess}
          onClose={handleClose}
        />

        {presetAmounts.map((amount) => (
          <PaystackButton
            key={amount}
            className={style.button}
            amount={amount * 100} // Convert amount to kobo
            publicKey={publicKey}
            text={`Donate NGN ${amount}`}
            email="Jeremiahv791@gmail.com" // Replace with a valid email address
            onSuccess={handleSuccess}
            onClose={handleClose}
          />
        ))}
      </div>
    </div>
  );
};

export default Donate;

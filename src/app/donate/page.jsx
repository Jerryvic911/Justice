'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import PaystackButton with no SSR
const PaystackButton = dynamic(
  () => import('react-paystack').then((mod) => mod.PaystackButton),
  { ssr: false }
);

const Donate = () => {
  const publicKey = 'pk_test_e66822d2e3553a1dd1143d6dbcb609e62dbab7ac'; // Replace with your actual public key
  const [customAmount, setCustomAmount] = useState('');
  // Total donated amount

  const handleSuccess = (amount) => {
    alert('Thanks for donation!');
    setDonationCount((prevCount) => prevCount + 1); // Increment donation count
    setTotalDonated((prevTotal) => prevTotal + amount); // Accumulate donation amount
  };

  const handleClose = () => {
    alert('Are you sure you want to close?');
  };

  const style = {
    input:
      'block w-full px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-primary-500',
    button: 'block w-full px-4 py-2 bg-[#1369A1] text-white rounded-md mb-4',
  };

  const presetAmounts = [500, 1000, 2000]; // Preset amounts in Naira

  return (
    <div className='px-4'>
      <h1 className='my-4 text-center text-[25px] font-[600]'>
        Make your payment here
      </h1>
      <div className='mx-auto my-4 max-w-md'>
        <input
          type='number'
          placeholder='Enter custom amount'
          className={style.input}
          value={customAmount}
          onChange={(e) => setCustomAmount(e.target.value)}
        />
        <PaystackButton
          className='h-10 w-24 rounded-full border-2 border-blue-500 bg-transparent text-black hover:bg-blue-500 hover:text-white'
          amount={customAmount * 100} // Convert amount to kobo
          publicKey={publicKey}
          text='Donate'
          email='Jeremiahv791@gmail.com' // Replace with a valid email address
          onSuccess={() => handleSuccess(Number(customAmount))} // Pass the custom amount to handleSuccess
          onClose={handleClose}
        />

        {presetAmounts.map((amount) => (
          <PaystackButton
            key={amount}
            className={style.button}
            amount={amount * 100} // Convert amount to kobo
            publicKey={publicKey}
            text={`Donate NGN ${amount}`}
            email='Jeremiahv791@gmail.com' // Replace with a valid email address
            onSuccess={() => handleSuccess(amount)} // Pass the preset amount to handleSuccess
            onClose={handleClose}
          />
        ))}

        {/* Display the donation count and total donated */}
      </div>
    </div>
  );
};

export default Donate;

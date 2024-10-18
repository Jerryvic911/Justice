'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import PaystackButton with no SSR
const PaystackButton = dynamic(
  () => import('react-paystack').then((mod) => mod.PaystackButton),
  { ssr: false }
);

const Donate = () => {
  const publicKey = 'pk_test_e66822d2e3553a1dd1143d6dbcb609e62dbab7ac';
  const [customAmount, setCustomAmount] = useState('');
  
  // State for donation count and total donated
  const [donationCount, setDonationCount] = useState(0);
  const [totalDonated, setTotalDonated] = useState(0);

  // Preset amounts in Naira
  const presetAmounts = [500, 1000, 2000];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSuccess = (amount) => {
    alert('Thank you for your generous donation!');
    setDonationCount((prevCount) => prevCount + 1);
    setTotalDonated((prevTotal) => prevTotal + amount);
  };

  const handleClose = () => {
    alert('Are you sure you want to close the window?');
  };

  const style = {
    container: 'max-w-screen-lg mx-auto px-4 py-12 lg:px-8',
    input: 'block w-full px-4 py-3 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-primary-500',
    button: 'block w-full py-3 bg-[#1369A1] text-white rounded-md mb-4 hover:bg-[#0f5686] transition-colors',
    headline: 'my-6 text-center text-3xl font-bold text-gray-800 leading-snug',
    textCenter: 'text-center text-lg text-gray-700 mb-6',
    card: 'bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mb-6',
    statsContainer: 'mt-8 text-center',
    statItem: 'text-gray-600 text-lg font-medium',
    icon: 'text-[#1369A1] text-5xl mb-4',
  };

  return (
    <div className={style.container}>
      <div className='flex flex-col items-center'>
       
        <h1 className={style.headline}>Support Our Cause with Your Donation</h1>
        <p className={style.textCenter}>
          Your contributions help us keep the work going. Whether its a small or large amount, every contribution matters!
        </p>
      </div>

      <div className={style.card}>
        <input
          type='number'
          placeholder='Enter custom amount (in NGN)'
          className={style.input}
          value={customAmount}
          onChange={(e) => setCustomAmount(e.target.value)}
        />

        {/* Custom donation button */}
        <PaystackButton
          className={style.button}
          amount={customAmount * 100} // Convert amount to kobo
          publicKey={publicKey}
          text='Donate Now'
          email='Jeremiahv791@gmail.com' // Replace with a valid email address
          onSuccess={() => handleSuccess(Number(customAmount))}
          onClose={handleClose}
        />

        {/* Preset donation buttons */}
        {presetAmounts.map((amount) => (
          <PaystackButton
            key={amount}
            className={style.button}
            amount={amount * 100} // Convert amount to kobo
            publicKey={publicKey}
            text={`Donate NGN ${amount}`}
            email='Jeremiahv791@gmail.com' // Replace with a valid email address
            onSuccess={() => handleSuccess(amount)}
            onClose={handleClose}
          />
        ))}

        {/* Donation statistics */}
        <div className={style.statsContainer}>
          <p className={style.statItem}>Total Donations: <strong>{donationCount}</strong></p>
          <p className={style.statItem}>Total Donated: <strong>NGN {totalDonated}</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Donate;

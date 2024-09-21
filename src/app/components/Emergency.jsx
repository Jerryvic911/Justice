import React from 'react';

function Emergency() {
  const handleSOS = () => {
    // Implement SOS functionality here
    alert('SOS Alert Sent!');
  };

  return (
    <div>
      <h1>Emergency</h1>
      <button onClick={handleSOS}>Send SOS</button>
    </div>
  );
}

export default Emergency;
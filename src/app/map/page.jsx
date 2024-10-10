import React from 'react';
import MapsMain from './Maps-Main';

function Map() {
  return (
    <div className="px-4 sm:px-6 lg:px-8"> {/* Padding on all sides, responsive for different screen sizes */}
      <div className=" mb-6 md:text-pretty"> {/* Center the text and add margin at the bottom */}
        <h1 className="text-[30px] font-[600] sm:text-[40px] font-popins">Map</h1>
        <p className="text-[15px] sm:text-[20px] leading-[27px] font-manrope">
          This section provides real-time, location-based assistance and allows users to send alerts or report incidents, making it easier to respond to emergencies quickly.
        </p>
      </div>

      <div className="border-black border-2 rounded-lg w-full h-[216px] mb-6">
      </div>

      <div>
        <div>
          <h1 className='font-[600] text-[30px] font-popins'>Share Your Location</h1>
          <h3 className='font-[500] text-[20px] font-manrope'>Find Help Near You – Support Is Just a Step Away</h3>
        </div>
        <MapsMain />
      </div>

      <div className=" mt-8 pb-10"> 
        <h1 className="text-[30px] sm:text-2xl font-[600] font-popins">Report Incident</h1>
        <h3 className="font-[500] text-[20px] font-manrope">Find Help Near You – Support Is Just a Step Away</h3>
      </div>
    </div>
  );
}

export default Map;

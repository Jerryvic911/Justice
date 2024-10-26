"use client"
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import MapsMain from './Maps-Main';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideIn = {
  hidden: { x: '-100vw' },
  visible: { x: 0 },
};

function Map() {
  const [isVisible, setIsVisible] = useState(false);
  const fadeInRef = useRef(null);
  const slideInRef = useRef(null);
  const mapsRef = useRef(null);

  useEffect(() => {
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          fadeObserver.unobserve(entry.target); // Stop observing after it is visible
        }
      });
    });
    
    if (fadeInRef.current) {
      fadeObserver.observe(fadeInRef.current);
    }

    return () => {
      if (fadeInRef.current) {
        fadeObserver.unobserve(fadeInRef.current);
      }
    };
  }, [fadeInRef]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    if (mapsRef.current) {
      observer.observe(mapsRef.current);
    }

    return () => {
      if (mapsRef.current) {
        observer.unobserve(mapsRef.current);
      }
    };
  }, []);

  

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <motion.div 
        ref={fadeInRef} 
        initial="hidden" 
        animate={isVisible ? "visible" : "hidden"} 
        variants={fadeIn} 
        transition={{ duration: 1.5 }}
        className="mb-6 md:text-pretty"
      >
        <h1 className="text-[30px] font-[600] sm:text-[40px] font-popins">Map</h1>
        <p className="text-[15px] sm:text-[20px] leading-[27px] font-manrope">
          This section provides real-time, location-based assistance and allows users to send alerts or report incidents, making it easier to respond to emergencies quickly.
        </p>
      </motion.div>

      <motion.div 
        ref={slideInRef}
        initial="hidden" 
        animate={isVisible ? "visible" : "hidden"} 
        variants={slideIn} 
        transition={{ duration: 1.5 }}
        className="border-black border-2 rounded-lg w-full h-[216px] mb-6"
      >
      </motion.div>

      <motion.div 
        initial="hidden" 
        animate={isVisible ? "visible" : "hidden"} 
        variants={fadeIn} 
        transition={{ duration: 1.5 }}
      >
        <h1 className='font-[600] text-[30px] font-popins'>Share Your Location</h1>
        <h3 className='font-[500] text-[20px] font-manrope'>Find Help Near You – Support Is Just a Step Away</h3>
        <div>
        <MapsMain />
        </div>
      
      </motion.div>

      <motion.div 
        initial="hidden" 
        animate={isVisible ? "visible" : "hidden"} 
        variants={fadeIn} 
        transition={{ duration: 1.5, delay: 0.7 }}
        className="mt-8 pb-10"
      >
        <h1 className="text-[30px] sm:text-2xl font-[600] font-popins">Report Incident</h1>
        <h3 className="font-[500] text-[20px] font-manrope">Find Help Near You – Support Is Just a Step Away</h3>
      </motion.div>
    </div>
  );
}

export default Map;

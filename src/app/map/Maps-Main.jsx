"use client";
import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

// Dynamically import Leaflet and React-Leaflet components
const MapContainer = dynamic(() => import("react-leaflet").then((m) => m.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((m) => m.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((m) => m.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((m) => m.Popup), { ssr: false });

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function MapsMain() {
  const [customIcon, setCustomIcon] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    const setupLeafletIcon = async () => {
      const L = await import("leaflet");
      const icon = L.icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30],
      });
      setCustomIcon(icon);
    };

    setupLeafletIcon();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        observer.unobserve(mapRef.current);
      }
    };
  }, []);

  const markers = [
    { id: 1, geocode: [10.5231, 7.4403], popUp: "Kaduna Central Police Station" },
    { id: 2, geocode: [10.4868, 7.4215], popUp: "Police Station - Barnawa" },
    { id: 3, geocode: [10.4670, 7.4324], popUp: "Police Station - Sabon Tasha" },
    { id: 4, geocode: [10.5804, 7.4360], popUp: "Police Station - Ungwan Dosa" },
    { id: 5, geocode: [10.5752, 7.4131], popUp: "Police Station - Malali" },
    { id: 6, geocode: [10.4926, 7.3895], popUp: "Police Station - Kakuri" },
    { id: 7, geocode: [10.5227, 7.4227], popUp: "Police Station - Tudun Wada" },
    { id: 8, geocode: [10.5245, 7.3977], popUp: "Police Station - Kawo" },
    { id: 9, geocode: [10.5153, 7.3925], popUp: "Police Station - Rigasa" },
    { id: 10, geocode: [10.4757, 7.4405], popUp: "Police Station - Narayi" },
  ];

  // SOS button click handler
  const handleSosClick = () => {
    const message = "SOS alert! I need assistance!";
    const templateParams = {
      message,
    };

    emailjs.send('service_vuy3l4e', 'template_mz5zrpt', templateParams, '0Cboi9PJWPyZXY1G6')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert("SOS message sent!");
      }, (error) => {
        console.error('Failed to send email:', error);
        alert("Failed to send SOS message.");
      });
  };

  return (
    <motion.div 
      ref={mapRef} 
      initial="hidden" 
      animate={isVisible ? "visible" : "hidden"} 
      variants={fadeIn} 
      transition={{ duration: 1 }}
      className="relative w-full mx-auto"
    >
      <MapContainer center={[10.5105, 7.4165]} zoom={12} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          attribution="Google Maps"
          url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
          maxZoom={20}
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
        />

        {customIcon &&
          markers.map((marker) => (
            <Marker key={marker.id} position={marker.geocode} icon={customIcon}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}
      </MapContainer>

      {/* SOS Button */}
      <div className="grid grid-cols-1 md:gap-[35rem] md:flex mt-5">
        <h2 className="font-[500] text-[20px] font-manrope mb-2">For emergency, please click the SOS button</h2>
        <motion.button 
          onClick={handleSosClick}
          animate={{ 
            scale: [1, 1.1, 1], // Scale up to 1.1 and back to 1
          }}
          transition={{ 
            duration: 0.6, // Duration of each heartbeat cycle
            ease: "easeInOut", 
            repeat: Infinity // Repeat the animation indefinitely
          }}
          whileTap={{ scale: 0.95 }} // Scale down when tapped
          className="bg-red-600 text-center md:w-[200px] font-manrope text-white py-2 px-9 rounded-full focus:outline-none hover:bg-red-700"
        >
          SOS
        </motion.button>
      </div>
    </motion.div>
  );
}

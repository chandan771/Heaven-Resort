import React from 'react';
import './style.css';

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg"
        alt="/"
      />

      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen"></div>

      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p>All Inclusive</p>
          <h1 className="font-bold text-3xl md:text-6xl drop-shadow-2xl">
            Private Beaches & Gateways
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2">
            Travellers who truly “get away from it all” trust resorts to provide
            the pinnacle of all-inclusive relaxation. Resort guests are invited
            to enjoy communal onsite amenities like pools, spas, restaurants,
            activities, excursions and shops, and stay the night in luxurious
            private rooms, villas or apartments.
          </p>

          <button className="btn bg-white text-black">Reserve Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

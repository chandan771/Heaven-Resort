import React from 'react';
import './style.css';

const Offers = () => {
  return (
    <div className="max-w-[900px] m-auto px-4 py-12 flex flex-wrap justify-between">
      <p className="text-lg font-bold text-gray-700 cursor-pointer">
        Booking Incentives
      </p>

      <p className="text-lg font-bold text-gray-700 cursor-pointer">
        Comptitive Rates
      </p>

      <p className="text-lg font-bold text-gray-700 cursor-pointer">
        Book with Flexibility
      </p>

      <p className="text-lg font-bold text-gray-700 cursor-pointer">
        Trip Insurance
      </p>

      <p className="text-lg font-bold text-gray-700 cursor-pointer">
        Other Packages
      </p>
    </div>
  );
};

export default Offers;

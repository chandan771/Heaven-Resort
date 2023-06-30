import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  };

  return (
    <div className="absolute w-ful flex justify-between p-4 items-center">
      <div className="flex justify-between w-[95vw]">
        <h1 className="text-white font-bold text-2xl z-20">Heaven Resort</h1>

        <HiMenuAlt3
          className="z-20 text-white cursor-pointer"
          size={25}
          onClick={handleNav}
        />
      </div>

      <div
        className={
          nav
            ? 'fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10'
            : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'
        }
      >
        <ul className="flex flex-col w-full h-full items-center justify-center">
          <li className="font-bold text-2xl p-7">Home</li>
          <li className="font-bold text-2xl p-7">Destinations</li>
          <li className="font-bold text-2xl p-7">Reservations</li>
          <li className="font-bold text-2xl p-7">Amenities</li>
          <li className="font-bold text-2xl p-7">Rooms</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import React from 'react';

const Plan = () => {
  return (
    <div className="max-w-[1400px] w-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      {/* left side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="/"
          className="object-cover w0full h-full p-2 row-span-3"
        />

        <img
          src="https://images.unsplash.com/photo-1512680865582-710e8a690ed6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80"
          alt="/"
          className="object-cover w0full h-full p-2 row-span-2"
        />

        <img
          src="https://images.unsplash.com/photo-1617859047452-8510bcf207fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="/"
          className="object-cover w0full h-full p-2 row-span-2"
        />

        <img
          src="https://images.unsplash.com/photo-1522933001375-72d29575cf05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="/"
          className="object-cover w0full h-full p-2 row-span-3"
        />

        <img
          src="https://images.unsplash.com/photo-1606923750120-6cd6e3f378ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
          alt="/"
          className="object-cover w0full h-full p-2 row-span-2"
        />
      </div>

      {/* right side */}

      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">Plan Your Next Trip</h3>
        <p className="text-2xl py-6">Grand Island, Maldives, Indian Ocean</p>
        <p className="pb-6">
          Take a break from bustling city life and go for an amazing Dudhsagar
          Falls and Spice Plantation tour with your folks. This majestic fall is
          located on the Mandovi river near Kulem. The forested area around
          Dudhsagar falls offers nature lovers a thrill, enabling them to get
          closer to nature. Also, gain significant knowledge about various types
          of spices as you go on a Spice Plantation tour in Keri. Enjoy a
          perfect getaway with your dear ones and spend your entire day amidst
          lush green forests and waterfalls.
        </p>
        <button className="border-black  hover:shadow-xl">Read More</button>
        <button className="bg-black text-white border-black hover:shadow-xl">
          Book Your Trip
        </button>
      </div>
    </div>
  );
};

export default Plan;

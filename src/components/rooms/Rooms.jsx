import React from 'react';

const Rooms = () => {
  return (
    <div className="max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
      <div className="lg:top-20 realtive lg:col-span-1 col-span-2">
        <h3 className="text-2xl font-bold">Fine Interior Rooms</h3>
        <p className="pt-4">
          The Lapiaz Sideboard originates from one of Boca do Lobo‘s iconic
          design pieces. Based on the same aesthetic that created a legacy, this
          stunning sideboard takes exceptional craftsmanship and design to a new
          realm. The stunning design displays the Koi Bathtub, the Nazca
          Washbasin, and the stunning McQueen Rectangular Wall Light Mirror.
          Different-shaped doors and drawers open to a distinct poplar root wood
          veneer interior convey both dynamics and elegance, a beautiful duality
          between power and refinement to bring a new modern life into interior
          design.
        </p>
      </div>

      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img
          src="https://www.thespruce.com/thmb/NVsBoU6wKKbFcfyrwB-j_F5NsDQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/JS_TidalInteriors_PointLoma_0006-731b0d848703431b9e2d7ece262d0c35.jpg"
          alt="/"
          className="object-cover w-full h-full"
        />

        <img
          src="https://www.archi-living.com/wp-content/uploads/coastal-decor-JMA-Interior-Design-McCarthy-Archi-living-COVER.jpg"
          alt="/"
          className="object-cover w-full h-full row-span-2"
        />

        <img
          src="https://luxesource.com/wp-content/uploads/2021/07/LX_PalmBeach39_HOM_Alterman_04.jpg"
          alt="/"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Rooms;

import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="https://images.pexels.com/photos/2714627/pexels-photo-2714627.jpeg"
        alt="Horse ride at sunset"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p>All inclusive</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            Unforgettable horse riding experiences
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
            Extraordinary several-day horse riding experiences, catering to the
            wanderlust in your soul. Let the hoofbeats guide you to the journey
            of a lifetime.
          </p>
          <button className="bg-white text-black ">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

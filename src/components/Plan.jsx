import React from "react";

const Plan = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      {/* Left Side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/8968687/pexels-photo-8968687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Man Hugs Horse"
        ></img>
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/9275221/pexels-photo-9275221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Child on Horse "
        ></img>
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/58897/pexels-photo-58897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Horse Face"
        ></img>

        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/3764465/pexels-photo-3764465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Evening Ride"
        ></img>
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/12704958/pexels-photo-12704958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Beach Ride"
        ></img>
      </div>
      {/* Right Side */}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">
          Plan Your Unforgettable Experience
        </h3>
        <p className="text-2xl py-6">
          {" "}
          Choose a ride that you have always dreamed of.
        </p>
        <p className="pb-6">
          Whether you crave the sandy shores of beach rides, the serenity of
          river trails, or the breathtaking vistas of mountainous landscapes, we
          have the perfect journey for you. Our team of seasoned equestrian
          experts ensures a safe and enjoyable ride for riders of all abilities,
          from beginners to seasoned pros. Immerse yourself in the beauty of
          nature, bond with our gentle and well-trained horses, and create
          lasting memories as you explore the wonders of the great outdoors.
        </p>
        <div>
          <button className="border-black mr-4 hover:shadow-xl">
            Learn More
          </button>
          <button className="bg-black text-white mr-4 hover:shadow-xl">
            Book Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;

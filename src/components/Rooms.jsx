import React from "react";

const Rooms = () => {
  return (
    <div className="max-w-7xl bg-blue-100 mx-auto my-20 pt-16 px-4 grid lg:grid-cols-3 gap-4 ">
      <div className="relative lg:col-span-1 col-span-2">
        <h3 className="text-2xl font-bold">Varied Accommodation Options</h3>
        <p className="pt-4">
          Combine the thrill of horseback riding with comfortable
          accommodations, and you have a recipe for an unforgettable adventure.
          <br />
          From sleeping under the starts to relaxing in a 5 star beach-side
          villa, we have the accommodation option where you can rest your head
          after a long day in the saddle.
          <br />
          Embark on an escapade that will leave you with cherished stories to
          share and a longing to return for more incredible escapades with
          "Unforgettable Experiences."
        </p>
      </div>

      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img
          className="object-cover w-full h-full "
          src="https://images.pexels.com/photos/1328876/pexels-photo-1328876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ></img>
        <img
          className="object-cover w-full h-full row-span-2"
          src="https://images.pexels.com/photos/5358785/pexels-photo-5358785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ></img>
        <img
          className="object-cover w-full h-full "
          src="https://images.pexels.com/photos/12931472/pexels-photo-12931472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ></img>
      </div>
    </div>
  );
};

export default Rooms;

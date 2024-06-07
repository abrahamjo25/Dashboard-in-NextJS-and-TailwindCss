import React from "react";

const TopCards = () => {
  return (
    <div className="ml-24 py-5 grid lg:grid-cols-5 gap-4 p-4">
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex w-full flex-col">
          <b>$7,789</b>
          <span className="text-sm">Daily Revenue</span>
        </div>
        <div className="bg-green-100 rounded-lg items-center p-2 justify-center">
          <p>+18%</p>
        </div>
      </div>
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex w-full flex-col">
          <b>$7,789</b>
          <span className="text-sm">Daily Revenue</span>
        </div>
        <div className="bg-green-100 rounded-lg items-center p-2 justify-center">
          <p>+18%</p>
        </div>
      </div>
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex w-full flex-col">
          <b>$7,789</b>
          <span className="text-sm">Daily Revenue</span>
        </div>
        <div className="bg-green-100 rounded-lg items-center p-2 justify-center">
          <p>+18%</p>
        </div>
      </div>
    </div>
  );
};
export default TopCards;

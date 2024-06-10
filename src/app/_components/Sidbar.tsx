import React from "react";
import { RxDashboard, RxPerson, RxSketchLogo } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
const Sidbar = () => {
  return (
    <div className="flex">
      <div className="fixed w-20  shadow-md h-screen flex flex-col p-4 bg-white justify-between items-end">
        <div className="flex flex-col items-center">
          <div className="bg-cyan-800 rounded-lg p-3 inline-block text-white">
            <RxSketchLogo size={20} />
          </div>
          <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-lg p-3 inline-block my-6">
            <RxDashboard size={20} />
          </div>
          <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-lg p-3 inline-block my-4">
            <RxPerson size={20} />
          </div>
          <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-lg p-3 inline-block my-4">
            <HiOutlineShoppingBag size={20} />
          </div>
          <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-lg p-3 inline-block my-4">
            <IoSettingsOutline size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidbar;

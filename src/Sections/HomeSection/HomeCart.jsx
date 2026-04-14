import React from "react";

const HomeCart = () => {
  return (
    <div className=" bg-[#E9E9E9] ">
      <div className=" w-8/12 mx-auto text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 py-8">
        <div className="shadow-sm bg-white p-4 rounded-sm">
          <span className="text-2xl font-bold">10</span>
          <p className="text-gray-400">Total Friends</p>
        </div>
        <div className="shadow-sm bg-white p-4 rounded-sm">
          <span className="text-2xl font-bold">3</span>
          <p className="text-gray-400">On Track</p>
        </div>
        <div className="shadow-sm bg-white p-4 rounded-sm">
          <span className="text-2xl font-bold">6</span>
          <p className="text-gray-400">Need Attention</p>
        </div>
        <div className="shadow-sm bg-white p-4 rounded-sm">
          <span className="text-2xl font-bold">12</span>
          <p className="text-gray-400">Interactions This Month</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCart;

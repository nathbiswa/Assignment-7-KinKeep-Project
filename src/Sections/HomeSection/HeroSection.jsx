import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-[#E9E9E9]">
      <div className="  text-center py-10 space-y-3">
        <h2 className="text-xl md:text-3xl font-bold">Friends to keep close in your life</h2>
        <p className="text-gray-400">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>
        <button className="btn bg-[#244D3F] text-white">+ Add a Friend</button>
      </div>
    </div>
  );
};

export default HeroSection;

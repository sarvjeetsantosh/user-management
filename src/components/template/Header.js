import React from "react";

const Header = () => {
  return (
    <div className="w-full h-20 bg-yellow-400 flex items-center justify-between px-10">
      <input placeholder="Search...." className="w-80 py-2 px-2 rounded " />
      <div className="flex">
        <p className="text-black font-medium">User Name</p>
      </div>
    </div>
  );
};

export default Header;

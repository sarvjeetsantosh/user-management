import React from "react";
import { Link } from "react-router-dom";

const Sidemenu = () => {
  return (
    <div className="w-60 h-screen bg-black">
      <h1 className="text-white h-20 flex items-center justify-center border-b border-gray-500 font-bold">
        LOGO
      </h1>

      <div className="flex flex-wrap px-3 mt-7">
        <Link
          to="/"
          className="w-full my-2 bg-blue-500 text-white capitalize font-medium rounded px-4 py-2"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default Sidemenu;

import React from "react";
import { Link } from "react-router-dom";

const Sidemenu = () => {
  return (
    <div className="w-60 h-screen bg-blue-900">
      <h1 className="text-white h-20 flex items-center justify-center border-b border-gray-500 font-bold bg-gray-900">
        LOGO
      </h1>

      <div className="flex flex-wrap px-3 mt-7">
        <Link
          to="/"
          className="w-full my-2 bg-blue-500 text-gray-100 capitalize font-semimedium rounded px-4 py-2"
        >
          Home
        </Link>

        <Link
          to={"/createuser"}
          className="w-full my-2 bg-blue-500 text-gray-100 capitalize font-semimedium rounded px-4 py-2"
        >
          Create User
        </Link>
      </div>
    </div>
  );
};

export default Sidemenu;

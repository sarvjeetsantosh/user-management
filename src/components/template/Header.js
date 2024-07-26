import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logOutUser } from "../../redux/action/UserAction";

const Header = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  // Ensure user and user.user are available before accessing username
  const username = user && user.user ? user.user.username : "Guest";

  console.log("User name: ", username);

  const handleLogout = () => {
    dispatch(logOutUser());
  };

  return (
    <div className="w-full h-20 bg-yellow-400 flex items-center justify-between px-10">
      <input placeholder="Search...." className="w-80 py-2 px-2 rounded " />
      <div className="flex items-center">
        {isAuthenticated && user ? (
          <>
            <p className="text-black font-medium uppercase">{username}</p>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white ml-10 px-2 py-1 rounded "
            >
              Logout
            </button>
          </>
        ) : (
          <p className="text-black font-medium uppercase">Guest</p>
        )}
      </div>
    </div>
  );
};

export default Header;

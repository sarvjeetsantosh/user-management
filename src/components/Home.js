import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userDataAction } from "../redux/action/UserAction";
import { FaEdit } from "react-icons/fa";

import { deleteUser } from "../services";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { data } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    userDataAction(dispatch);
  }, [dispatch]);

  const handleDelete = async (userId) => {
    try {
      const res = await deleteUser(userId);
      console.log(res);
      userDataAction(dispatch);
    } catch (error) {
      console.log("Not delete", error);
    }
  };

  const handleUpdate = (userId) => {
    navigate(`/updateuser/${userId}`);
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl uppercase underline font-bold mb-5">
        Users List
      </h1>

      {/* <UserForm /> */}

      <table className="w-full mt-5 border-2 border-gray-700 rounded">
        <tbody>
          {data?.map((item, idx) => (
            <tr className="border text-lg h-16" key={idx}>
              <td className="w-4 border px-2 text-center font-bold">
                {idx + 1}
              </td>
              <td className="w-60 border px-4 capitalize font-semibold">
                {item.firstName} {item.lastName}
              </td>
              <td className="w-20 border px-4">{item.email}</td>
              <td className="w-20 border px-2 text-center">{item.age}</td>
              <td className="w-20 border px-2 text-center">{item.gender}</td>
              <td className="w-10 border px-2 text-center">
                <button onClick={() => handleUpdate(item.id)}>
                  <FaEdit />
                </button>
              </td>
              <td className="w-10 border px-2">
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 text-base text-white p-1 px-4 rounded block mx-auto"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;

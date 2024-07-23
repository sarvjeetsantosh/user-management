import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userDataAction } from "../redux/action/UserAction";
import { useNavigate } from "react-router-dom";
import { createUser } from "../services";

const initialValue = {
  firstName: "",
  lastName: "",
  email: "",
  age: "",
  gender: "",
};

const CreateUserForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(formData)
      .then((data) => {
        console.log(data);
        userDataAction(dispatch);
        setFormData(initialValue);
        navigate("/");
      })
      .catch((error) => {
        console.log("data not send!", error);
      });
  };

  return (
    <div className="w-full h-[90vh] flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap items-center justify-around gap-5 bg-gray-700 p-10 rounded"
      >
        <input
          name="firstName"
          placeholder={"firstName"}
          value={formData.firstName}
          onChange={handleChange}
          className="w-[49%] p-2 rounded"
        />
        <input
          name="lastName"
          placeholder={"lastName"}
          value={formData.lastName}
          onChange={handleChange}
          className="w-[49%] p-2 rounded"
        />
        <input
          name="email"
          placeholder={"Email"}
          value={formData.email}
          onChange={handleChange}
          className="w-[49%] p-2 rounded"
        />
        <input
          name="age"
          placeholder={"Age"}
          value={formData.age}
          onChange={handleChange}
          className="w-[49%] p-2 rounded"
        />

        <select
          name="gender"
          onChange={handleChange}
          value={formData.gender}
          className="w-[49%] p-2 rounded"
        >
          <option value="">Select Gender</option>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>

        <input
          type="submit"
          className="w-[49%] bg-yellow-400 cursor-pointer font-semibold p-2 rounded"
        />
      </form>
    </div>
  );
};

export default CreateUserForm;

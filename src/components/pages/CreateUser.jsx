import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userDataAction } from "../../redux/action/UserAction";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../services";

const initialValue = {
  username: "",
  password: "",
  email: "",
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
        console.log("created new data", data);
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
        className="w-[500px] flex flex-wrap items-center justify-around gap-5 bg-black p-10 rounded-xl shadow-xl border"
      >
        <input
          name="username"
          placeholder={"username"}
          value={formData.username}
          onChange={handleChange}
          className="w-full h-[50px] px-[20px] rounded-full"
        />
        <input
          name="password"
          placeholder={"password"}
          value={formData.password}
          onChange={handleChange}
          className="w-full h-[50px] px-[20px] rounded-full"
        />
        <input
          name="email"
          placeholder={"Email"}
          value={formData.email}
          onChange={handleChange}
          className="w-full h-[50px] px-[20px] rounded-full"
        />

        <input
          type="submit"
          className="w-full h-[50px] bg-yellow-400 cursor-pointer font-semibold px-[20px] rounded-full"
        />
      </form>
    </div>
  );
};

export default CreateUserForm;

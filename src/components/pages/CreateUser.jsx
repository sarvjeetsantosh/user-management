import React, { useState } from "react";
import { useDispatch } from "react-redux";
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

  // const { loading, error } = useSelector((state) => state.auth);

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
        navigate("/login");
      })
      .catch((error) => {
        console.log("data not send!", error);
      });
  };

  return (
    <div className="w-full h-[100vh] bg-blue-700 flex items-center justify-center">
      <div className="w-[500px] shadow bg-blue-800 rounded">
        <h2 className="text-white text-3xl font-semibold mx-10 mt-5 mb-0">Register new account</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap items-center justify-around gap-5 p-10"
        >
          <input
            name="username" required
            placeholder={"username"}
            value={formData.username}
            onChange={handleChange}
            className="w-full h-[50px] px-[20px] rounded-full"
          />
          <input
            name="password" required
            placeholder={"password"}
            value={formData.password}
            onChange={handleChange}
            className="w-full h-[50px] px-[20px] rounded-full"
          />
          <input
            name="email" required
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
    </div>
  );
};

export default CreateUserForm;

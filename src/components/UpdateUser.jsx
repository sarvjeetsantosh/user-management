import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { userDataAction } from "../redux/action/UserAction";
import { updateUser, getUserById } from "../services";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const { id } = useParams();

  const [user, setUser] = useState();
  const [formData, setFormData] = useState();

  const fetchData = async () => {
    try {
      const data = await getUserById(id);
      setUser(data);
      setFormData(data.data);
    } catch (error) {
      console.log('error for fetch data by id', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [id]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(() => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(id, formData)
      .then((data) => {
        console.log(data);
        navigate('/');
      })
      .catch((error) => {
        console.log("Data not updated!", error);
      });
  };

  if (!user) return <div>....Loading</div>;

  return (
    <>
      <h2 className="my-10 ml-5 text-xl font-semibold"
      > Update User </h2>

      <div className="w-full flex">
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap items-center justify-around gap-5 p-10 ml-5 border rounded"
        >
          <input
            name="firstName"
            placeholder={"firstName"}
            defaultValue={formData.firstName}
            onChange={handleChange}
            className="w-[49%] p-2 rounded border"
          />
          <input
            name="lastName"
            placeholder={"lastName"}
            value={formData.lastName}
            onChange={handleChange}
            className="w-[49%] p-2 rounded border"
          />
          <input
            name="email"
            placeholder={"Email"}
            value={formData.email}
            onChange={handleChange}
            className="w-[49%] p-2 rounded border"
          />
          <input
            name="age"
            placeholder={"Age"}
            value={formData.age}
            onChange={handleChange}
            className="w-[49%] p-2 rounded border"
          />

          <select
            name="gender"
            onChange={handleChange}
            value={formData.gender}
            className="w-[49%] p-2 rounded border"
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


    </>
  )
}

export default UpdateUser;
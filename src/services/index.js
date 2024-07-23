import axios from "axios";

const API_URL = "http://localhost:5000";

export const getUsers = async () => {
  return await axios.get(`${API_URL}/user`);
};

export const createUser = async (data) => {
  return await axios.post(`${API_URL}/user`, data);
};

export const deleteUser = async (userId) => {
  return await axios.delete(`${API_URL}/user/${userId}`);
};

export const getUserById = async (userId) => {
  return await axios.get(`${API_URL}/user/${userId}`);
};

export const updateUser = async (id, formData) => {
  return await axios.put(`${API_URL}/user/${id}`, formData);
};

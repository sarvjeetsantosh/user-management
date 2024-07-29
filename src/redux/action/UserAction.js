import {
  FETCH_DATA_REQUEST,
  DELETE_USER,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CLEAR_AUTH_ERROR,
  SEND_PASSWORD_RESET_EMAIL,
  RESET_PASSWORD,
  LOGOUT,
} from "../constants/ActionType";
import { getUsers, deleteUser as deleteUserService } from "../../services";
import { login } from "../../services";

export const userDataAction = async (dispatch) => {
  try {
    const data = await getUsers();
    console.log(data);
    dispatch({ type: FETCH_DATA_REQUEST, payload: data.data });
  } catch (error) {
    console.log("There is no data. Some thing wrong!", error);
  }
};

export const deleteUser = (userId) => {
  return async (dispatch) => {
    try {
      const response = await deleteUserService(userId);
      if (response.ok) {
        dispatch({ type: DELETE_USER, payload: userId });
      } else {
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.log("Erorr : ", error);
    }
  };
};

export const loginUser = (formData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const response = await login(formData);
    const user = response.data;

    localStorage.setItem("user", JSON.stringify(user)); // save user data to local store
    localStorage.setItem("token", user.token); // Assuming the token is part of the user object

    dispatch({ type: LOGIN_SUCCESS, payload: user });
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.message ? error.response.data.message : error.message,
    });
  }
};

export const logOutUser = () => (disptch) => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  disptch({ type: LOGOUT });
};

// New action to clear authentication error
export const clearAuthError = () => ({ type: CLEAR_AUTH_ERROR });

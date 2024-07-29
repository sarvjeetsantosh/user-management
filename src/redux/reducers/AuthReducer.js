import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CLEAR_AUTH_ERROR,
  LOGOUT,
} from "../constants/ActionType";

const initialStatus = {
  isAuthenticated: false,
  loading: false,
  error: null,
  user: JSON.parse(localStorage.getItem("user")) || null,
};

const authReducer = (status = initialStatus, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...status,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...status,
        isAuthenticated: true,
        user: action.payload,
        loading: false,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...status,
        loading: false,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...status,
        isAuthenticated: false,
        user: null,
      };
    case CLEAR_AUTH_ERROR:
      return {
        ...status,
        error: null,
      };
    default:
      return status;
  }
};

export default authReducer;

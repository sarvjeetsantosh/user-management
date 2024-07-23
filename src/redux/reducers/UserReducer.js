// src/reducers/exampleReducer.js
import {  FETCH_DATA_REQUEST, DELETE_USER } from '../constants/ActionType';

const initialState = {
  data: []
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        data: action.payload
      };
      case DELETE_USER:
        return {
          ...state,
          data: state.data.filter((user) => user.id !== action.payload)
        };
    default:
      return state;
  }
};


export default UserReducer;
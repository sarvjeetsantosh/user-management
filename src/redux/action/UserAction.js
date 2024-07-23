import { FETCH_DATA_REQUEST, DELETE_USER } from "../constants/ActionType";
import { getUsers, deleteUser as deleteUserService} from "../../services";

export const userDataAction = async (dispatch) => {
    try {
        const data = await getUsers();
        console.log(data);
        dispatch({ type: FETCH_DATA_REQUEST, payload: data.data });
    } catch(error){
        console.log("There is no data. Some thing wrong!", error)
    }
};


export const deleteUser = (userId) => {

    return async(dispatch)=> {
        try{
            const response = await deleteUserService(userId);
            if (response.ok) {
            dispatch({ type: DELETE_USER, payload: userId });
            } else {
           console.error('Failed to delete user');
      }
        } catch(error){
            console.log("Erorr : ", error);
        }
    };


    
  
    
}

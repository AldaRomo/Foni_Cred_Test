import { LOGOUT_USER, LOGOUT_LOADING } from "../../../constans/actionsTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default () => async (dispatch) => {
  dispatch({ type: LOGOUT_LOADING });
  AsyncStorage.clear();
      AsyncStorage.removeItem("@user_session");
      dispatch({
        type: LOGOUT_USER
      });
  
};

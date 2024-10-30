import React, { useReducer,useCallback,useEffect } from "react";
import AuthContext from "./index";
import initialStates from "./initialStates";
import reducers from "./reducers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  AUTHENTICATED,
  NOT_AUTHENTICATED
} from "../../constans/actionsTypes";

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(reducers, initialStates);
  
  const validation = useCallback(async () => {
    try {
      let userSession = JSON.parse(await AsyncStorage.getItem("@user_session"));

      if (userSession !== null) {
        authDispatch({
          type: AUTHENTICATED});
      } else {
        
          authDispatch({ type: NOT_AUTHENTICATED });
        
      }
    } catch (e) {
      authDispatch({ type: NOT_AUTHENTICATED });
    }
  }, []);

  useEffect(() => {
    validation();
  }, []);
  


  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

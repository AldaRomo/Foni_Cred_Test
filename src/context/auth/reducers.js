import {
  LOGIN_LOADING,
  LOGOUT_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  LOGIN_FAIL,
  NOT_AUTHENTICATED,
  AUTHENTICATED,
} from "../../constans/actionsTypes";


export default (state, { type, payload }) => {
  switch (type) {
    case NOT_AUTHENTICATED:
      return {
        ...state,
        isLoggedIn: false,
        validating: false,
      };
    case AUTHENTICATED:
      return {
        ...state,
        isLoggedIn: true,
        validating: false,
      };
    case LOGIN_LOADING:
      return {
        ...state,
        loader: { visible: true, message: "Iniciando sesión..." },
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loader: { visible: false, message: null },
        access: payload.access,
        isLoggedIn: true,
      };

    case LOGOUT_LOADING:
      return {
        ...state,
        loader: { visible: true, message: "Cerrando sesión..." },
      };

    case LOGOUT_USER:

      

      return {
        ...state,
        isLoggedIn: false,
        loader: { visible: false, message: null },
      };

    case LOGIN_FAIL:
      return {
        ...state,
        loader: { visible: false, message: null },
        alerta: { visible: payload.visible, message: payload.message },
      };

    

    default:
      return state;
  }
};

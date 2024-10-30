import { Server } from "../../../server";
import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from "../../../constans/actionsTypes";
import { BASEURL } from "../../../constans";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default (body) => async (dispatch) => {
  dispatch({
    type: LOGIN_LOADING,
  });

  await Server.login(body)
    .then((res) => {
       if (res == false || res.length == 0) {
        console.log("usuario y o contra incorrecto");
        dispatch({
          type: LOGIN_FAIL,
          payload: {
            visible: true,
            message: "Usuario y/o contraseña incorrectos.",
          },
        });
        setTimeout(
          () =>
            dispatch({
              type: LOGIN_FAIL,
              payload: { visible: false, message: null },
            }),
          1500
        );
      } else {
        let access = {
          baseurl: BASEURL
        };
        let {id} =res[0];
        const { user, password } = body;
          const uuid = id;
           console.log(access);
            AsyncStorage.setItem(
              "@user_session",
              JSON.stringify({
                usuario: user,
                password,
                uuid
              })
            );
            dispatch({
              type: LOGIN_SUCCESS,
              payload: { access },
            });
          
          
      }
    })
    .catch((error) => {
      console.log("Erro: ", error);
      dispatch({
        type: LOGIN_FAIL,
        payload: {
          visible: true,
          message: "Error al obtener datos del servidor",
        },
      });
      setTimeout(
        () =>
          dispatch({
            type: LOGIN_FAIL,
            payload: { visible: false, message: null },
          }),
        1500
      );
    });
};

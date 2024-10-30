import React, { useState, useEffect, useContext } from "react";
import {
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Loader } from "../../components";
import { loginUser } from "../../context/auth/actions";
import { Ionicons } from "@expo/vector-icons";
import { colors, dim } from "../../utils";
import { osName } from "expo-device";
import { IMAGES } from "../../global";

import AuthContext from "../../context/auth";
import AwesomeAlert from "react-native-awesome-alerts";





const Login = () => {
  const [passOculta, setPassOculta] = useState(true);
  const [didKeyboardShow, setKeyboardShow] = useState(undefined);

  const _keyboardDidShow = () => setKeyboardShow(osName !== "iOS" ? true : false);
  const _keyboardDidHide = () => setKeyboardShow(false);

  const handleOnFocus = () => setIsValid(true);

  const [data, setData] = useState({ username: "", password: "" });

  const [isValid, setIsValid] = useState(true);

  const {
    authDispatch,
    authState: { alerta, loader },
  } = useContext(AuthContext);

  {
    /*Manejo del login*/
  }

  const onSubmit = async () => {
    

    if (data.username != "" && data.password != "") {
      loginUser({
        password: data.password,
        user: data.username,
      })(authDispatch);
    } else {
      setIsValid(false);
    }
  };

  {
    /*Manejo para ingresar data*/
  }
  const onChange = ({ name, value }) => {
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    

    const showSubcription = Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    const hideSubcription = Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    return () => {
      console.log("[ 🚀 Pantalla Login Desmontada 🚀 ]");
      showSubcription.remove();
      hideSubcription.remove();
    };

  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          {(!didKeyboardShow && (
            <View style={styles.logoContainer}>
              <Image
                resizeMode="contain"
                style={{ width: dim.WIDTH * 0.8, height: dim.HEIGHT * 0.15 }}
                source={require("./../../../assets/imgs/logo.png")}
              />
            </View>
          )) || (
            <View
              style={{
                width: dim.WIDTH - 50,
                marginTop: 40,
                paddingVertical: 20,
              }}
            >
              <Text
                style={{
                  color: colors.primary,
                  fontFamily: "Poppins-SemiBold",
                  fontSize: 44,
                }}
              >
                Hola <Text style={{ fontSize: 30 }}>👋</Text>
              </Text>
              <Text
                style={{
                  color: colors.primary,
                  fontFamily: "Poppins-Light",
                  fontSize: 18,
                }}
              >
                Ingrese sus datos de{" "}
                <Text style={{ fontStyle: "italic" }}>sesión.</Text>
              </Text>
            </View>
          )}
          <LoginInput
            icon="person"
            returnKeyType="none"
            autoCapitalize="none"
            placeholder="usuario"
            placeholderTextColor={colors.terteary}
            value={data.username || null}
            isValid={isValid}
            onFocus={handleOnFocus}
            onChangeText={(value) => {
              onChange({ name: "username", value });
            }}
          />

          <LoginInput
            icon="lock-closed"
            returnKeyType="none"
            autoCapitalize="none"
            placeholder="contraseña"
            placeholderTextColor={colors.terteary}
            secureTextEntry={passOculta}
            isPassword={true}
            isValid={isValid}
            passOculta={passOculta}
            setPassOculta={setPassOculta}
            onFocus={handleOnFocus}
            value={data.password || null}
            onChangeText={(value) => {
              onChange({ name: "password", value });
            }}
          />

          <TouchableOpacity style={styles.button} onPress={onSubmit}>
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>
        </View>

        <Loader
          visible={loader?.visible !== undefined ? loader.visible : null}
          message={loader?.visible !== undefined ? loader.message : null}
        />

        {/*Mensajes de alerta*/}
        <AwesomeAlert
          show={alerta.visible}
          closeOnTouchOutside={false}
          customView={
            <View
              syle={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{ width: 40, height: 40, alignSelf: "center" }}
                source={IMAGES.ERROR}
              />
              <Text
                style={{
                  color: colors.black,
                  fontSize: 18,
                  fontFamily: "Poppins-Regular",
                  textAlign: "center",
                }}
              >
                {alerta?.message}
              </Text>
            </View>
          }
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const LoginInput = ({
  icon,
  isPassword,
  passOculta,
  setPassOculta,
  isValid,
  ...props
}) => {
  return (
    <View>
      <View style={styles.iconLeft}>
        <Ionicons name={icon} size={25} color={colors.primary} />
      </View>
      <TextInput
        {...props}
        style={[
          styles.input,
          {
            borderColor: isValid ? null : "#FF0000",
            borderWidth: isValid ? null : 2,
          },
        ]}
      />
      {isPassword && (
        <TouchableOpacity
          style={styles.iconRight}
          onPress={() => setPassOculta(!passOculta)}
        >
          <Ionicons
            name={passOculta ? "eye-off" : "eye"}
            size={25}
            color={colors.primary}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  mainContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    borderBottomColor: colors.terteary,
    width: dim.WIDTH - 50,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
    marginHorizontal: 20,
    marginBottom: 30,
  },
  input: {
    width: dim.WIDTH - 50,
    backgroundColor: colors.cuartery,
    fontFamily: "Poppins-Regular",
    fontSize: 20,
    color: colors.black,
    textAlign: "center",
    padding: 11,
    paddingLeft: 50,
    paddingRight: 50,
    marginVertical: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  iconLeft: {
    left: 15,
    top: 28,
    position: "absolute",
    zIndex: 1,
  },
  iconRight: {
    right: 15,
    top: 28,
    position: "absolute",
    zIndex: 1,
  },
  button: {
    width: dim.WIDTH - 50,
    height: 50,
    alignItems: "center",
    marginTop: 30,
    borderRadius: 6,
    justifyContent: "center",
    backgroundColor: colors.primary,
  },
  buttonText: {
    color: colors.black,
    fontFamily: "Poppins-Regular",
    fontSize: 16,
  },
  footerContainer: {
    marginVertical: 10,
  },
});

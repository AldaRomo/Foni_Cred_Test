import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, ActivityIndicator } from "react-native";
import AuthContext from "../context/auth";
import AuthStack from "./authStack";
import Drawer from "./Drawer";
import { colors } from "../utils";

function AppPath() {
  const {
    authState: { isLoggedIn,validating},
  } = useContext(AuthContext);
  if (validating) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.disabled_card_background,
        }}
      >
        <ActivityIndicator size="small" color={colors.primary} />
        <View
          style={{ flexDirection: "row", padding: 5, alignItems: "center" }}
        >
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              color: colors.secondary,
              fontSize: 12,
            }}
          >
            Validando{" "}
          </Text>
          <Text
            style={{
              fontFamily: "Poppins-Italic",
              fontSize: 12,
              color: colors.secondary,
            }}
          >
            sesión...
          </Text>
        </View>
      </View>
    );
  } else {
    return (
      <NavigationContainer>
        {isLoggedIn === true ? <Drawer /> : <AuthStack />}
      </NavigationContainer>
    );
  }
}

export default AppPath;

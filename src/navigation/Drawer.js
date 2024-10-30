import * as React from 'react';
import { Image, Alert, View, Text, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { ROUTENAMES } from '../constans';
import { ICONS } from "../global";
import { logoutUser } from "../context/auth/actions";
import { StackHome } from './stacks';
import AuthContext from "../context/auth";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const { authDispatch } = React.useContext(AuthContext);

  const handleLogout = () => {
    Alert.alert("Cerrar sesión", "¿Estás seguro que desea salir?", [
      {
        text: "Cancel",
        onPress: () => {},
      },
      {
        text: "OK",
        onPress: () => {
          console.log("Cerrando sesión");
          logoutUser()(authDispatch);
        },
      },
    ]);
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <TouchableOpacity
        onPress={handleLogout}
        style={{ flexDirection: 'row', alignItems: 'center', padding: 16 }}
      >
        <Image
          source={ICONS.LOGOUT}
          style={{ width: 24, height: 24, marginRight: 16 }}
        />
        <Text style={{ fontSize: 16 }}>Cerrar sesión</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

export default function App() {
  const { STACK_HOME,DRAW_HOME } = ROUTENAMES;

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        gestureDirection: "horizontal",
      }}
      initialRouteName={DRAW_HOME}
    >
      <Drawer.Screen name={DRAW_HOME} component={StackHome} />
    </Drawer.Navigator>
  );
}

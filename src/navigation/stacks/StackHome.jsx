import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTENAMES } from "../../constans";

import ScreenHome from "../../screens/Home";
import ScreenDetails from "../../screens/Details";

const Stack = createNativeStackNavigator();

const StackHome = () => {
  const {STACK_HOME, STACK_DETAILS } =
    ROUTENAMES;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        gestureDirection: "horizontal",
      }}
      initialRouteName={STACK_HOME}
    >
      <Stack.Screen name={STACK_HOME} component={ScreenHome} />
      <Stack.Screen name={STACK_DETAILS} component={ScreenDetails} />

    </Stack.Navigator>
  );
};

export default StackHome;

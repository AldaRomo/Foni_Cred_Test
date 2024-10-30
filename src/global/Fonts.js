import { useFonts } from "expo-font";

export default function Fonts({ children }) {
  let [fontsLoaded] = useFonts({
    "Poppins-Light": require("../../assets/fonts/Poppins-Light.ttf"),
    "Poppins-SemiBoldItalic": require("../../assets/fonts/Poppins-SemiBoldItalic.ttf"),
    "Poppins-Italic": require("../../assets/fonts/Poppins-Italic.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!fontsLoaded) return null;

  return <>{children}</>;
}

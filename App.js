import React from "react";
import "react-native-gesture-handler";
import AppPath from "./src/navigation";
import { AuthProvider } from "./src/context";
import Fonts from "./src/global/Fonts";


export default function App() {
  return (
    <Fonts>
      <AuthProvider>
            <AppPath />
      </AuthProvider>
    </Fonts>
  );
}

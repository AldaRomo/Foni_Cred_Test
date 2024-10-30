import React from "react";
import { Animated, StyleSheet, Modal, View, Image, Text } from "react-native";
import { colors } from "../utils";

const Loader = (props) => {
  const fadeAnim = React.useRef(new Animated.Value(1)).current;

  {
    /*Cambiará el valor de fadeAnim a 1 en 5 segundos*/
  }
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(({ finished }) => (finished ? fadeOut() : null));
  };

  {
    /*Cambiará el valor de fadeAnim a 0 en 3 segundos*/
  }
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(({ finished }) => (finished ? fadeIn() : null));
  };

  React.useEffect(() => {
    props?.visible ? fadeIn() : null;
  }, [props?.visible]);

  return (
    <Modal visible={props.visible} transparent={true} statusBarTranslucent>
      <View style={styles.root}>
        <View style={styles.target}>
          <Image
            source={require("../../assets/videos/A_Load.gif")}
            style={styles.image}
          />
          <Animated.View style={{ opacity: fadeAnim, width: "100%" }}>
            <Text style={styles.txt_loader}>{props.message}</Text>
          </Animated.View>
        </View>
      </View>
    </Modal>
  );
};

export default Loader;

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 100,
  },
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(63, 63, 63, 0.8)",
  },
  target: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2.65,
    elevation: 2,
    borderRadius: 12,
  },
  txt_loader: {
    textAlign: "center",
    color: colors.black,
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
  },
});

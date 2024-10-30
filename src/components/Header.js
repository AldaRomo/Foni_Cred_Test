import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { colors } from "../utils";
import { osName } from "expo-device";

const isIphoneX = () => {
  const iphoneXLength = 812;
  const iphoneXSMaxLength = 896;
  const iphone12MaxLength = 926;
  const iphone12Length = 844;
  const iphone15ProMaxLength = 932;
  const iphone15Length = 852;
  const windowDimensions = Dimensions.get("window");

  return (
    osName === "iOS" &&
    osName !== "iPadOS" &&
    (windowDimensions.width === iphoneXLength ||
      windowDimensions.height === iphoneXLength ||
      windowDimensions.width === iphoneXSMaxLength ||
      windowDimensions.height === iphoneXSMaxLength ||
      windowDimensions.width === iphone12MaxLength ||
      windowDimensions.height === iphone12MaxLength ||
      windowDimensions.width === iphone12Length ||
      windowDimensions.height === iphone12Length ||
      windowDimensions.height === iphone15ProMaxLength || 
      windowDimensions.height === iphone15Length)
  );
};

const DimensionsStyle = {
  safeAreaTopHeight: osName === "iOS" ? (isIphoneX() ? 35 : 0) : 0,
  safeAreaBottomHeight: osName === "iOS" && isIphoneX() ? 35 : 0,
  tabBarHeight: osName === "iOS" ? 17 : 20,
  bottomAreaHeight: osName === "iOS" && isIphoneX() ? 34 : 0,
};

const Header = ({ title, iconLeft, onPressLeft}) => {


  return (
    <View style={styles.root_container}>
      <TouchableOpacity style={styles.icon_container} onPress={onPressLeft}>
        <Image source={iconLeft} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.header_title}>{title}</Text>
      <View style={styles.right_container}>
       


      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  root_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop:
      osName === "iOS" ? (DimensionsStyle.safeAreaTopHeight != 0 ? 23 : 5) : 5,
    paddingBottom: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    backgroundColor: colors.white,
  },
  header_title: {
    fontFamily: "Poppins-Regular",
    color: colors.black,
    fontSize: 21,
  },
  icon_container: {
    padding: 5,
  },
  icon: {
    height: 24,
    width: 24,
    tintColor: colors.black,
    resizeMode: "contain",
  },
  right_container: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    backgroundColor: colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2.65,
    elevation: 2,
    borderRadius: 8,
    overflow: "visible",
  },
});

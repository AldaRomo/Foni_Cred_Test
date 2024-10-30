import { Dimensions } from "react-native";

{
  /*Dimensiones*/
}
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const SWIDTH = Dimensions.get("screen").width;

export const dim = {
  WIDTH,
  HEIGHT,
  SWIDTH,
};

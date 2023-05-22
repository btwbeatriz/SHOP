import { StyleSheet } from "react-native";

export const colors = {
  primary: "#ea7a72",
  primaryDark: "#039a83",
  normal: "#b0e6fd",
  important: "#e892ab",
  icon1: "#ea7a72",
  icon2: "#f8c907",
  icon3: "#82a7c9",
  icon4: "#c2c5d1",
  light: "#f0f0f0",
  gray: "#91a3ad",
  darkGray: "#999999",
  dark: "#123",
  black: "#000",
  white: "white",
  active: "#05294a99",
  sceneBg: "#04567f",
  screenBg: "#05294a",
  transparent: "transparent",
};

export const constant = {
  SPACING: 16,
  borderRadius: 10,
  titleFontSize: 24,
  textFontSize: 16,
  subTextFontSize: 14,
  width: "100%",
  alignCenter: "center",
};

export const Style = StyleSheet.create({
  container: {
    flex: 1,
    padding: constant.SPACING,
    alignItems: constant.alignCenter,
    justifyContent: constant.alignCenter,
  },
  title: {
    fontSize: constant.titleFontSize,
    color: colors.active,
  },
  text: {
    fontSize: constant.textFontSize,
    color: colors.active,
  },
  error: {
    padding: constant.SPACING / 2,
    fontSize: constant.subTextFontSize,
    color: colors.important,
  },
  img: { height: 200, width: constant.width },
  column: {
    padding: constant.SPACING / 2,
    width: "50%",
  },
  row: {
    padding: constant.SPACING / 2,
    width: constant.width,
  },
  card: {
    flexDirection: "row",
  },
  TextInput: {
    fontSize: constant.textFontSize,
    width: constant.width,
    color: colors.active,
    borderBottomWidth: 1,
    borderColor: colors.normal,
    padding: constant.SPACING / 2,
  },
  textButton: {
    fontSize: constant.textFontSize,
    color: colors.white,
  },
  button: {
    padding: constant.SPACING / 2,
    width: constant.width,
    alignItems: constant.alignCenter,
    backgroundColor: colors.active,
    borderRadius: constant.borderRadius,
  },
});

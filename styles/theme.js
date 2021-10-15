import { extendTheme } from "@chakra-ui/react";
export const designTheme = extendTheme({
  colors: {
    primary: "#C50E29",
    dark: "#FF5252",
    light: "#FF867F",
    skin: "#FF867F",
    darkSkin: "#B55B52",
    grayLight: "#463F3F",
    primaryScheme: {
      50: "#FFFFFF",
      100: "#FF867F",
      500: "#C50E29",
    },
    darkScheme: {
      50: "#FFFFFF",
      100: "#FF867F",
      500: "#FF5252",
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "20px",
        fontWeight: "none",
        padding: "0 25px",
      },
    },
  },

  fonts: {
    heading: "Roboto,Open Sans",
    body: "Roboto,Open Sans",
  },
});

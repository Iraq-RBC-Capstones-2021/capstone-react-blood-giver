import { extendTheme } from "@chakra-ui/react";
export const designTheme = extendTheme({
  colors: {
    primary: "#C50E29",
    dark: "#FF5252",
    light: "#FF867F",
    skin: "#FF867F",
    darkSkin: "#B55B52",
    grayLight: "#463F3F",
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "20px",
        fontWeight: "none",
      },
    },
  },

  fonts: {
    heading: "Roboto,Open Sans",
    body: "Roboto,Open Sans",
  },
});

import { wrapper } from "../store";
import "../styles/globals.css";
//Font
import "@fontsource/roboto";
import "@fontsource/open-sans";
//Chakra Provider
import { ChakraProvider } from "@chakra-ui/react";
//theme
import { designTheme } from "../styles/theme";

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={designTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default wrapper.withRedux(App);

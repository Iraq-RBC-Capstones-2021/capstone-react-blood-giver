import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/roboto";
import "@fontsource/open-sans";
import { wrapper } from "../store";
import "../styles/globals.css";
import { designTheme } from "../styles/theme";

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={designTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default wrapper.withRedux(App);

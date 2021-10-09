import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/roboto";
import "@fontsource/open-sans";
import { wrapper } from "../store";
import "../styles/globals.css";
import { designTheme } from "../styles/theme";
import NavBar from "../components/Navbar";
const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={designTheme}>
      <NavBar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default wrapper.withRedux(App);

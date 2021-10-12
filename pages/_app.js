import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/roboto";
import "@fontsource/open-sans";
import { wrapper } from "../store";
import "../styles/globals.css";
import { designTheme } from "../styles/theme";
import NavBar from "../components/Navbar";
import LocalizationProvider from "../i18n";
const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={designTheme}>
      <NavBar />
      <LocalizationProvider>
        <Component {...pageProps} />
      </LocalizationProvider>
    </ChakraProvider>
  );
};

export default wrapper.withRedux(App);

import { Box, ChakraProvider, GridItem, Grid } from "@chakra-ui/react";
import "@fontsource/roboto";
import "@fontsource/open-sans";
import { wrapper } from "../store";
import "../styles/globals.css";
import { designTheme } from "../styles/theme";
import NavBar from "../components/Navbar";
import AuthModal from "../components/AuthModal";
import Footer from "../components/Footer";
import LocalizationProvider from "../i18n";
import useFirebaseAuth from "../firebaseApp/useFirebaseAuth";

const App = ({ Component, pageProps }) => {
  useFirebaseAuth();

  return (
    <ChakraProvider theme={designTheme}>
      <LocalizationProvider>
        <Grid h="100vh">
          <GridItem>
            <NavBar />
          </GridItem>
          <GridItem>
            <Component {...pageProps} />
          </GridItem>
          <AuthModal />
        </Grid>
      </LocalizationProvider>
    </ChakraProvider>
  );
};

export default wrapper.withRedux(App);

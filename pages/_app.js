import { Box, ChakraProvider, GridItem, Grid } from "@chakra-ui/react";
import "@fontsource/roboto";
import "@fontsource/open-sans";
import { wrapper } from "../store";
import "../styles/globals.css";
import { designTheme } from "../styles/theme";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import LocalizationProvider from "../i18n";
const App = ({ Component, pageProps }) => {
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
        </Grid>
      </LocalizationProvider>
    </ChakraProvider>
  );
};

export default wrapper.withRedux(App);

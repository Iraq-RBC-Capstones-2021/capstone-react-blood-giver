import { Box, ChakraProvider, GridItem, Grid } from "@chakra-ui/react";
import "@fontsource/roboto";
import "@fontsource/open-sans";
import { wrapper } from "../store";
import "../styles/globals.css";
import { designTheme } from "../styles/theme";
import LocalizationProvider from "../i18n";
import useFirebaseAuth from "../firebaseApp/useFirebaseAuth";
import Layout from "../components/Layout";

const App = ({ Component, pageProps }) => {
  useFirebaseAuth();

  return (
    <LocalizationProvider>
      <ChakraProvider theme={designTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </LocalizationProvider>
  );
};

export default wrapper.withRedux(App);

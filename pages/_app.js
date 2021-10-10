import { ChakraProvider, Grid, GridItem, Container } from "@chakra-ui/react";
import "@fontsource/roboto";
import "@fontsource/open-sans";
import { wrapper } from "../store";
import "../styles/globals.css";
import { designTheme } from "../styles/theme";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={designTheme}>
      <Grid>
        <GridItem colSpan={1}>
          <NavBar />
        </GridItem>
        <GridItem>
          <Container maxW="container.xl">
            <Component {...pageProps} />
          </Container>
        </GridItem>
        <GridItem position="fixed" bottom="0px" w="100%" colSpan={1}>
          <Footer />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
};

export default wrapper.withRedux(App);

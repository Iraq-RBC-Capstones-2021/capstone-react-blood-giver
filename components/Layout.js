import { Flex, Grid, GridItem } from "@chakra-ui/layout";
import { CircularProgress } from "@chakra-ui/progress";
import React from "react";
import { useSelector } from "react-redux";
import useNotification from "../hooks/useNotification";
import AuthModal from "./AuthModal";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
const Layout = ({ children }) => {
  const loading = useSelector((state) => state?.user?.loading);
  useNotification();

  return (
    <Grid h="100vh">
      <GridItem>
        <Navbar />
      </GridItem>
      <GridItem>
        {loading ? (
          <Flex width="full" justify="center">
            <CircularProgress isIndeterminate color="primary" />
          </Flex>
        ) : (
          children
        )}
      </GridItem>
      <AuthModal />
      <Footer />
    </Grid>
  );
};
export default Layout;

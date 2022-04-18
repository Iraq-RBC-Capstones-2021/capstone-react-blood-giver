import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";
import NavItem from "../Navbar/NavItem";
const Index = () => {
  return (
    <Flex
      display={["none", "none", "flex", "flex"]}
      alignContent="center"
      width="100%"
      padding="0 20px"
    >
      <NavItem />
    </Flex>
  );
};

export default Index;

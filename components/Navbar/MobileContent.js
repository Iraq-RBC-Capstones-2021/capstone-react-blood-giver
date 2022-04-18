import React, { useState } from "react";
import { Flex, Button, IconButton } from "@chakra-ui/react";
import NavItem from "../Navbar/NavItem";
import { CloseIcon } from "@chakra-ui/icons";
const Index = ({ display, changeDisplay }) => {
  return (
    <Flex
      w="100vw"
      display={display}
      bgColor="#FF867F"
      zIndex={20}
      h="100vh"
      pos="fixed"
      top="0"
      left="0"
      overflowY="auto"
      flexDir="column"
    >
      <Flex justify="flex-end">
        <IconButton
          mt={2}
          mr={2}
          aria-label="Open Menu"
          size="lg"
          icon={<CloseIcon />}
          onClick={() => changeDisplay("none")}
        />
      </Flex>

      <Flex flexDir="column" align="center">
        <NavItem />
      </Flex>
    </Flex>
  );
};

export default Index;

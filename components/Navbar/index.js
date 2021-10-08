import React from "react";
import { useState } from "react";
import { Spacer, Box, Flex, Button, IconButton } from "@chakra-ui/react";
import DesktopContent from "./DesktopContent";
import MobileContent from "./MobileContent";
import { HamburgerIcon } from "@chakra-ui/icons";
function Index() {
  const [display, changeDisplay] = useState("none");
  return (
    <Flex padding="0 50px">
      <Box my="5" px="3">
        logo
      </Box>
      <Spacer />
      <Flex>
        <Flex>
          {/* Desktop */}
          <DesktopContent />
          {/* Mobile */}
          <IconButton
            aria-label="Open Menu"
            size="lg"
            my={5}
            mr={2}
            padding="0"
            bg="primary"
            _hover={{ color: "primary" }}
            icon={<HamburgerIcon color="white" />}
            onClick={() => changeDisplay("flex")}
            display={["flex", "flex", "none", "none"]}
          />
        </Flex>

        {/* Mobile Content */}
        <MobileContent display={display} changeDisplay={changeDisplay} />
      </Flex>
      <Spacer />
      <Flex>
        <Button
          backgroundColor="primary"
          my={5}
          padding="0 25px"
          color="white"
          fontSize="15px"
          mr="4"
          _hover={{
            bg: "white",
            color: "primary",
            border: `2px solid #C50E29`,
          }}
        >
          Donate
        </Button>
        <Button
          color="primary"
          my={5}
          backgroundColor="white"
          border="1px solid #C50E29"
        >
          Log in
        </Button>
      </Flex>
    </Flex>
  );
}
export default Index;

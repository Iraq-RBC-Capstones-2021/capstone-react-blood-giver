import React from "react";
import { useState } from "react";
import {
  Container,
  Spacer,
  Box,
  Flex,
  Button,
  IconButton,
} from "@chakra-ui/react";
import DesktopContent from "./DesktopContent";
import MobileContent from "./MobileContent";
import { HamburgerIcon } from "@chakra-ui/icons";
import AuthModal from "../AuthModal";
import Link from "next/link";

function Index() {
  const [display, changeDisplay] = useState("none");
  return (
    <Container maxW="container.xl">
      {" "}
      <Flex width="100%">
        <Box my="5" px="3">
          logo
        </Box>
        <Spacer />
        <Flex>
          <Flex>
            <DesktopContent />
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

          <MobileContent display={display} changeDisplay={changeDisplay} />
        </Flex>
        <Spacer />
        <Flex>
          <Link href="/register" passHref>
            <Button
              backgroundColor="primary"
              my={5}
              color="white"
              fontSize="15px"
              mr="4"
              border="2px solid #C50E29"
              _hover={{
                bg: "white",
                color: "primary",
              }}
            >
              Donate
            </Button>
          </Link>
          <AuthModal>Log in</AuthModal>
        </Flex>
      </Flex>
    </Container>
  );
}
export default Index;

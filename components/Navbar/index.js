import React from "react";
import { useState } from "react";
import {
  Container,
  Spacer,
  Box,
  Flex,
  Button,
  IconButton,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  Text,
} from "@chakra-ui/react";
import DesktopContent from "./DesktopContent";
import MobileContent from "./MobileContent";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { handleOpenAuthModal } from "../../store/setting/settingSlice";
import { signout } from "../../store/user/userActions";

function Index({ user, ...props }) {
  const [display, changeDisplay] = useState("none");

  return (
    <Container maxW="container.xl">
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
        <Flex align="center">
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
          {user?.uid ? (
            <Popover>
              <PopoverTrigger>
                <Avatar
                  cursor="pointer"
                  size="sm"
                  name={user?.name}
                  src={user?.photo}
                />
              </PopoverTrigger>
              <PopoverContent width="200px" bg="light">
                <PopoverArrow bg="light" />
                <PopoverHeader>
                  <Text color="primary">{user?.name}</Text>
                </PopoverHeader>
                <PopoverBody>
                  <Button onClick={props.signout} colorScheme="darkScheme">
                    <FormattedMessage defaultMessage="Logout" />
                  </Button>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          ) : (
            <Button
              color="primary"
              my={5}
              backgroundColor="white"
              border="1px solid #C50E29"
              onClick={props.handleOpenAuthModal}
            >
              <FormattedMessage defaultMessage="Log in" />
            </Button>
          )}
        </Flex>
      </Flex>
    </Container>
  );
}

const mapStateToProps = ({ user: { user } }) => ({ user });
export default connect(mapStateToProps, { handleOpenAuthModal, signout })(
  Index
);

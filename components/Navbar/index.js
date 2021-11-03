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
  VStack,
} from "@chakra-ui/react";
import DesktopContent from "./DesktopContent";
import MobileContent from "./MobileContent";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Image from "next/image";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { handleOpenAuthModal } from "../../store/setting/settingSlice";
import { signout } from "../../store/user/userActions";
import langIcon from "../../public/svgIcon/langIcon.svg";
import useLocaleSwitch from "../../i18n/useLocaleSwitch";
import Logo from "../../public/svgIcon/logo.svg";
function Index({ user, ...props }) {
  const [display, changeDisplay] = useState("none");

  const { switchLocale, currentLocale } = useLocaleSwitch();

  return (
    <Container maxW="container.xl">
      <Flex width="100%">
        <Box mt="5" px="3">
          <Image src={Logo} alt="logo" width={60} height={60} />
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
              <FormattedMessage defaultMessage="Donate" />
            </Button>
          </Link>
          {user?.id ? (
            <Popover>
              <PopoverTrigger>
                <Avatar
                  cursor="pointer"
                  size="sm"
                  name={user?.name}
                  src={user?.photo}
                />
              </PopoverTrigger>
              <PopoverContent width="200px">
                <PopoverArrow />
                <PopoverHeader>
                  <Text color="primary">{user?.name}</Text>
                </PopoverHeader>
                <PopoverBody>
                  <Button
                    onClick={props.signout}
                    mx="5"
                    colorScheme="darkScheme"
                  >
                    <FormattedMessage defaultMessage="Logout" />
                  </Button>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          ) : (
            <Button
              color="primary"
              m={5}
              backgroundColor="white"
              border="1px solid #C50E29"
              onClick={() => props.handleOpenAuthModal()}
            >
              <FormattedMessage defaultMessage="Log in" />
            </Button>
          )}

          <Popover>
            <PopoverTrigger>
              <Avatar
                backgroundColor="white"
                cursor="pointer"
                size="sm"
                name={currentLocale}
                src={langIcon?.src}
                fontSize="32"
              />
            </PopoverTrigger>
            <PopoverContent width="100px">
              <PopoverArrow />
              <PopoverBody>
                <VStack>
                  <Button
                    colorScheme={
                      currentLocale === "en" ? "primaryScheme" : "gray"
                    }
                    onClick={() => switchLocale("en")}
                  >
                    <FormattedMessage defaultMessage="English" />
                  </Button>
                  <Button
                    colorScheme={
                      currentLocale === "ar" ? "primaryScheme" : "gray"
                    }
                    onClick={() => switchLocale("ar")}
                  >
                    <FormattedMessage defaultMessage="Arabic" />
                  </Button>
                </VStack>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
      </Flex>
    </Container>
  );
}

const mapStateToProps = ({ user: { user } }) => ({ user });
export default connect(mapStateToProps, { handleOpenAuthModal, signout })(
  Index
);

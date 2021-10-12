import React from "react";
import Image from "next/image";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

function PopupModal({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef();

  return (
    <>
      <Button
        color="primary"
        my={5}
        backgroundColor="white"
        border="1px solid #C50E29"
        onClick={onOpen}
      >
        {children}
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody marginX="auto" textAlign="center">
            <Text fontSize="xl" m="3">
              Sign in With
            </Text>
            <Button
              padding="8"
              borderRadius="full"
              marginY="5"
              bg="#FFF6F3"
              onClick={onOpen}
            >
              <Image
                src="/assets/google.svg"
                alt="google Logo"
                width={40}
                height={40}
              />
              <Text padding="3" color="#FF8175">
                Facebook Account
              </Text>
            </Button>
            <Text fontSize="l">Or</Text>
            <Button
              padding="8"
              borderRadius="full"
              marginY="5"
              bg="#F4F9FF"
              onClick={onOpen}
            >
              <Image
                src="/assets/facebook.svg"
                alt="facebook Logo"
                width={30}
                height={30}
              />
              <Text padding="3" color="#7689EC">
                Facebook Account
              </Text>
            </Button>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default PopupModal;

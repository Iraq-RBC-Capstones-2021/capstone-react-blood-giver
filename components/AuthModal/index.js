import React from "react";
import Image from "next/image";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";
import {
  signInWithGoogle,
  signInWithFacebook,
} from "../../store/user/userActions";
import { connect } from "react-redux";
import { handleCloseAuthModal } from "../../store/setting/settingSlice";
import { FormattedMessage } from "react-intl";

function AuthModal({ authModalOpen, ...props }) {
  const finalRef = React.useRef();

  const handleSigninGoogle = () => {
    props
      .signInWithGoogle()
      .unwrap()
      .then(() => props.handleCloseAuthModal())
      .catch(() => {});
  };

  const handleSigninFacebook = () => {
    props
      .signInWithFacebook()
      .unwrap()
      .then(() => props.handleCloseAuthModal())
      .catch(() => {});
  };

  return (
    <>
      <Modal
        finalFocusRef={finalRef}
        isOpen={authModalOpen}
        onClose={props.handleCloseAuthModal}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody marginX="auto" textAlign="center">
            <Text fontSize="xl" m="3">
              <FormattedMessage defaultMessage="Sign in With" />
            </Text>
            <Button
              padding="8"
              borderRadius="full"
              marginY="5"
              bg="#FFF6F3"
              onClick={handleSigninGoogle}
            >
              <Image
                src="/assets/google.svg"
                alt="google Logo"
                width={40}
                height={40}
              />
              <Text padding="3" color="#FF8175">
                <FormattedMessage defaultMessage="Google Account" />
              </Text>
            </Button>
            <Text fontSize="l">Or</Text>
            <Button
              padding="8"
              borderRadius="full"
              marginY="5"
              bg="#F4F9FF"
              onClick={handleSigninFacebook}
            >
              <Image
                src="/assets/facebook.svg"
                alt="facebook Logo"
                width={30}
                height={30}
              />
              <Text padding="3" color="#7689EC">
                <FormattedMessage defaultMessage="Facebook Account" />
              </Text>
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
const mapStateToProps = ({ setting: { authModalOpen } }) => ({ authModalOpen });
export default connect(mapStateToProps, {
  handleCloseAuthModal,
  signInWithGoogle,
  signInWithFacebook,
})(AuthModal);

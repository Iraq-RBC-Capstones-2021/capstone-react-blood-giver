import { Text, Box, Spacer, Container } from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";
const index = () => {
  return (
    <Box py="2" width="100%" bg="primary" color="white">
      <Container maxW="container.xl" display="flex">
        <Text fontSize="sm">
          <FormattedMessage defaultMessage=" All rights reserved" />
        </Text>
        <Spacer />
        <Text fontSize="sm" mr={10}>
          <FormattedMessage defaultMessage="Terms and Conditions" />
        </Text>
        <Text fontSize="sm" mr={10}>
          <FormattedMessage defaultMessage="Privacy and Cockies" />
        </Text>
        <Text fontSize="sm">
          <FormattedMessage defaultMessage="Accesabillity" />
        </Text>
      </Container>
    </Box>
  );
};

export default index;

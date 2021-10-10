import { Text, Box, Spacer, Container } from "@chakra-ui/react";

const index = () => {
  return (
    <Box py="2" width="100%" bg="primary" color="white">
      <Container maxW="container.xl" display="flex">
        <Text fontSize="sm">All rights reserved </Text>
        <Spacer />
        <Text fontSize="sm" mr={10}>
          Terms and Conditions
        </Text>
        <Text fontSize="sm" mr={10}>
          Privacy and Cockies
        </Text>
        <Text fontSize="sm">Accesabillity </Text>
      </Container>
    </Box>
  );
};

export default index;

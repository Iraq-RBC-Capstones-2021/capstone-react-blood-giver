import { Container, Box, Text } from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";

import ContainerDonors from "../components/donor-content/Container";
function index() {
  return (
    <Container maxW="container.xl">
      <Box textAlign="center">
        <Text marginY="5" fontSize="3xl">
          <FormattedMessage defaultMessage="Find Donors" />
        </Text>
        <Text marginY="5" fontSize="xl">
          <FormattedMessage defaultMessage="You can filter the donors by the blood type or the city" />
        </Text>
        <ContainerDonors />
      </Box>
    </Container>
  );
}

export default index;

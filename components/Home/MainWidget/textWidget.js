import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { BsSuitHeartFill } from "react-icons/bs";
import { FormattedMessage } from "react-intl";

import NextLink from "next/link";

const index = () => {
  return (
    <Flex direction="column" gridGap="5px">
      <Text fontSize="75px" color="primary">
        <FormattedMessage defaultMessage="Blood Giver" />
      </Text>
      <Text color="#BEB6B6" fontSize="30px">
        <FormattedMessage defaultMessage="We Save Lives" />
      </Text>
      <Text color="#727070" fontSize="24">
        <FormattedMessage defaultMessage="Find blood donors near your location" />
      </Text>
      <Box my="10">
        <NextLink href="/donors" passHref>
          <Button
            color="white"
            bg="primary"
            _hover={{ bg: "light" }}
            leftIcon={<BsSuitHeartFill color="white" />}
          >
            <FormattedMessage defaultMessage="Find Donores" />
          </Button>
        </NextLink>
      </Box>
    </Flex>
  );
};

export default index;

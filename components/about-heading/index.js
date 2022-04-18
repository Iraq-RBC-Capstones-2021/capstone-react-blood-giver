import { Heading, Text, Box } from "@chakra-ui/layout";

import { FormattedMessage } from "react-intl";

export default function AboutHeading() {
  return (
    <Box textAlign="center" maxW="none" mt={10} mb={10}>
      <Heading
        mb={6}
        color="skin"
        fontWeight="normal"
        fontSize={{ base: "xx-large", md: "xxx-large" }}
      >
        <FormattedMessage defaultMessage="About Us" />
      </Heading>
      <Text
        fontSize={{ base: "large", md: "xx-large" }}
        fontWeight="bold"
        color="gray.500"
        mb={3}
      >
        <FormattedMessage defaultMessage="What is this all about?" />
      </Text>
      <Text fontSize={{ base: "xs", md: "md" }} p={{ base: "0 40px 0 40px" }}>
        <FormattedMessage
          defaultMessage="We solve the problem of blood emergencies by connecting blood donors
        directly with people in blood need."
        />
      </Text>
    </Box>
  );
}

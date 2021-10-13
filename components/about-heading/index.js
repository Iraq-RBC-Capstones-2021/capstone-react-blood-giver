// style
import { Heading, Text, Box } from "@chakra-ui/layout";

export default function AboutHeading() {
  return (
    <Box maxW="32rem" textAlign="center" maxW="none" mt={10} mb={10}>
      <Heading
        mb={6}
        color="skin"
        fontWeight="normal"
        fontSize={{ base: "xx-large", md: "xxx-large" }}
      >
        About Us
      </Heading>
      <Text
        fontSize={{ base: "large", md: "xx-large" }}
        fontWeight="bold"
        color="gray.500"
        mb={3}
      >
        What is this all about?
      </Text>
      <Text fontSize={{ base: "xs", md: "md" }} p={{ base: "0 40px 0 40px" }}>
        We solve the problem of blood emergencies by connecting blood donors
        directly with people in blood need.
      </Text>
    </Box>
  );
}

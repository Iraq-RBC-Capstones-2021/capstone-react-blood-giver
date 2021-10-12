// style
import { Heading, Text, Box } from "@chakra-ui/layout";

export default function AboutHeading() {
  return (
    <Box maxW="32rem" textAlign="center" maxW="none" mt={10} mb={10}>
      <Heading mb={6} color="skin" fontWeight="normal" fontSize="xxx-large">
        About Us
      </Heading>
      <Text fontSize="xx-large" fontWeight="bold" color="gray.500" mb={3}>
        What is this all about?
      </Text>
      <Text fontSize="md">
        We solve the problem of blood emergencies by connecting blood donors
        directly with people in blood need.
      </Text>
    </Box>
  );
}

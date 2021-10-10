import { Text, Box, Button, Flex } from "@chakra-ui/react";
import CopyRight from "./copyRight";
import SocialMedia from "./socialMedia";
function index() {
  return (
    <Flex
      bg="light"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      pt="30px"
    >
      <Box>
        <Button mb="2" bg="primary" color="white" _hover={{ color: "white" }}>
          Donate
        </Button>
      </Box>
      <Text color="white" fontSize="11px" align="center">
        We solve the problem of blood emerggencies by connecting blood donors
        <br /> directly with people in blood need
      </Text>
      <SocialMedia />
      <CopyRight />
    </Flex>
  );
}
export default index;

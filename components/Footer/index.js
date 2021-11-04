import { Text, Box, Button, Flex } from "@chakra-ui/react";
import CopyRight from "./copyRight";
import SocialMedia from "./socialMedia";
import { FormattedMessage } from "react-intl";
function index() {
  return (
    <>
      <Flex
        bg="light"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        pt="30px"
        mt="10px"
      >
        <Box>
          <Button mb="2" bg="primary" color="white" _hover={{ color: "white" }}>
            <FormattedMessage defaultMessage="Donate" />
          </Button>
        </Box>
        <Text color="white" fontSize="11px" align="center">
          <FormattedMessage defaultMessage="We solve the problem of blood emerggencies by connecting blood donors" />
        </Text>
        <SocialMedia />
      </Flex>
      <CopyRight />
    </>
  );
}
export default index;

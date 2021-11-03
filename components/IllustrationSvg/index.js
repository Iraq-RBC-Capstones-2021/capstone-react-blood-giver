import Illustration_en from "../../public/svgIcon/Illustration_en.gif";
import Image from "next/dist/client/image";
import { Box } from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";
import { Text, Container } from "@chakra-ui/react";
function Index() {
  return (
    <Container maxW="container.sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize="40" color="light" my="8" textAlign="center">
          <FormattedMessage defaultMessage="How it works ?" />
        </Text>
        <Image alt="illustration" src={Illustration_en} height={1600} />
      </Box>
    </Container>
  );
}
export default Index;
import { Stack, Container, Box } from "@chakra-ui/react";
import TextWidget from "./textWidget";
import SvgWidget from "./svgWidget";
const index = () => {
  return (
    <Container maxW="container.xl">
      <Stack direction={["column", "row"]} display="flex" spacing="100px">
        <Box flex="40%">
          <TextWidget />
        </Box>
        <Box flex="60%">
          <SvgWidget />
        </Box>
      </Stack>
    </Container>
  );
};

export default index;

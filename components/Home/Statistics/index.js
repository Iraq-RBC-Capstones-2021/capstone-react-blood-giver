import { Container, Stack, Flex } from "@chakra-ui/react";
import Widget from "./widget";
import statistics from "./statistics";
function index() {
  return (
    <Flex bg="#FAFAFA" mt="5">
      <Container maxW="container.sm">
        <Stack direction={["column", "row"]} spacing="50%" py="5">
          {statistics.map((item) => (
            <Widget item={item} key={item.id} />
          ))}
        </Stack>
      </Container>
    </Flex>
  );
}
export default index;

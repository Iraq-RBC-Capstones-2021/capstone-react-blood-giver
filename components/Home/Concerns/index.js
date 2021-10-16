import { Text, Flex, Container } from "@chakra-ui/react";
import CustomGrid from "../../../components/customGrid";
import concerns from "./concerns";
function index() {
  return (
    <Flex>
      <Container maxW="container.xl">
        <Text fontSize="40" color="light" my="8" textAlign="center">
          Common Concerns
        </Text>
        <CustomGrid data={concerns} />
      </Container>
    </Flex>
  );
}
export default index;

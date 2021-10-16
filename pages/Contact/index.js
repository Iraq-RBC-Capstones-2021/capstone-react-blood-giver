import {
  Text,
  Container,
  Stack,
  Textarea,
  Flex,
  Input,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { formatTime } from "@formatjs/intl";
import { FormattedMessage } from "react-intl";
function index() {
  return (
    <Container maxW="container.xl">
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Text color="light" fontSize="60px">
          <FormattedMessage defaultMessage="Connect us" />
        </Text>
        <Text fontSize="19px" w="600px" align="center">
          <FormattedMessage
            defaultMessage=" If you want to get some help or just to ask us a question,use the form
          below."
          />
        </Text>
        <Stack m="20px" w="600px">
          <Flex gridGap="20px">
            <Input variant="flushed" placeholder="Name" borderColor="primary" />

            <Input
              variant="flushed"
              placeholder="Email"
              borderColor="primary"
            />
          </Flex>

          <Textarea
            variant="flushed"
            placeholder="Message"
            borderColor="primary"
          />
        </Stack>
        <Button mb="2" bg="primary" color="white" _hover={{ color: "white" }}>
          <FormattedMessage defaultMessage="Send" />
        </Button>
      </Flex>
    </Container>
  );
}

export default index;

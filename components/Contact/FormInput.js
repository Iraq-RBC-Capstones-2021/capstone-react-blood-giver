import {
  Spacer,
  Input,
  Stack,
  Textarea,
  Flex,
  Box,
  Button,
} from "@chakra-ui/react";
import { FormattedMessage, useIntl } from "react-intl";
import { FormControl, FormErrorMessage } from "@chakra-ui/form-control";
import CustomInput from "../CustomInput";
function Index({ values, errors, touched, handleBlur, handleChange }) {
  const intl = useIntl();
  return (
    <Stack w="100%" alignItems="center">
      <Flex gridGap="20px" w="100%" mb="10">
        <FormControl
          flex="1"
          minWidth="40%"
          mt="10"
          id="name"
          isRequired={true}
          isInvalid={Boolean(errors.name && touched.name)}
        >
          <CustomInput
            name="name"
            value={values.name}
            width="100%"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={intl.formatMessage({
              defaultMessage: "Name",
            })}
          />
          <FormErrorMessage>{errors.name}</FormErrorMessage>
        </FormControl>

        <FormControl
          flex="1"
          mt="10"
          minWidth="40%"
          id="email"
          isRequired={true}
          isInvalid={Boolean(errors.email && touched.email)}
        >
          <CustomInput
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={intl.formatMessage({
              defaultMessage: "Email",
            })}
          />
          <FormErrorMessage>{errors.email}</FormErrorMessage>
        </FormControl>
      </Flex>
      <FormControl
        flex="1"
        minWidth="40%"
        id="email"
        isRequired={true}
        isInvalid={Boolean(errors.message && touched.message)}
      >
        <Textarea
          name="message"
          value={values.message}
          variant="flushed"
          borderColor="light"
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={intl.formatMessage({
            defaultMessage: "Message",
          })}
        />
        <FormErrorMessage>{errors.message}</FormErrorMessage>
      </FormControl>
      <Box>
        <Button
          mb="2"
          mt="10"
          bg="primary"
          color="white"
          _hover={{ color: "white" }}
        >
          <FormattedMessage defaultMessage="Send" />
        </Button>
      </Box>
    </Stack>
  );
}

export default Index;

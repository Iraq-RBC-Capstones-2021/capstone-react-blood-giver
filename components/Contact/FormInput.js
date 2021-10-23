import { useRef, useState } from "react";
import { Stack, Textarea, Flex, Box, Button, Heading } from "@chakra-ui/react";
import { FormattedMessage, useIntl } from "react-intl";
import { FormControl, FormErrorMessage } from "@chakra-ui/form-control";
import CustomInput from "../CustomInput";
import emailjs from "emailjs-com";
import { RiCheckboxCircleFill } from "react-icons/ri";

function Index({ values, errors, touched, handleBlur, handleChange }) {
  const [isSent, setIsSent] = useState(false);
  const intl = useIntl();
  const form = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAIL_USER_ID
      )
      .then(() => setIsSent(true));
  }

  if (!isSent) {
    return (
      <form ref={form} onSubmit={handleSubmit}>
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
              type="submit"
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
      </form>
    );
  }
  return (
    // runs once the user submits the message
    <>
      <RiCheckboxCircleFill size="30%" color="#979797" />
      <Heading color="primary">
        <FormattedMessage defaultMessage="Thanks for your message"></FormattedMessage>
      </Heading>
    </>
  );
}

export default Index;

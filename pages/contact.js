import { Text, Container, Flex } from "@chakra-ui/react";
import { FormattedMessage, useIntl } from "react-intl";
import { useFormik } from "formik";
import validationSchema from "../components/Contact/contactValidation";
import FormInput from "../components/Contact/FormInput";
function Contact() {
  const {
    values,
    errors,
    touched,
    setFieldValue,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    validationOnBlur: true,
    onSubmit: () => {},
  });
  const intl = useIntl();
  return (
    <Container maxW="container.sm">
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Text color="light" fontSize="60px" pb="5">
          <FormattedMessage defaultMessage="Contact us" />
        </Text>
        <Text fontSize="22px" mb="20px" align="center">
          <FormattedMessage
            defaultMessage=" If you want to get some help or just to ask us a question,use the form
          below."
          />
        </Text>
        <FormInput
          errors={errors}
          values={values}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      </Flex>
    </Container>
  );
}

export default Contact;

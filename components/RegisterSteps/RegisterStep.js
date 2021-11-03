import React, { useContext } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Text, VStack, Wrap } from "@chakra-ui/layout";
import { FormControl, FormErrorMessage } from "@chakra-ui/form-control";
import CustomSelect from "../CustomSelect";
import bloodTypes from "../../src/data/bloodTypes";
import cities from "../../src/data/cities";
import CustomInput from "../CustomInput";
import { HStack } from "@chakra-ui/react";
import CustomButton from "../CustomButton";
import RegisterContext from "./StateContext";

const RegisterStep = () => {
  const {
    values,
    errors,
    touched,
    setFieldValue,
    handleChange,
    handleBlur,
    handleSubmit,
    backToPrevStep,
  } = useContext(RegisterContext);

  const intl = useIntl();

  return (
    <VStack spacing="10" align="start">
      <Text color="grayLight" fontSize="20">
        <FormattedMessage defaultMessage="Congratulations, You’re able to give blood. " />
      </Text>
      <form onSubmit={handleSubmit}>
        <Wrap spacing="16" justify="space-between">
          <FormControl
            flex="1"
            minWidth="40%"
            id="name"
            isRequired={true}
            isInvalid={Boolean(errors.name && touched.name)}
          >
            <CustomInput
              name="name"
              value={values.name}
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

          <FormControl
            flex="1"
            minWidth="40%"
            id="age"
            isRequired={true}
            isInvalid={Boolean(errors.age && touched.age)}
          >
            <CustomInput
              name="age"
              value={values.age}
              onChange={handleChange}
              onBlur={handleBlur}
              type="number"
              placeholder={intl.formatMessage({
                defaultMessage: "Age",
              })}
            />
            <FormErrorMessage>{errors.age}</FormErrorMessage>
          </FormControl>

          <FormControl
            flex="1"
            minWidth="40%"
            id="bloodType"
            isRequired={true}
            isInvalid={Boolean(errors.bloodType && touched.bloodType)}
          >
            <CustomSelect
              name="bloodType"
              placeholder={intl.formatMessage({
                defaultMessage: "Blood Type",
              })}
              value={values.bloodType && { id: values.bloodType }}
              onBlur={handleBlur}
              onChange={(val) => {
                setFieldValue("bloodType", val.id);
              }}
              options={bloodTypes}
              getOptionLabel={(option) => option.id}
              getOptionValue={(option) => option.id}
            />
            <FormErrorMessage>{errors.bloodType}</FormErrorMessage>
          </FormControl>

          <FormControl
            flex="1"
            minWidth="40%"
            id="city"
            isRequired={true}
            isInvalid={Boolean(errors.city && touched.city)}
          >
            <CustomSelect
              name="city"
              placeholder={intl.formatMessage({
                defaultMessage: "City",
              })}
              value={cities.find((c) => c.value === values.city)}
              onBlur={handleBlur}
              onChange={(val) => setFieldValue("city", val.value)}
              options={cities}
            />
            <FormErrorMessage>{errors.city}</FormErrorMessage>
          </FormControl>

          <FormControl
            flex="1"
            minWidth="40%"
            id="phone"
            isRequired={true}
            isInvalid={Boolean(errors.phone && touched.phone)}
          >
            <CustomInput
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={intl.formatMessage({
                defaultMessage: "Phone",
              })}
            />
            <FormErrorMessage>{errors.phone}</FormErrorMessage>
          </FormControl>

          <HStack width="full" justify="space-between">
            <CustomButton colorScheme="darkScheme" onClick={backToPrevStep}>
              <FormattedMessage defaultMessage="Previous" />
            </CustomButton>
            <CustomButton type="submit" colorScheme="darkScheme">
              <FormattedMessage defaultMessage="Next" />
            </CustomButton>
          </HStack>
        </Wrap>
      </form>
    </VStack>
  );
};

RegisterStep.title = <FormattedMessage defaultMessage="Registration" />;

export default RegisterStep;

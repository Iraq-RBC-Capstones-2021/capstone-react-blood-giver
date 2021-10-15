import { Checkbox } from "@chakra-ui/checkbox";
import { Box, Text, VStack } from "@chakra-ui/layout";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import Image from "next/image";
import CustomButton from "../CustomButton";
import sorryImg from "../../src/svg/sorry.svg";

const CheckEligibilityStep = ({ goToNextStep }) => {
  const [formState, setFormState] = useState({
    isProperWeight: false,
    isProperAge: false,
  });

  const [notEligible, setNotEligible] = useState(false);

  const handleOnChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.checked,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (formState.isProperAge && formState.isProperWeight) {
      goToNextStep && goToNextStep();
      return;
    }

    setNotEligible(true);
  };

  if (notEligible) {
    return (
      <VStack width="full" justifyContent="center" alignItems="center" mt="20">
        <Image src={sorryImg} alt="Sorry" />
        <Text fontWeight="bold" fontSize="3xl" textAlign="center">
          <FormattedMessage defaultMessage="Really sorry you are not eligible !! " />
        </Text>
      </VStack>
    );
  }
  return (
    <Box width="full" mt="20" onSubmit={handleOnSubmit}>
      <form className="w-full">
        <VStack width="70%" spacing="32" mx="auto">
          <Box width="full" display="flex" justifyContent="space-between">
            <Text fontWeight="semibold" fontSize="xl">
              <FormattedMessage defaultMessage="Is your current weight is more than 50kg (110 pounds)?" />
            </Text>
            <Checkbox
              mx="2"
              name="isProperWeight"
              size="lg"
              isChecked={formState.isProperWeight}
              colorScheme="darkScheme"
              onChange={handleOnChange}
              borderColor="dark"
            />
          </Box>

          <Box width="full" display="flex" justifyContent="space-between">
            <Text fontWeight="semibold" fontSize="xl">
              <FormattedMessage defaultMessage="Are you above 16?" />
            </Text>
            <Checkbox
              mx="2"
              name="isProperAge"
              size="lg"
              isChecked={formState.isProperAge}
              colorScheme="darkScheme"
              onChange={handleOnChange}
              borderColor="dark"
            />
          </Box>

          <Box width="full" display="flex" justifyContent="end">
            <CustomButton type="submit" colorScheme="darkScheme">
              <FormattedMessage defaultMessage="Next" />
            </CustomButton>
          </Box>
        </VStack>
      </form>
    </Box>
  );
};

export default CheckEligibilityStep;

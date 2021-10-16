import { Checkbox } from "@chakra-ui/checkbox";
import { Box, Text, VStack } from "@chakra-ui/layout";
import React, { useContext, useState } from "react";
import { FormattedMessage } from "react-intl";
import Image from "next/image";
import CustomButton from "../CustomButton";
import sorryImg from "../../src/svg/sorry.svg";
import RegisterContext from "./StateContext";

const CheckEligibilityStep = () => {
  const { eligState, setEligState, goToNextStep } = useContext(RegisterContext);

  const [notEligible, setNotEligible] = useState(false);

  const handleOnChange = (e) => {
    setEligState({
      ...eligState,
      [e.target.name]: e.target.checked,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (eligState.isProperAge && eligState.isProperWeight) {
      goToNextStep && goToNextStep();
      return;
    }

    setNotEligible(true);
  };

  if (notEligible) {
    return (
      <VStack width="full" justifyContent="center" alignItems="center">
        <Image width={300} height={300} src={sorryImg} alt="Sorry" />
        <Text fontWeight="bold" fontSize="3xl" textAlign="center">
          <FormattedMessage defaultMessage="Really sorry you are not eligible !! " />
        </Text>
      </VStack>
    );
  }
  return (
    <Box width="full" onSubmit={handleOnSubmit}>
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
              isChecked={eligState.isProperWeight}
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
              isChecked={eligState.isProperAge}
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

CheckEligibilityStep.title = <FormattedMessage defaultMessage="Eligibility" />;

export default CheckEligibilityStep;

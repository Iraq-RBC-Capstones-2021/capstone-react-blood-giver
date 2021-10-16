import { HStack } from "@chakra-ui/layout";
import React from "react";
import PropTypes from "prop-types";
import Step from "./Step";

const StepperBar = ({ stepTitles, currentStep }) => {
  return (
    <HStack width="full" spacing="-5px" mt="10">
      {stepTitles.map((title, i) => {
        return (
          <Step
            key={i}
            status={
              i === currentStep
                ? "active"
                : i < currentStep
                ? "done"
                : "inactive"
            }
            isLast={i === stepTitles.length - 1}
            title={title}
          />
        );
      })}
    </HStack>
  );
};

StepperBar.propTypes = {
  stepTitles: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentStep: PropTypes.number.isRequired,
};

export default StepperBar;

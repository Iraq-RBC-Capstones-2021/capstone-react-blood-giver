import React, { useState } from "react";

const useStepper = (stepsArr = []) => {
  const [step, setStep] = useState(0);

  const goToNextStep = () => {
    setStep((prev) => {
      if (prev + 1 >= stepsArr.length) {
        return prev;
      }
      return prev + 1;
    });
  };
  const backToPrevStep = () => {
    setStep((prev) => {
      if (prev - 1 < 0) {
        return prev;
      }
      return prev - 1;
    });
  };

  const CurrentStepComponent = stepsArr[step] ?? (() => <></>);

  return {
    step,
    goToNextStep,
    backToPrevStep,
    CurrentStepComponent,
  };
};

export default useStepper;

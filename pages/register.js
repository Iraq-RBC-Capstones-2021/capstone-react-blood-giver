import Head from "next/head";
import useStepper from "../hooks/useStepper";
import registerSteps from "../components/RegisterSteps";
import { Center, VStack } from "@chakra-ui/layout";
import StepperBar from "../components/StepperBar";
import { useState } from "react";
import { useFormik } from "formik";
import RegisterContext from "../components/RegisterSteps/StateContext";
import registerSchema from "../components/RegisterSteps/validationSchema";

export default function Register() {
  const [eligState, setEligState] = useState({
    isProperWeight: false,
    isProperAge: false,
  });

  const { step, goToNextStep, backToPrevStep, CurrentStepComponent } =
    useStepper(registerSteps);

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
      age: "",
      city: "",
      bloodType: "",
    },
    validationSchema: registerSchema,
    validateOnBlur: true,
    onSubmit: (values) => {
      goToNextStep && goToNextStep();
    },
  });

  return (
    <RegisterContext.Provider
      value={{
        values,
        errors,
        touched,
        setFieldValue,
        handleChange,
        handleBlur,
        handleSubmit,
        eligState,
        setEligState,
        goToNextStep,
        backToPrevStep,
      }}
    >
      <Center mt="4">
        <Head>
          <title>Register Donor</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <VStack width="80%" spacing="16" justify="center">
          <StepperBar
            stepTitles={registerSteps.map((step) => step.title)}
            currentStep={step}
          />
          <CurrentStepComponent
            goToNextStep={goToNextStep}
            backToPrevStep={backToPrevStep}
          />
        </VStack>
      </Center>
    </RegisterContext.Provider>
  );
}

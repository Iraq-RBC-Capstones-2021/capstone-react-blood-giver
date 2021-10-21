import Head from "next/head";
import useStepper from "../hooks/useStepper";
import registerSteps from "../components/RegisterSteps";
import { Center, VStack } from "@chakra-ui/layout";
import StepperBar from "../components/StepperBar";
import { useState } from "react";
import { useFormik } from "formik";
import RegisterContext from "../components/RegisterSteps/StateContext";
import registerSchema from "../components/RegisterSteps/validationSchema";
import { useDispatch, useSelector } from "react-redux";
import { createDonor } from "../store/donors";
import { useToast } from "@chakra-ui/react";
import uuid from "react-uuid";

export default function Register() {
  const [eligState, setEligState] = useState({
    isProperWeight: false,
    isProperAge: false,
  });
  const { step, goToNextStep, backToPrevStep, CurrentStepComponent } =
    useStepper(registerSteps);
  const distpatch = useDispatch();
  const toast = useToast();
  const onSuccess = () => {
    return toast({
      title: "Request sent",
      description: "We've register you as donor !",
      status: "success",
      position: "top",
      duration: 9000,
      isClosable: true,
    });
  };
  const onFailure = () => {
    return toast({
      title: "Request failed !",
      description: "something wrong happened !",
      status: "failure",
      position: "top",
      duration: 9000,
      isClosable: true,
    });
  };
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
      id: uuid(),
    },
    validationSchema: registerSchema,
    validateOnBlur: true,
    onSubmit: (values) => {
      goToNextStep && goToNextStep();
      distpatch(createDonor({ values, onSuccess, onFailure }));
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

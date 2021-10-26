import Head from "next/head";
import useStepper from "../hooks/useStepper";
import registerSteps from "../components/RegisterSteps";
import { Center, VStack } from "@chakra-ui/layout";
import StepperBar from "../components/StepperBar";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import RegisterContext from "../components/RegisterSteps/StateContext";
import registerSchema from "../components/RegisterSteps/validationSchema";
import { useDispatch, useSelector } from "react-redux";
import { createDonor } from "../store/donors";
import { useToast } from "@chakra-ui/react";
import uuid from "react-uuid";
import { FormattedMessage, useIntl, defineMessage } from "react-intl";

export default function Register() {
  const [eligState, setEligState] = useState({
    isProperWeight: false,
    isProperAge: false,
  });
  const { step, goToNextStep, backToPrevStep, CurrentStepComponent } =
    useStepper(registerSteps);
  const intl = useIntl();
  const distpatch = useDispatch();
  const state = useSelector((data) => data.donors);
  const toast = useToast();
  const onSuccess = () => {
    return toast({
      // title: defineMessage({ defaultMessage: "Request sent" }),
      // description: defineMessage({
      //   defaultMessage :"We've register you as donor !",
      // }),
      title: "title",
      description: "dco",
      status: "success",
      position: "top",
      duration: 9000,
      isClosable: true,
    });
  };
  const onFailure = () => {
    return toast({
      // title: defineMessage({
      //   defaultMessage: "Request failed !",
      // }),
      // description: defineMessage({
      //   defaultMessage: "something wrong happened !",
      // }),
      title: "errror",
      description: "reosfo",
      status: "error",
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
      phone: null,
    },
    validationSchema: registerSchema,
    validateOnBlur: true,
    onSubmit: (values) => {
      distpatch(createDonor(values));
      if (state.status === "success") {
        onSuccess();
        goToNextStep();
      } else if (state.status === "rejected") {
        onFailure();
      }
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

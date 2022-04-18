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
import uuid from "react-uuid";
import withAuth from "../components/withAuth";
import { selectUser } from "../store";

function Register() {
  const [eligState, setEligState] = useState({
    isProperWeight: false,
    isProperAge: false,
  });
  const { step, goToNextStep, backToPrevStep, CurrentStepComponent } =
    useStepper(registerSteps);
  const distpatch = useDispatch();
  const state = useSelector((data) => data.donors);
  const user = useSelector(selectUser);

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
      name: user?.name || "",
      email: user?.email || "",
      age: "",
      city: "",
      bloodType: "",
      id: user?.id || null,
      phone: null,
    },
    validationSchema: registerSchema,
    validateOnBlur: true,
    onSubmit: (donor) => {
      distpatch(createDonor({ donor, goToNextStep }));
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

export default withAuth(Register);

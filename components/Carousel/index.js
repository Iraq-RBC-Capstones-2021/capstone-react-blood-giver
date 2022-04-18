import React from "react";
import { Text } from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";
import Structure from "./Structure";
function index({ direction, interval }) {
  const slides = [
    {
      text: {
        header: <FormattedMessage defaultMessage="Step 1" />,
        body: (
          <FormattedMessage defaultMessage="In the first step, we are asking you two questions to know if you are ready and eligible for donating blood" />
        ),
      },
      img: "./assets/questions.PNG",
    },
    {
      text: {
        header: <FormattedMessage defaultMessage="Step 2" />,
        body: (
          <FormattedMessage defaultMessage="In this step, you will fill some information about yourself like Name, Email, City, Blood Type" />
        ),
      },
      img: "./assets/registration.PNG",
    },
    {
      text: {
        header: <FormattedMessage defaultMessage="Thank you" />,
        body: (
          <FormattedMessage defaultMessage="Let's go, you are now one of the heroes who help people who need blood and you are in the reach of society, thank you" />
        ),
      },
      img: "./assets/thankyou.PNG",
    },
  ];
  return (
    <>
      <Text fontSize="40" color="light" my="8" textAlign="center">
        <FormattedMessage defaultMessage="How It Works" />
      </Text>
      <Structure slides={slides} direction={direction} interval={interval} />
    </>
  );
}

export default index;

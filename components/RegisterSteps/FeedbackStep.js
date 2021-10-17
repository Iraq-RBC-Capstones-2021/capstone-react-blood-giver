import { Text, VStack } from "@chakra-ui/layout";
import React from "react";
import { FormattedMessage } from "react-intl";
import Image from "next/image";
import congratsImg from "../../src/images/congrats.png";

const FeedbackStep = () => {
  return (
    <VStack width="full" justifyContent="center" alignItems="center">
      <Image width={400} height={260} src={congratsImg} alt="congratulations" />
      <Text fontWeight="bold" fontSize="3xl" textAlign="center">
        <FormattedMessage defaultMessage="Thank you!" />
      </Text>
      <Text fontWeight="bold" fontSize="3xl" textAlign="center">
        <FormattedMessage defaultMessage="Registration completed successfully" />
      </Text>
    </VStack>
  );
};

FeedbackStep.title = <FormattedMessage defaultMessage="feedback" />;

export default FeedbackStep;

import { Box, HStack, Text } from "@chakra-ui/layout";
import React from "react";
import PropTypes from "prop-types";
import { CheckIcon } from "@chakra-ui/icons";

const getCircleBgColor = (status) => {
  switch (status) {
    case "active":
      return "primary";
    case "done":
      return "dark";
    default:
      return "light";
  }
};

const Step = ({ status, isLast, title }) => {
  return (
    <HStack spacing="-5px" flex="1">
      <Box
        flex="1"
        height="0.75rem"
        borderRadius="md"
        bgColor={["active", "done"].includes(status) ? "dark" : "gray.100"}
      />
      {!isLast && (
        <Box zIndex="2" position="relative">
          <Text
            fontWeight="light"
            fontSize="lg"
            width="max-content"
            position="absolute"
            top="-2rem"
            right="0"
            left="-1.5rem"
            color="grayLight"
          >
            {title}
          </Text>
          <Box
            width="2rem"
            height="2rem"
            borderRadius="full"
            color="white"
            bgColor={getCircleBgColor(status)}
            justifyContent="center"
            alignItems="center"
            display="flex"
            zIndex="2"
          >
            {status === "done" ? <CheckIcon /> : null}
          </Box>
        </Box>
      )}
    </HStack>
  );
};

Step.propTypes = {
  status: PropTypes.oneOf(["inactive", "active", "done"]),
  isLast: PropTypes.bool,
};

Step.defaultProps = {
  status: "inactive",
  isLast: false,
};

export default Step;

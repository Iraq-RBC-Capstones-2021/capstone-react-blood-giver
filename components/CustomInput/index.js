import { Input } from "@chakra-ui/input";
import React from "react";
import { designTheme } from "../../styles/theme";

const CustomInput = ({ color = designTheme?.colors?.light, ...props }) => {
  return (
    <Input
      {...props}
      variant="flushed"
      borderColor={color}
      _focus={{
        borderColor: color,
        boxShadow: `0 1px 0px 0px ${color}`,
      }}
    />
  );
};

export default CustomInput;

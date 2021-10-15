import { Button } from "@chakra-ui/button";
import React from "react";

const CustomButton = ({
  colorScheme = "primaryScheme",
  children,
  ...props
}) => {
  return (
    <Button
      {...props}
      colorScheme={colorScheme}
      px="8"
      fontSize="15px"
      _hover={{
        bg: `${colorScheme}.100`,
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;

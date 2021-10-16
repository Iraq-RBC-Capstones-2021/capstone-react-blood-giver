import { Box, Text } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import React, { useState } from "react";

function City() {
  const [city, setCity] = useState("");
  const cities = [
    "all",
    "erbil",
    "baghdad",
    "sulaimaniyah",
    "najaf",
    "duhok",
    "basra",
    "karkuk",
  ];
  function handleChange(e) {
    setCity(e.target.value);
  }
  return (
    <Box width="28">
      <Select
        name="city"
        id="city"
        border="1px"
        borderColor="primary"
        borderRadius="full"
        _focus={{
          borderColor: "primary",
        }}
        cursor="pointer"
        color="primary"
        onChange={handleChange}
      >
        {cities.map((city, i) => (
          <option key={i} value={city}>
            {city}
          </option>
        ))}
      </Select>
    </Box>
  );
}

export default City;

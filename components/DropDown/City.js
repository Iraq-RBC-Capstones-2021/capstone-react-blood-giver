import { Box } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import React, { useState } from "react";

import cityName from "../../src/data/cities";
function City({ setCity }) {
  const cities = [{ name: "All" }, ...cityName];
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
          <option key={i} value={city.value}>
            {city.value}
          </option>
        ))}
      </Select>
    </Box>
  );
}

export default City;

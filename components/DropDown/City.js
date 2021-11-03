import { Box } from "@chakra-ui/layout";
import React from "react";
import { FormattedMessage } from "react-intl";

import cityName from "../../src/data/cities";
import ReactSelect from "react-select";
import { designTheme } from "../../styles/theme";
function City({ setCity, city }) {
  const cities = [
    { value: "All", label: <FormattedMessage defaultMessage="All" /> },
    ...cityName,
  ];
  function handleChange(option) {
    setCity(option.value);
  }

  const color = designTheme?.colors?.light;
  const primaryColor = designTheme?.colors?.primary;
  return (
    <Box>
      <ReactSelect
        name="city"
        id="city"
        options={cities}
        value={cities.find((c) => c.value === city)}
        onChange={handleChange}
        styles={{
          container: (base) => ({
            ...base,
            width: 150,
          }),
          singleValue: (base) => ({
            ...base,
            color: primaryColor,
          }),
          control: (base, props) => ({
            ...base,
            borderWidth: 1,
            borderColor: primaryColor,
            borderRadius: "9999px",
            boxShadow: props.isFocused ? `0 1px 0px 0px ${color}` : "none",
            cursor: "pointer",
            ":hover": {
              borderColor: color,
            },
          }),
          option: (base, props) => ({
            ...base,
            backgroundColor: props.isSelected ? color : base.backgroundColor,
            color: primaryColor,
          }),
          dropdownIndicator: (base, props) => ({
            ...base,
            color: props.isFocused ? color : primaryColor,
          }),
        }}
      />
    </Box>
  );
}

export default City;

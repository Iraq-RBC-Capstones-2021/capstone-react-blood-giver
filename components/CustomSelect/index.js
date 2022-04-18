import React from "react";
import Select from "react-select";
import { designTheme } from "../../styles/theme";

const CustomSelect = ({
  value,
  onChange,
  onBlur,
  color = designTheme?.colors?.light,
  options = [],
  ...props
}) => {
  return (
    <Select
      {...props}
      options={options}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      styles={{
        control: (base, props) => ({
          ...base,
          borderWidth: 0,
          borderBottom: "1px solid",
          borderBottomColor: color,
          borderRadius: 0,
          boxShadow: props.isFocused ? `0 1px 0px 0px ${color}` : "none",
          ":hover": {
            borderBottomColor: color,
          },
        }),
        option: (base, props) => ({
          ...base,
          backgroundColor: props.isSelected ? color : base.backgroundColor,
          color: designTheme?.colors?.primary,
        }),
        dropdownIndicator: (base, props) => ({
          ...base,
          color: props.isFocused ? color : base.color,
        }),
      }}
    />
  );
};

export default CustomSelect;

import React from "react";
import { StyledInput } from "./input-styled";

export default function Input({ className, type, name, ...rest }) {
  return (
    <StyledInput
      className={className}
      type={type}
      name={name}
      {...rest}
    >
    </StyledInput>
  );
}
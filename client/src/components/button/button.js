import React from "react";
import { Button } from "./button-styled";

//function clickMe() {
//alert("Ciao");
//}

export default function Bottone({
  children,
  theme,
  type,
  onClick,
  className,
  ...rest
}) {
  const handleClick = () => {
    onClick("hi");
  };

  return (
    <>
      <div>
        <Button
          {...rest}
          theme={theme}
          type={type}
          onClick={handleClick}
          className={`btn ${className}`}
        >
          {children}
        </Button>
      </div>
    </>
  );
}
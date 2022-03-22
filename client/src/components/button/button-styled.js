import styled from "styled-components";

const theme = {
  blue: {
    default: "#3949ab",
    hover: "#283593"
  },
  red: {
    default: "#e91e63",
    hover: "#ad1457"
  },
  dark: {
    default: "#070707",
    hover: "#000000"
  }
};

export const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  height: 30px;
  width: 70px;
  border: none;
  border-radius: 8px;
  outline: 0;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: aese background-color 250ms;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
`;

Button.defaultProps = {
  theme: "blue"
};
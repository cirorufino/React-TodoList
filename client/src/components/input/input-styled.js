import styled from "styled-components";

export const StyledInput = styled.input`
  border: 1px solid black;
  width: 300px;
  height: 30px;
  margin: 0 5px;
  border: 1px solid grey;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  background: linear-gradient(to bottom, #fff, #f7f7f7);
  :focus {
    outline: none;
  }
`;
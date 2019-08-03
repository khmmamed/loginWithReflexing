import React from "react";
import Input from "./input/Styles";
import styled, { css } from "styled-components";

const Material = css`
  font-family: Poppins-SemiBold;
  font-size: 18px;
  color: #555555;
  line-height: 1.2;
  display: block;
  width: 100%;
  height: 52px;
  background: transparent;
  padding: 0 5px;
  outline: none;
  border: none;
`;
const Input = styled.input`
  ${props => (props.material ? Material : null)}
`;

export default ({ type, name, value, ...props }) => (
  <Input type={type} name={name} value={value} {...props} />
);

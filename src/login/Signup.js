import React from "react";
import EmailInput from "./components/Inputs/Input";
import PasswordInput from "./components/Inputs/Input";
import Flex, { Box } from "reactflexing";
import styled from "styled-components";
import Link from "./components/Links";
import SignUpButton from "./components/Buttons/Button";

//import redux module
import { connect } from "react-redux";

const InputContainer = styled(Box)`
  width: 100%;
  position: relative;
  border-bottom: 2px solid #6ace1e;
  margin-bottom: 35px;
  margin-top: ${props => props.top};
`;
const SignupForm = styled(Flex)`
  width: 100%;
`;
const Signup = ({ Email, password, confirmPassword, dispatch }) => (
  <SignupForm>
    <InputContainer>
      <EmailInput type="email" value={Email} placeholder="Email" material />
    </InputContainer>
    <InputContainer>
      <PasswordInput
        type="password"
        value={password}
        placeholder="password"
        material
      />
    </InputContainer>
    <InputContainer>
      <PasswordInput
        type="password"
        value={confirmPassword}
        placeholder="Retaper votre Password"
        material
      />
    </InputContainer>

    <SignUpButton
      text={"S'Enregister"}
      bgColor={"#d5281f"}
      borderColor={"#cb1414"}
      rounded
    />
    <Link link="/">Connecter</Link>
    <Link link="/forgotpassword">Mot de Passe Oublie</Link>
  </SignupForm>
);

//redux connection with component
const mapToProps = state => ({
  Email: state.signup.email,
  password: state.signup.password,
  confirmPassword: state.signup.confirmPassword
});
export default connect(mapToProps)(Signup);

import React from "react";
import Flex, { Box } from "reactflexing";
import styled from "styled-components";
import { ReactComponent as Avatar } from "./ico/logo.svg";
import LoginButton from "./components/Button";
import SignUpButton from "./components/Button";
import PasswordRecovery from "./components/Button";

const LoginContainer = styled(Box)`
  width: 390px;
  background: #fff;
  padding-bottom: 20px;
  padding-top: 50px;
`;

const LoginForm = styled.form`
  width: 100%;
`;
const Title = styled.span`
  display: block;
  font-family: Poppins-Bold;
  font-size: 39px;
  color: #cb1414;
  line-height: 1.2;
  text-align: center;
  padding-bottom: 70px;
`;

const LoginAvatar = styled.span`
  display: block;
  width: 180px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
`;

const InputContainer = styled(Box)`
  width: 100%;
  position: relative;
  border-bottom: 2px solid #6ace1e;
  margin-bottom: 35px;
  margin-top: ${props => props.top};
`;
const UserInput = styled.input`
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

const UserInputText = styled.span`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
`;

const SubmitButtonConatiner = styled(Box)`
  width: 100%;
`;

const SubmitButton = styled.button`
  font-family: Poppins-Medium;
  font-size: 16px;
  color: #fff;
  line-height: 1.2;
  text-transform: uppercase;
  padding: 0 20px;
  width: 100%;
  height: 50px;
  background-color: #57b846;
  border: 1px solid #57b846;
  border-radius: 25px;
  box-shadow: 0 10px 30px 0px rgba(87, 184, 70, 0.5);
  -moz-box-shadow: 0 10px 30px 0px rgba(87, 184, 70, 0.5);
  -webkit-box-shadow: 0 10px 30px 0px rgba(87, 184, 70, 0.5);
  -o-box-shadow: 0 10px 30px 0px rgba(87, 184, 70, 0.5);
  -ms-box-shadow: 0 10px 30px 0px rgba(87, 184, 70, 0.5);
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
`;

const Login = ({ userName, password }) => (
  <Flex>
    <LoginContainer>
      <LoginForm>
        <Flex>
          <Box>
            <Title>Bienvenue Parmi Nous</Title>
          </Box>
          <Box>
            <LoginAvatar>
              <Avatar />
            </LoginAvatar>
          </Box>
          <InputContainer top={"50px"}>
            <UserInput
              placeholder="nom d'utilisateur"
              name="username"
              type="text"
            />
          </InputContainer>
          <InputContainer top={"0px"}>
            <UserInput
              placeholder="mot de passe"
              name="password"
              type="password"
            />
          </InputContainer>
          <SubmitButtonConatiner>
            <LoginButton
              text={"Entrer"}
              bgColor={"#57b846"}
              borderColor={"#57b846"}
            />
            <SignUpButton
              text={"S'Enregister"}
              bgColor={"#d5281f"}
              borderColor={"#cb1414"}
            />
            <PasswordRecovery
              text={"Mot de Passe Oublie"}
              bgColor={"#374960"}
              borderColor={"#374960"}
            />
          </SubmitButtonConatiner>
        </Flex>
      </LoginForm>
    </LoginContainer>
  </Flex>
);

export default Login;

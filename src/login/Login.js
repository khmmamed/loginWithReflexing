import React from "react";
import Flex, { Box } from "reactflexing";
import styled from "styled-components";
import { ReactComponent as Avatar } from "./ico/logo.svg";
import LoginButton from "./components/Button";
import SignUpButton from "./components/Button";
import PasswordRecovery from "./components/Button";
import UserNameInput from "./components/Input";
import KeyWordInput from "./components/Input";

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
const SubmitButtonConatiner = styled(Box)`
  width: 100%;
`;

const Login = ({ userName, passWord }) => (
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
            <UserNameInput
              placeholder="nom d'utilisateur"
              name="username"
              type="text"
              material
            />
          </InputContainer>
          <InputContainer top={"0px"}>
            <KeyWordInput
              placeholder="mot de passe"
              name="password"
              type="password"
              material
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

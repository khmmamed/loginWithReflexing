import React from "react";
import Flex, { Box } from "reactflexing";
import styled from "styled-components";
import { ReactComponent as Avatar } from "./ico/logo.svg";
import LoginButton from "./components/Buttons/Button";
import SignUpButton from "./components/Buttons/Button";
import PasswordRecovery from "./components/Buttons/Button";
import UserNameInput from "./components/Input/Input";
import KeyWordInput from "./components/Input/Input";
import axios from "axios";

//import redux module
import { connect } from "react-redux";

const LoginContainer = styled(Box)`
  width: 390px;
  background: #fff;
  padding-bottom: 20px;
  padding-top: 50px;
`;
const LoginForm = styled(Flex)`
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

const WelcomeMessage = styled(Box)``;
const AvatarContainer = styled(Box)``;

const Login = ({ userName, passWord, dispatch }) => (
  <Flex>
    <LoginContainer>
      <LoginForm>
        <WelcomeMessage>
          <Title>Bienvenue Parmi Nous</Title>
        </WelcomeMessage>
        <AvatarContainer>
          <LoginAvatar>
            <Avatar />
          </LoginAvatar>
        </AvatarContainer>
        <InputContainer top={"50px"}>
          <UserNameInput
            placeholder="nom d'utilisateur"
            name="username"
            type="text"
            value={userName}
            onChange={e =>
              dispatch({ type: "TYPING_USERNAME", value: e.target.value })
            }
            material
          />
        </InputContainer>
        <InputContainer top={"0px"}>
          <KeyWordInput
            placeholder="mot de passe"
            name="password"
            type="password"
            value={passWord}
            onChange={e =>
              dispatch({ type: "TYPING_PASSWORD", value: e.target.value })
            }
            material
          />
        </InputContainer>
        <SubmitButtonConatiner>
          <LoginButton
            text={"Entrer"}
            bgColor={"#57b846"}
            borderColor={"#57b846"}
            onClick={e => {
              axios
                .post("http://localhost:8000/login", {
                  username: userName,
                  password: passWord
                })
                .then(function(response) {
                  console.log(response.data.username);
                })
                .catch(function(error) {
                  console.log(error);
                });
            }}
            rounded
          />
          <SignUpButton
            text={"S'Enregister"}
            bgColor={"#d5281f"}
            borderColor={"#cb1414"}
            rounded
          />
          <PasswordRecovery
            text={"Mot de Passe Oublie"}
            bgColor={"#374960"}
            borderColor={"#374960"}
            rounded
          />
        </SubmitButtonConatiner>
      </LoginForm>
    </LoginContainer>
  </Flex>
);

const mapStateToProps = state => ({
  userName: state.login.username,
  passWord: state.login.password
});

export default connect(mapStateToProps)(Login);

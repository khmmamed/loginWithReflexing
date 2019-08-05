import React from "react";
import Flex, { Box } from "reactflexing";
import styled from "styled-components";
import Login from "./Login";
import Signup from "./Signup";
import { ReactComponent as Avatar } from "./ico/logo.svg";
import AvatarContainer from "./components/AvatarContainer";
import Forgopassword from "./Forgotpassword";

import { BrowserRouter as Router, Route } from "react-router-dom";

const FormContainer = styled(Box)`
  width: 390px;
  background: #fff;
  padding-bottom: 20px;
  padding-top: 50px;
`;

export default () => (
  <Router>
    <Flex>
      <FormContainer>
        <AvatarContainer>
          <Avatar />
        </AvatarContainer>
        {/**page login */}
        <Route exact path="/" component={Login} />
        {/**page signup */}
        <Route path="/signup" component={Signup} />
        {/**page forgetten */}
        <Route path="/forgotpassword" component={Forgopassword} />
      </FormContainer>
    </Flex>
  </Router>
);

import React from "react";
import ReactDOM from "react-dom";


//Store component
import Store from "./login/store";
import { Provider } from "react-redux";

import Login from "./login/Login";

import "./styles.css";

function App(props) {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  rootElement
);

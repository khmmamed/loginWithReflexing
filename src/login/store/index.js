import { createStore } from "redux";
import { login } from "./reducers";

const Store = createStore(login);

export default Store;

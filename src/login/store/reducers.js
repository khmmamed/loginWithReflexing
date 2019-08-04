/**
 * login reducer set username and
 * password from user entry
 *
 * @param {*} state
 * @param {*} action
 * @returns {*} state
 */
export const login = (
  state = { login: { username: "", password: "" } },
  action
) => {
  if (action.type === "TYPING_USERNAME") {
    state.login.username = action.value;
    return { ...state };
  }

  if (action.type === "TYPING_PASSWORD") {
    state.login.password = action.value;
    return { ...state };
  }

  if (action.type === "SHOW_USERNAME") {
    state.login.username = action.username;
    return { ...state };
  }
  return state;
};

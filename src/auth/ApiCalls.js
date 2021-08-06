import axios from "axios";
import { loginFail, loginStart, loginSuccess, logout } from "./AuthActions";

export const loginCall = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      "https://warm-taiga-58602.herokuapp.com/api/auth/login",
      user
    );
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFail());
  }
};

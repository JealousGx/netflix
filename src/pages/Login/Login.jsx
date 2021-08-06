import { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.scss";
import { AuthContext } from "../../auth/AuthContext";
import { loginCall } from "../../auth/ApiCalls";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();

  const handleLogIn = (e) => {
    e.preventDefault();
    loginCall({ email, password }, dispatch);
    history.push("/");
  };
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleLogIn}>
            Sign In
          </button>
          <span>
            New to Netflix?{" "}
            <b>
              <Link to="/register" className="link">
                Sign up
              </Link>{" "}
              now.
            </b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you are not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;

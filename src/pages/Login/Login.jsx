import { Button, TextField } from "@material-ui/core";
import { useContext, useState, useEffect } from "react";
import { loginCall } from "../../context/auth/ApiCalls";
import { AuthContext } from "../../context/auth/AuthContext";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall({ email, password }, dispatch);
  };

  return (
    <div className="login">
      <form className="loginForm">
        <h1>Sign In</h1>
        <TextField
          variant="outlined"
          type="email"
          label="Email"
          className="loginInput"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <TextField
          variant="outlined"
          type="password"
          label="Password"
          className="loginInput"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={isFetching}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;

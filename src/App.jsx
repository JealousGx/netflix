import { Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Watch from "./pages/Watch/Watch";

const App = () => {
  const user = true;

  return (
    <div>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="/register" />}
        </Route>
        <Route exact path="/register">
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>
        {user && (
          <>
            <Route exact path="/movies">
              <Home type="movie" />
            </Route>
            <Route exact path="/series">
              <Home type="series" />
            </Route>
            <Route exact path="/watch">
              <Watch />
            </Route>
          </>
        )}
        <Route exact path="/login">
          {!user ? <Login /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </div>
  );
};

export default App;

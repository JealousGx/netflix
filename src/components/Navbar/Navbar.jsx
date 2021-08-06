import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { logout } from "../../auth/AuthActions";
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import "./Navbar.scss";

const Navbar = ({ user }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <Link to="/" className="link">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
              alt="netflix logo"
            />
          </Link>
          <Link to="/" className="link">
            <span>Homepage</span>
          </Link>
          <Link to="/series" className="link">
            <span className="navbarmainLinks">Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span className="navbarmainLinks">Movies</span>
          </Link>
          <span>New & popular</span>
          <span>My list</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>{user.username}</span>
          <Notifications className="icon" />
          <img
            src={
              user.profilePic
                ? user.profilePic
                : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F0d%2Fdc%2Fca%2F0ddccae723d85a703b798a5e682c23c1.png&f=1&nofb=1"
            }
            alt="profile"
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span onClick={() => dispatch(logout())}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Button } from "@mui/material";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="navContainerLeft">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <h2 className="logo">Booking.com</h2>
          </Link>
        </div>

        <div className="navContainerRight">
          <span>INR</span>
          <img
            src="https://t-cf.bstatic.com/design-assets/assets/v3.68.0/images-flags/In@3x.png"
            alt=""
          />
          <FontAwesomeIcon icon={faQuestionCircle} />
          <span>List your property</span>
          {user ? (
            <div>
              <Button
                variant="outlined"
                style={{ marginRight: "10px", color: "white" }}
                disabled
              >
                {user.username}
              </Button>
              <Button variant="contained" onClick={handleLogout}>
                LOGOUT
              </Button>
            </div>
          ) : (
            <div className="navItems">
              <Link to="/register">
                <button className="navButton">Register</button>
              </Link>
              <Link to="/login">
                <button className="navButton">Sign in</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

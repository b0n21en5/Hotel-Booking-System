import axios from "axios";
import React, { useState, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Navbar from "../../components/navbar/Navbar";
// import "./login.css";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    country: "",
    city: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const user = await axios.post("/auth/register", credentials);
      toast.success("Registered Successfully");
      navigate("/login");
    } catch (error) {
      toast.error("Registration Failed");
    }
  };

  return (
    <>
      <Navbar />
      <div className="login">
        <div className="lContainer">
          <h1>Register Form</h1>
          <input
            type="text"
            placeholder="UserName"
            id="username"
            onChange={handleChange}
            className="lInput"
          />
          <input
            type="email"
            placeholder="Email"
            id="email"
            onChange={handleChange}
            className="lInput"
          />
          <input
            type="text"
            placeholder="Country"
            id="country"
            onChange={handleChange}
            className="lInput"
          />
          <input
            type="text"
            placeholder="City"
            id="city"
            onChange={handleChange}
            className="lInput"
          />
          <input
            type="text"
            placeholder="Phone Number"
            id="phone"
            onChange={handleChange}
            className="lInput"
          />
          <input
            type="text"
            placeholder="password"
            id="password"
            onChange={handleChange}
            className="lInput"
          />
          <button onClick={handleRegister} className="lButton">
            Register
          </button>
          {/* {error && <span>{error.message}</span>} */}
        </div>
      </div>
    </>
  );
};

export default Register;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Register from "./Register";

function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    pass: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (input.email === loggedUser.email && input.pass === loggedUser.pass) {
      // localStorage.setItem(("loggedin", true));
      navigate("/Home");
    } else {
      alert("Your email or password is incorrect");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email : </label>
        <input
          type="text"
          name="email"
          value={input.email}
          onChange={(e) => {
            setInput({ ...input, [e.target.name]: e.target.value });
          }}
        ></input>
        <br />
        <br />
        <label>Password : </label>
        <input
          type="password"
          name="pass"
          value={input.pass}
          onChange={(e) => {
            setInput({ ...input, [e.target.name]: e.target.value });
          }}
        ></input>
        <button type="submit">Login</button>
        <p>
          Don't have an account <NavLink to="/Register">Register Here</NavLink>
        </p>
      </form>
    </div>
  );
}
export default Login;

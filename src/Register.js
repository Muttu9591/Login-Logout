import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    Fullname: "",
    email: "",
    pass: ""
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/Login");
  };
  return (
    <>
      <h1>User Registration </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Fullname : </label>
          <input
            type="text"
            name="Fullname"
            value={input.name}
            onChange={handleChange}
          ></input>
          <br />
          <br />
          <label>Email : </label>
          <input
            type="text"
            name="email"
            value={input.email}
            onChange={handleChange}
          ></input>
          <br />
          <br />
          <label>Password : </label>
          <input
            type="password"
            name="pass"
            value={input.pass}
            onChange={handleChange}
          ></input>
        </div>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default Register;

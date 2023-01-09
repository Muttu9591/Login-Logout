import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("user"));
  // console.log("username" + userName.Fullname);

  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/login");
  };
  return (
    <div>
      <h2>Home page</h2>
      <p>Welcome - {userName.Fullname}</p>
      <button type="button" onClick={handleLogout}>
        LogOut
      </button>
    </div>
  );
}
export default Home;

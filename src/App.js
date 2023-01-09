import "./styles.css";
import Register from "./Register";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import ProtectedRouter from "./Services/ProtectedRouter";

export default function App() {
  return (
    <div className="App">
      {/* <Register /> */}
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        {/* <Route path="/" element={<ProtectedRouter />}> */}
        <Route path="/Home" element={<Home />} />
        {/* </Route> */}
      </Routes>
    </div>
  );
}

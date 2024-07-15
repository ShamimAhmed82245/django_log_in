import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Signin";
import SignUp from "./component/Signup";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

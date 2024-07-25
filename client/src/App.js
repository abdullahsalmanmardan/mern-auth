import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Welcome from "./components/Welcome";
import FormikValidation from "./FormikValidation";

const App = () => {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user" element={<Welcome />} />

        <Route path="/" element={<FormikValidation />} /> 
      </Routes>

      </div>
  );
};

export default App;

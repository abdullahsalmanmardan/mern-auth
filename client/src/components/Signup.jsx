import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    try {
      const res = await axios.post("http://localhost:8000/api/sign-up", {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
      });
      debugger;
      const data = res.data;
      return data;
    } catch (err) {
      console.log("error is ", err);
      return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    sendRequest().then((data) => {
      if (data) {
        history("/login");
      } else {
        console.log("Sign up failed");
      }
    });
  };

  return (
    <div>
      <Typography>Sign Up</Typography>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          width={300}
          marginLeft="auto"
          marginRight="auto"
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            name="name"
            onChange={handleChange}
            value={inputs.name}
            variant="outlined"
            placeholder="Name"
            margin="normal"
          />
          <TextField
            name="email"
            onChange={handleChange}
            type={"email"}
            value={inputs.email}
            variant="outlined"
            placeholder="Email"
            margin="normal"
          />
          <TextField
            name="password"
            onChange={handleChange}
            type="password"
            value={inputs.password}
            variant="outlined"
            placeholder="Password"
            margin="normal"
          />
          <Button variant="contained" type="submit">
            Signup
          </Button>{" "}
        </Box>
      </form>
    </div>
  );
};

export default Signup;

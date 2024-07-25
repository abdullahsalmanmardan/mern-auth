const express = require("express");
const app = express();
const connectDB = require("./db/conn");
require("dotenv").config();
const cookieParser = require('cookie-parser');
const userRouter = require("./routes/user-routes");
const cors = require("cors");

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());
app.use("/api", userRouter);
const port = 8000;
const start = async () => {
  try {
    await connectDB(process.env.CONNSTRING);
    app.listen(port, console.log("listening on 8000"));
  } catch (error) {
    console.log(error);
  }
};

start();

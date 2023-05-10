import express from "express";
import cors from "cors";
import User from '../models/user.schema.js';
import { connectDB } from "../config/database.js";

const webServer = express();
webServer.use(cors());
webServer.use(express.json());

const ipAddress = "127.0.0.1";
const port = 3000;
connectDB();

const user = [];

webServer.get("/", (request, response) => {
  response.send("This is main");
});

webServer.get("/user", (request, response) => {
  response.json(user);
});

webServer.post("/newuser", (request, response) => {

  const name = request.body.name;
  const fullname = request.body.fullname;
  const email = request.body.email;
  const username = request.body.username;
  const password = request.body.password;
  
  user.push({name, fullname, email, username, password });
  response.send("Create User Success");
});


webServer.listen(port, ipAddress, () => {
  console.log(`Web Application Server is running on ${ipAddress} port ${port}`);
  console.log(`Address: http://${ipAddress}:${port}`);
});
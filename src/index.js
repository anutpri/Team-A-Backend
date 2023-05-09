import express from "express";
import cors from "cors";

const webServer = express();
webServer.use(cors());
webServer.use(express.json());

const ipAddress = "127.0.0.1";
const port = 3000;

const user = [];

webServer.get("/", (request, response) => {
  response.send("This is main");
});

webServer.get("/user", (request, response) => {
  response.json(user);
});

webServer.post("/insert", (request, response) => {

  const name = request.body.name;
  const email = request.body.name;
  const username = request.body.name;
  const password = request.body.name;
  
  
  user.push({name, email, username, password });
  response.send("Create User Success");
});


webServer.listen(port, ipAddress, () => {
  console.log(`Web Application Server is running on ${ipAddress} port ${port}`);
  console.log(`Address: http://${ipAddress}:${port}`);
});
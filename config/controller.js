import express from "express";
import cors from "cors";
import { getUser } from "../task/user.task";

const taskRouter = express();
taskRouter.use(cors());
taskRouter.use(express.json());



taskRouter.get("/user", async (request, response) => {
  try {
  const data = await getUser();
  return response.json(data);

  } catch (err) {
  console.error(err);
    }
});

// taskRouter.post("/newuser", (request, response) => {

//   const name = request.body.name;
//   const fullname = request.body.fullname;
//   const email = request.body.email;
//   const username = request.body.username;
//   const password = request.body.password;
  
//   user.push({name, fullname, email, username, password });
//   response.send("Create User Success");
// });

export default taskRouter;
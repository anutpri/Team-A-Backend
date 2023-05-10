import express from "express";
import route from "../config/router.controller.js";
import connectServer from "../config/server.js";
import connectDB  from "../config/database.js";

await connectDB();
await connectServer();

const app = express();
app.use(express.json());


app.use("/user", route);




export default app;
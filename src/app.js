import express from "express";
import bodyParser from "body-parser";
import route from "../config/router.controller.js";
import connectServer from "../config/server.js";
import { connectDB } from "../config/database.js";

await connectDB();
await connectServer();

const app = express();
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use("/user", route);

// app.use((req,res) => {
//     return res.status(404).json({ message : 'Invalid'});
// })


export default app;
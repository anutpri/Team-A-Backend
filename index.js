import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import userRouter from "./src/routers/users.js";
import activityRouter from "./src/routers/activities.js";
import cors from "cors";

const port = process.env.PORT;
const ipAddress = process.env.DATABASE_IP;
const user = process.env.DATABASE_USER;
const pass = process.env.DATABASE_PASS;
const dbName = process.env.DATABASE_NAME;
const app = express();
app.use(cors());

// Middlewares
app.use(express.json());

app.use("/activities", activityRouter);
app.use("/users", userRouter);

const start = async () => {
  try {
  // DO NOT COMMIT/PUSH USERNAME AND PASSWORD TO Github
  await mongoose.connect(`mongodb+srv://${user}:${pass}@cluster0.erdzem4.mongodb.net/${dbName}?retryWrites=true&w=majority`);

  app.listen(port,  () => {
      console.log(`Web Application Server is running on ${ipAddress} port ${port}`);
      console.log(`Address: http://${ipAddress}:${port}`);
      });

    } catch (error) {
      console.error("Error connecting to the database or starting the server:", error);
    }
};

start();

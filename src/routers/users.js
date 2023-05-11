import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import UserModel from "../models/user.js";

const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  const users = await UserModel.find();
  res.send(users.map((act) => act.toJSON()));
});

userRouter.get("/:userId", async (req, res) => {
  console.log(req.params);
  const user = await UserModel.findById(req.params.userId);
  if (!user) {
    res.status(404).end();
  }
  res.json(user.toJSON());
});

userRouter.post("/", async (req, res) => {
  const user = new UserModel(req.body);
  const validateResult = user.validateSync();
  if (validateResult) {
    return res.status(400).send(validateResult);
  }
  await user.save();
  return res.send(user.toJSON());
});

export default userRouter;
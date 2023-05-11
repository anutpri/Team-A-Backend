import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import activityModel from "../models/activity.js";


const activityRouter = express.Router();

activityRouter.get("/", async (req, res) => {
  const activities = await activityModel.find();
  res.send(activities.map((act) => act.toJSON()));
});

activityRouter.get("/:activityId", async (req, res) => {
  console.log(req.params);
  const activity = await activityModel.findById(req.params.activityId);
  if (!activity) {
    res.status(404).end();
  }
  res.json(activity.toJSON());
});

activityRouter.post("/", async (req, res) => {
  const activity = new activityModel(req.body);
  const validateResult = activity.validateSync();
  if (validateResult) {
    return res.status(400).send(validateResult);
  }
  await activity.save();
  return res.send(activity.toJSON());
});

activityRouter.patch("/:activityId", (req, res) => {
  res.send("update");
});

activityRouter.delete("/:activityId", (req, res) => {
  res.send("delete");
});

export default activityRouter;

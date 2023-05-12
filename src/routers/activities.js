import express from "express";
import activityModel from "../models/activity.js";


const activityRouter = express.Router();

activityRouter.get("/", async (req, res) => {
  try {
    const activities = await activityModel.find();
    res.send(activities.map((act) => act.toJSON()));
  } catch (error) {
    console.error("Error retrieving activities:", error);
    res.status(500).send("Internal Server Error");
  }
});

activityRouter.get("/:activityId", async (req, res) => {
  try {
    console.log(req.params);
    const activity = await activityModel.findById(req.params.activityId);
    if (!activity) {
      return res.status(404).end();
    }
    res.json(activity.toJSON());
  } catch (error) {
    console.error("Error retrieving activity:", error);
    res.status(500).send("Internal Server Error");
  }
});

activityRouter.post("/", async (req, res) => {
  try {
    const activity = new activityModel(req.body);
    const validateResult = activity.validateSync();
    if (validateResult) {
      return res.status(400).send(validateResult);
    }
    await activity.save();
    return res.send(activity.toJSON());
  } catch (error) {
    console.error("Error creating activity:", error);
    res.status(500).send("Internal Server Error");
  }
});

activityRouter.patch("/:activityId", async (req, res) => {
  try {
    // set update logic soon
    res.send("update");
  } catch (error) {
    console.error("Error updating activity:", error);
    res.status(500).send("Internal Server Error");
  }
});

activityRouter.delete("/:activityId", async (req, res) => {
  try {
    // set delete logic soon
    res.send("delete");
  } catch (error) {
    console.error("Error deleting activity:", error);
    res.status(500).send("Internal Server Error");
  }
});

export default activityRouter;

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

activityRouter.get("/username/:username", async (req, res) => {
  try {
    const username = req.params.username;
    const activities = await activityModel.find({ username });
    
    if (activities.length === 0) {
      return res.status(404).json({ message: "No activities found for the provided username" });
    }
    
    res.json(activities);
  } catch (error) {
    console.error("Error retrieving activities:", error);
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
    const { activityId } = req.params;
    const { activity_name, 
            description,
            username,
            activity_type,
            distance,
            duration_time,
            start_date_time,
            finish_date_time,
            fullname
          } = req.body;
    
    
    const updatedActivity = await activityModel.findOneAndUpdate(
      { _id: activityId },
      { activity_name, 
        description,
        username,
        activity_type,
        distance,
        duration_time,
        start_date_time,
        finish_date_time,
        fullname
      },
      
      { new: true }
    );

    if (!updatedActivity) {
      return res.status(404).send("Activity not found");
    }

    return res.send(updatedActivity.toJSON());
  } catch (error) {
    console.error("Error updating activity:", error);
    res.status(500).send("Internal Server Error");
  }
});

activityRouter.delete("/:activityId", async (req, res) => {
  try {
    const { activityId } = req.params;
    
    const deletedActivity = await activityModel.findOneAndDelete({ _id: activityId });

    if (!deletedActivity) {
      return res.status(404).send("Activity not found");
    }

    return res.send(deletedActivity.toJSON());
  } catch (error) {
    console.error("Error deleting activity:", error);
    res.status(500).send("Internal Server Error");
  }
});

export default activityRouter;

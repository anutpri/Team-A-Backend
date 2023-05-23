import express from "express";
import UserModel from "../models/user.js";

const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.send(users.map((act) => act.toJSON()));
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).send("Internal Server Error");
  }
});


userRouter.get("/:userId", async (req, res) => {
  try {
    console.log(req.params);
    const user = await UserModel.findById(req.params.userId);
    if (!user) {
      return res.status(404).end();
    }
    res.json(user.toJSON());
  } catch (error) {
    console.error("Error retrieving user:", error);
    res.status(500).send("Internal Server Error");
  }
});

userRouter.get("/username/:username", async (req, res) => {
  try {
    console.log(req.params);
    const userName = await UserModel.findOne({ username: req.params.username });
    if (!userName) {
      return res.status(404).end();
    }
    res.json(userName.toJSON());
  } catch (error) {
    console.error("Error retrieving user:", error);
    res.status(500).send("Internal Server Error");
  }
});

userRouter.get("/email/:email", async (req, res) => {
  try {
    console.log(req.params);
    const userEmail = await UserModel.findOne({ email: req.params.email });
    if (!userEmail) {
      return res.status(404).end();
    }
    res.json(userEmail.toJSON());
  } catch (error) {
    console.error("Error retrieving user:", error);
    res.status(500).send("Internal Server Error");
  }
});

userRouter.post("/", async (req, res) => {
  try {
    const user = new UserModel(req.body);
    const validateResult = user.validateSync();
    if (validateResult) {
      return res.status(400).send(validateResult);
    }

    await user.save();
    return res.send(user.toJSON());
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("Internal Server Error");
  }
});

userRouter.patch("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const { 
            email,
            username,
            password,
            birthdate,
            weight,
            height,
          } = req.body;
    
    
    const updatedUser = await UserModel.findOneAndUpdate(
      { _id: userId },
      { 
        email,
        username,
        password,
        birthdate,
        weight,
        height,
      },
      
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).send("User not found");
    }
    return res.send(updatedUser.toJSON());
  } catch (error) {
    console.error("Error updating User:", error);
    res.status(500).send("Internal Server Error");
  }
});

export default userRouter;
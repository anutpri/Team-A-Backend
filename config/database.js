
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: './api.env' });

const uri = process.env.MongoDB;

async function connectDB() {
  try {
    // Connect to server
    await mongoose.connect(uri);
    console.log("Successfully connected to MongoDB!");
    
  } catch (err) {
    console.error(err);
  }

}

export {connectDB};

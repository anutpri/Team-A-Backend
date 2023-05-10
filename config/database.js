import mongoose from 'mongoose';
import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config({ path: './api.env' });

const uri = process.env.MongoDB;
const dbName = 'FitbookDB';

async function connectDB() {
  try {
    await mongoose.connect(uri, {
      dbName: dbName,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    console.log("Successfully connected to MongoDB!");

    // Call other functions or perform additional operations
    await checkDatabase();
    await listCollections();

  } catch (err) {
    console.error(err);
  }
}

function checkDatabase() {
  const dbName = mongoose.connection.name;
  console.log("Connected to database:", dbName);
}


async function listCollections() {
  try {
    // Get the list of collection names in the current database
    const collections = await mongoose.connection.db.collections();

    // Extract the collection names from the collections array
    const collectionNames = collections.map((collection) => collection.collectionName);

    console.log("Collections in the database:", collectionNames);
  } catch (err) {
    console.error(err);
  }
}



export default connectDB;
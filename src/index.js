import mongoose from "mongoose";
import express from "express";
const app = express();

// Connect to MongoDB
(async () => {
  try {
    mongoose.connect(`${process.env.MONGODB_URL}/youtube`);
    app.on("error", (error) => {
      console.log("Error connecting", error);
      throw error;
    });
    app.listen(`${process.env.PORT}`, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("error connecting to MongoDB", error);
    throw error;
  }
})();

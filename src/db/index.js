import mongoose from "mongoose";

// Connect to MongoDB
const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/youtube`
    );
    console.log(
      "Connected to MongoDB: host",
      connectionInstance.connection.host
    );
  } catch (error) {
    console.log("error connecting to MongoDB", error);
  }
};

export default connectDb;

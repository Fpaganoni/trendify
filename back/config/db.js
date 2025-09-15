import mongoose from "mongoose";

// DB coonfig.

const connectDB = async () => {
  try {
    const conect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to MongoDB: ${conect.connection.host}`);
  } catch (err) {
    console.log(`Error to connect DB: ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

// config.
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// DB coonfig.
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("Error to connect DB", err);
  });

// Middlewares.

app.use(cors()); // To allow requests from the frontend
app.use(express.json()); // To process JSON in requests

// routes
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

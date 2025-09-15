import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import productRoutes from "./routes/productRoutes.js";
import connectDB from "./config/db.js";

// config.
dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares.
app.use(cors()); // To allow requests from the frontend
app.use(express.json()); // To process JSON in requests

// routes
app.use("/api/products", productRoutes);

// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

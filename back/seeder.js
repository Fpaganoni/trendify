import mongoose from "mongoose";
import dotenv from "dotenv";
import products from "./data/products.js";
import Product from "./models/productModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany(); // Limpia los productos existentes
    await Product.insertMany(products); // Inserta los nuevos productos

    console.log("Datos importados con éxito.");
    process.exit();
  } catch (error) {
    console.error("Error al importar datos:", error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Product.deleteMany();

    console.log("Datos destruidos con éxito.");
    process.exit();
  } catch (error) {
    console.error("Error al destruir datos:", error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}

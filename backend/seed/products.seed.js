import mongoose from "mongoose";
import Product from "../models/product.model.js";
import dotenv from "dotenv";

dotenv.config();

const products = [
  {
    name: "Fresh Apples",
    category: "Fruits",
    price: 120,
    offerPrice: 99,
    image: ["apple.jpg"],
    inStock: true,
    rating: 4
  },
  {
    name: "Organic Milk",
    category: "Dairy",
    price: 60,
    offerPrice: 50,
    image: ["milk.jpg"],
    inStock: true,
    rating: 5
  },
  {
    name: "Brown Bread",
    category: "Bakery",
    price: 40,
    offerPrice: 35,
    image: ["bread.jpg"],
    inStock: true,
    rating: 4
  }
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("Products seeded successfully");
    process.exit();
  } catch (err) {
    console.error("Seeding failed", err);
    process.exit(1);
  }
};

seedProducts();

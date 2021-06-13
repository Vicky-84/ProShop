import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

app.listen(
  port,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${port}`)
);

app.get("/", (req, res) => {
  res.send("API is running......");
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

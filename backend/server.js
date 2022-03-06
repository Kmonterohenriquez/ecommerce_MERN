const express = require("express");
const products = require("./data/products");

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((product) => product._id === req.params.id);
  if (product === undefined) {
    return res.send("<h1>Product not Found.</h1>");
  }
  return res.json(product);
});

app.listen(PORT, console.log(`Server running on port ${PORT}`));

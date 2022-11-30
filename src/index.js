//imports
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//connecting to database
const connect = async () => {
  return mongoose.connect(process.env.DB_URl);
};

//use
app.use(express.json());
app.use(cors());

//routes imports
const productRoutes = require("./features/Products/productRoute");
const userRoutes = require("./features/Users/userRoute");
const orderRoutes = require("./features/Orders/orderRoute");
const cartRoutes = require("./features/Carts/cartRoute");

//routes
app.use("/product", productRoutes);
app.use("/user", userRoutes);
app.use("/order", orderRoutes);
app.use("/cart", cartRoutes);

//listening
app.listen(process.env.PORT, async () => {
  await connect();
  console.log(`listening on http://localhost:${process.env.PORT}`);
});

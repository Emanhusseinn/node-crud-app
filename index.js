import express from "express";
import mongoose from "mongoose";
import Product from "./models/product.model.js";
import productRoute from "./routes/product.route.js";
const app = express();


//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//routes
app.use("/api/products", productRoute);



app.get("/", (req, res) => {
  res.send("hello from node api");
});

mongoose
  .connect(
    "mongodb+srv://emanhusseinjo:loxnrBPbj7cJiyZw@backenddb.lf6ijjx.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
  });
})
  .catch(() => console.log("Connection failed!!"));

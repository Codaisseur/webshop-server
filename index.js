const express = require("express");
const app = express();
const PORT = 4000;
const orderRouter = require("./routers/order");
const productRouter = require("./routers/product");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/orders", orderRouter);
app.use("/products", productRouter);

app.listen(PORT, () => console.log("server up and listening"));

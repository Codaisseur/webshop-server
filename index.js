const express = require("express");
const app = express();
const PORT = 4000;
const orderRouter = require("./routers/order");

app.use(express.json());

app.use("/orders", orderRouter);

app.listen(PORT, () => console.log("server up and listening"));

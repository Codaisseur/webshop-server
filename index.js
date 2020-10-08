const express = require("express");
const app = express();
const PORT = 4000;
const orderRouter = require("./routers/order");
const productRouter = require("./routers/product");
const cors = require("cors");

// graphQL imports
const { ApolloServer } = require("apollo-server-express");

const { typeDefs } = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");
const db = require("./models");

app.use(cors());
app.use(express.json());

app.use("/orders", orderRouter);
app.use("/products", productRouter);

const server = new ApolloServer({
  typeDefs, // schema
  resolvers,
  context: ({ req }) => ({ req, db }),
});

server.applyMiddleware({ app });

app.listen(PORT, () => console.log("server up and listening"));

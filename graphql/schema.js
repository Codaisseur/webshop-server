const { gql } = require("apollo-server-express");

// In the schema we define/declare 3 things:
// Types
// Declare queries
// Declare mutations

const typeDefs = gql`
  type User {
    id: ID!
    fullName: String
    email: String!
    password: String
    address: String
  }

  type Product {
    id: ID!
    name: String
    imageUrl: String
    category: Category!
  }

  type Category {
    id: ID!
    name: String!
    products: [Product]
  }

  type Order {
    id: ID!
    user: User!
    products: [Product]
  }

  type Login {
    token: String!
  }

  type Query {
    products: [Product]
    categories: [Category!]
    orders: [Order]
    users: [User]
  }

  type Mutation {
    signup(fullName: String!, email: String!, password: String!): User!
    login(email: String!, password: String!): Login!
    order(productIds: [Int!]!, userId: Int!): Order!
  }
`;

module.exports = { typeDefs };

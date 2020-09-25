"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("products", [
      {
        name: "Skinny",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/51uQP2RnOpL._SX313_BO1,204,203,200_.jpg",
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Relaxed",
        imageUrl: "https://media.s-bol.com/YkZNzLv2KPW/823x1200.jpg",
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Regular",
        imageUrl: "https://media.s-bol.com/xOgq196O1or/547x840.jpg",
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Joggers",
        imageUrl: "https://media.s-bol.com/xOgq196O1or/547x840.jpg",
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cargo trousers",
        imageUrl:
          "https://cdn.waterstones.com/bookjackets/large/9781/5098/9781509848515.jpg",
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Chinos",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/511zpwfEm1L._SX326_BO1,204,203,200_.jpg",
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Basic",
        imageUrl:
          "https://i.pinimg.com/originals/f3/48/bd/f348bd3949807e924291eddf033f1a24.jpg",
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Print",
        imageUrl:
          "https://cdn.waterstones.com/bookjackets/large/9781/5098/9781509848515.jpg",
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Long sleeves",
        imageUrl: "https://media.s-bol.com/YkZNzLv2KPW/823x1200.jpg",
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Short sleeves",
        imageUrl: "https://media.s-bol.com/xOgq196O1or/547x840.jpg",
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Denim jacket",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/511zpwfEm1L._SX326_BO1,204,203,200_.jpg",
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bomber jacket",
        imageUrl: "https://media.s-bol.com/xOgq196O1or/547x840.jpg",
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Parka",
        imageUrl:
          "https://i.pinimg.com/originals/f3/48/bd/f348bd3949807e924291eddf033f1a24.jpg",
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Trainers",
        imageUrl:
          "https://i.pinimg.com/originals/f3/48/bd/f348bd3949807e924291eddf033f1a24.jpg",
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sneakers",
        imageUrl:
          "https://cdn.waterstones.com/bookjackets/large/9781/5098/9781509848515.jpg",
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Boots",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/511zpwfEm1L._SX326_BO1,204,203,200_.jpg",
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("products", null, {});
  },
};

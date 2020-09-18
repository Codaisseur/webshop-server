"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("products", [
      {
        name: "Skinny",
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Relaxed",
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Regular",
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Joggers",
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cargo trousers",
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Chinos",
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Basic",
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Print",
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Long sleeves",
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Short sleeves",
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Denim jacket",
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bomber jacket",
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Parka",
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Trainers",
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sneakers",
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Boots",
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

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("products", [
      {
        name: "Skinny",
        categoryId: 1,
        price: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Relaxed",
        categoryId: 1,
        price: 55,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Regular",
        categoryId: 1,
        price: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Joggers",
        categoryId: 2,
        price: 76,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cargo trousers",
        categoryId: 2,
        price: 66,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Chinos",
        categoryId: 2,
        price: 77,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Basic",
        categoryId: 3,
        price: 56,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Print",
        categoryId: 3,
        price: 75,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Long sleeves",
        categoryId: 4,
        price: 54,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Short sleeves",
        categoryId: 4,
        price: 67,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Denim jacket",
        categoryId: 5,
        price: 56,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bomber jacket",
        categoryId: 5,
        price: 87,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Parka",
        categoryId: 5,
        price: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Trainers",
        categoryId: 6,
        price: 44,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sneakers",
        categoryId: 6,
        price: 65,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Boots",
        categoryId: 6,
        price: 77,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("products", null, {});
  },
};

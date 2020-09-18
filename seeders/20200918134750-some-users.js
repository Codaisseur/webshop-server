"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("users", [
      {
        fullName: "Mordecai Blue Jay",
        email: "regular@show.com",
        password: "MarGareT",
        address: "Pops' House, Massachus",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Avatar Aang",
        email: "air@bender.com",
        password: "moMOandAppA",
        address: "Western Air Temple",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Bob Belcher",
        email: "bobs@burgers.com",
        password: "sleepFartnea",
        address: "Ocean City, New Jersey",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("users", null, {});
  },
};

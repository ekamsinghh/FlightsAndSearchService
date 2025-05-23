'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airplanes', [{
      modelNumber: 'Boeing 737',
      capacity: 300,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

    await queryInterface.bulkInsert('Airplanes', [{
      modelNumber: 'Airbus A320',
      capacity: 425,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

    await queryInterface.bulkInsert('Airplanes', [{
      modelNumber: 'Boeing 777',
      capacity: 500,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

    await queryInterface.bulkInsert('Airplanes', [{
      modelNumber: 'Airbus A350',
      capacity: 450,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

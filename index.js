// randomUtils.js
const faker = require('faker');
const Chance = require('chance');

const generateRandomName = () => {
  return faker.name.findName();
};

const generateRandomEmail = () => {
  return faker.internet.email();
};

const generateRandomPhoneNumber = () => {
  const chance = new Chance();
  return chance.phone();
};

module.exports = {
  generateRandomName,
  generateRandomEmail,
  generateRandomPhoneNumber,
};
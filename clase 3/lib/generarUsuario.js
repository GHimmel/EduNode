const uuid = require("uuid");
const faker = require("faker");

function crearObjetosFake() {
  return {
    id: uuid.v4(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    city: faker.address.city(),
    streetName: faker.address.streetName(),
    country: faker.address.country(),
    accountName: faker.finance.accountName(),
    account: faker.finance.account(),
    amount: faker.finance.amount(),
  };
}

module.exports = crearObjetosFake;

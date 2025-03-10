import { faker } from "@faker-js/faker"

export const userTestData = () => {
  return {
    username: faker.person.firstName() + faker.string.alpha(5) + faker.number.int({ max: 10000 }),
    password: faker.internet.password() + faker.number.int({ max: 10 }),
    incorrectPassword: faker.internet.password(),
    firstname: faker.person.firstName(),
    middlename: faker.person.middleName(),
    lastname: faker.person.lastName(),
    id: faker.number.int({ min: 100000, max: 9999999 }),
    adminUsername: 'Admin',
    adminPassword: 'admin123',
  }
}
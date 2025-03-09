import { faker } from "@faker-js/faker"

export const userTestData = () => {
  return {
    name: faker.animal.petName(),
    email: faker.internet.email(),
    username: faker.person.firstName() + faker.string.alpha(5),
    password: faker.internet.password(),
    incorrectPassword: faker.internet.password(),
    firstname: faker.person.firstName(),
    middlename: faker.person.middleName(),
    lastname: faker.person.lastName(),
    adminUsername: 'Admin',
    adminPassword: 'admin123',
  }
}
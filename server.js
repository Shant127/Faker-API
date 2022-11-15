const express = require("express");
const { faker } = require('@faker-js/faker')

//var faker = require('faker');   

// var random_id = faker.datatype.uuid();
// var firstName = faker.name.firstName();
// var lastName = faker.name.lastName();
// var phoneNumber = faker.phone.phoneNumber();
// var email = faker.internet.email();
// var password = faker.internet.password();

// var randomId = faker.datatype.uuid();
// var randomName = faker.name.findName();
// var randomAddress = faker.address.streetAddress();
// var randomCity = faker.address.city();  
// var randomState = faker.address.state();
// var randomZipCode = faker.address.zipCode();
// var randomCountry = faker.address.country();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

class User {
    constructor() {
        this.id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.number();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
console.log(new User());

class Company {
    constructor() {
        this.id = faker.datatype.uuid();
        this.name = faker.company.name()
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        }

    }
}
console.log(new Company());

app.get("/api/users/new", (request, response) => {
    const user = new User();
    response.json(user)
});

app.get("/api/companies/new", (request, response) => {
    const company = new Company();
    response.json(company)
});

app.get("/api/user/company", (request, response) => {
    console.log(request.url);
    console.log(request.body);
    console.log(new Company(), new User());

    response.json([
        {
            id: random_id,
            firstName: firstName,
            lastName: lastName,
            phone: phoneNumber,
            email: email,
            password: password,
            id: randomId,
            name: randomName,
            address: randomAddress,
            city: randomCity,
            state: randomState,
            zipCode: randomZipCode,
            country: randomCountry
        },
    ])
});

app.listen(8000, () => {
    console.log("You have successfully connected on port 8000.");
});
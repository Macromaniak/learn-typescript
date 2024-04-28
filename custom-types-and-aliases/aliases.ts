type names = string;

enum statuses {
    "a" = 'active',
    "i" = 'inactive',
    "n" = 'new'
};

enum roles {
    "Admin",
    "Editor",
    "Reader"
}

interface User extends Address {
    name: names,
    email: names,
    age?: number, // age is an optional field
    dateOfBirth: Date,
    status: statuses
    role: roles
}

interface Address {
    addressLine1: names,
    addressLine2: names,
    post: number,
    state: names,
    country?: names // country is an optional field
}

const createUser = (username, includeAddressCountry = false) => {
    let user: User ={
        name: username,
        age: 30,
        // dateOfBirth: '12/2/1223',
        email: `${username}@testmail.com`,
        dateOfBirth: new Date(),
        addressLine1: 'ABC Street',
        addressLine2: 'Civil lane road',
        post: 123,
        state: "XYZ",
        status: statuses.a,
        role: roles.Editor
    }
    if(includeAddressCountry)
        user.country = "India";
}

const createAddress = () => {
    return {
        addressLine1: 'ABC Street',
        addressLine2: 'Civil lane road',
        post: 123,
        state: "XYZ",
        country: "India"
    }
}

const userWithAddress = createUser('Anandhu', true);
const userWithoutAddress = createUser('AnandhuNadesh');

console.log(userWithAddress);
console.log(userWithoutAddress);
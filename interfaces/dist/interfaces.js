const createUser = (username, includeAddressCountry = false) => {
    let user = {
        name: username,
        age: 30,
        // dateOfBirth: '12/2/1223',
        email: `${username}@testmail.com`,
        dateOfBirth: new Date(),
        addressLine1: 'ABC Street',
        addressLine2: 'Civil lane road',
        post: 123,
        state: "XYZ",
    };
    if (includeAddressCountry)
        user.country = "India";
};
const createAddress = () => {
    return {
        addressLine1: 'ABC Street',
        addressLine2: 'Civil lane road',
        post: 123,
        state: "XYZ",
        country: "India"
    };
};
const userWithAddress = createUser('Anandhu', true);
const userWithoutAddress = createUser('AnandhuNadesh');
console.log(userWithAddress);
console.log(userWithoutAddress);

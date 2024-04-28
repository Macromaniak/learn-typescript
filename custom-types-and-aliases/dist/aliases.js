var statuses;
(function (statuses) {
    statuses["a"] = "active";
    statuses["i"] = "inactive";
    statuses["n"] = "new";
})(statuses || (statuses = {}));
;
var roles;
(function (roles) {
    roles[roles["Admin"] = 0] = "Admin";
    roles[roles["Editor"] = 1] = "Editor";
    roles[roles["Reader"] = 2] = "Reader";
})(roles || (roles = {}));
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
        status: statuses.a,
        role: roles.Editor
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

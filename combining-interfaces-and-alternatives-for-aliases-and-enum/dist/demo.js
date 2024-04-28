const createNewContact = (province, region, postalCode) => {
    let newContact = {
        id: 1,
        name: 'Anandhu',
        line1: 'line1',
        line2: 'line2',
        birthDate: new Date(),
        status: 'new',
        province,
        region,
        postalCode,
    };
    return newContact;
};
console.log(createNewContact('province', 'region', 'AX12R'));
function getBirthDate(contact) {
    if (typeof contact.birthDate === "number") {
        return new Date(contact.birthDate);
    }
    else if (typeof contact.birthDate === "string") {
        return Date.parse(contact.birthDate);
    }
    else {
        return contact.birthDate;
    }
}
let primaryContact = {
    id: 12345,
    name: "Jamie Johnson",
    status: 'active',
    birthDate: '11/12/1223'
};

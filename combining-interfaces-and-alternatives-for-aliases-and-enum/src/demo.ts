type ContactName = string;

// enum ContactStatus {
//     Active = "active",
//     Inactive = "inactive",
//     New = "new"
// }

//alternative to enum
type ContactStatus = "active" | "inactive" | "new";

//combining multiple types into an alias
type contactDoB = string | Date | number;

interface Contact {
    id: number;
    name: ContactName;
    birthDate?: contactDoB; // birthDate can now accept string, Date and number values
    status?: ContactStatus; // status now will only accept "active" | "inactive" | "new" values
}

interface Address {
    line1: string;
    line2: string;
    province: string;
    region: string;
    postalCode: string;
}

//combining address and contact interfaces

// interface contactWithAddress extends Contact, Address {

// }

// Alternatively

type contactWithAddress = Contact & Address;

const createNewContact = (province, region, postalCode) => {
let newContact: contactWithAddress = {
    id: 1,
    name: 'Anandhu',
    line1: 'line1',
    line2: 'line2',
    birthDate: new Date(),
    status: 'new',
    province,
    region,
    postalCode,
}
return newContact;
}

console.log(createNewContact('province', 'region', 'AX12R'));

function getBirthDate(contact: Contact) {
    if (typeof contact.birthDate === "number") {
        return new Date(contact.birthDate);
    }
    else if (typeof contact.birthDate === "string") {
        return Date.parse(contact.birthDate)
    }
    else {
        return contact.birthDate
    }
}

let primaryContact: Contact = {
    id: 12345,
    name: "Jamie Johnson",
    status: 'active',
    birthDate: '11/12/1223'
}

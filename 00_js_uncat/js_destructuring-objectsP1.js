const customer = {
    name: "Chris",
    age: 35,
    email: "cym198@gmail.com",
    job: "management",
    address: {
        city: "Riverside",
        state: "California"
    }
};

// console.log(customer.name) // logs Chris
// console.log(customer.address.state) // logs California

const { name, address: { city, state } } = customer;
// console.log(`${name} is handsome`); // logs Chris
console.log(`His lives in ${city} ${state}`); // logs Riverside California
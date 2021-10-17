const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

const findTheOldest = function(people) {
    for (let i = 0; i < people.length; i++) {
        people[i].age = people[i].yearOfDeath - people[i].yearOfBirth
        }
    
    const result = people.sort((a,b) => b.age - a.age).forEach((e) => {console.log(`${e.name}`)})
};

// Do not edit below this line
module.exports = findTheOldest;

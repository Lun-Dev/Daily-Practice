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
  for (let i = 0; i < people.length; i++) { //loop over each object in people array
    const d = new Date(); //no death-date so make a variable
    if (people[i].yearOfDeath && people[i].yearOfBirth) { // if object contains yod and yob
      people[i].age = people[i].yearOfDeath - people[i].yearOfBirth // new element "age"
    } else { // otherwise
      people[i].age = d.getFullYear() - people[i].yearOfBirth // new element "age" but get current year to minus yob
    }
  }
  const result3 = people.reduce((acc,val) => { // reduce method
                      if (val.age > acc.age) {  // if current object element's age is greater than accumulation object element's age
                      acc = val } // accumulation object element's age will be current object element's age
                      return acc }) // return the accumulation object
  return result3
};

// Do not edit below this line
module.exports = findTheOldest;


// Additional code made while learning:
// This added up all age (0 is the inital value)
// const result = people.reduce((acc,val) => { return acc + val.age }, 0)

// This minus'ed all age (0 is the inital value)
// const result2 = people.reduce((acc,val) => { return acc - val.age }, 0)
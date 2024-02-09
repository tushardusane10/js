"use strict";
const person = {
  firstName: "Tushar",
  lastName: "Dusnae",
  dob: new Date(1988),
  hobbies: ["basketball", "cricket"],
  getPersonDetails: function () {
    return `firstName = ${this.firstName}, lastname = ${this.lastName}, dob = ${this.dob}, hobbies = ${this.hobbies}, married = ${this.married}`;
  },
};

console.log(person);

console.log(person.firstName); // Dot operator

//bracket operator useage
const naam = "Name";
console.log(person["first" + naam]);

console.log(person["firstName"]); // bracket operator operator
person.married = true;
console.log(person.getPersonDetails());

/*
Dot operator is used we have to access the member variable. Line no 12 is an example
bracket operator needs to be used when we have some expression to be evaluated
line 18 is an example
*/

console.log(`looping over object's key`);
for (const key of Object.keys(person)) {
  console.log(key);
}

console.log(`looping over object's values`);
for (const values of Object.values(person)) {
  console.log(values);
}

console.log(`looping over object's enteries`);
for (let [key, { value }] of Object.entries(person)) {
  console.log(`Key = ${key} with value = ${value}`);
}

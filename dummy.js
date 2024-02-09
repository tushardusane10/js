"use strict";
const person = {
  firstName: "Tushar",
  lastName: "Dusane",
  workingDays: ["Mon", "Tues", "", "Thus", "Fri"],
  workingDaysNumeric: [1, 2, 3, 4, 5],

  dispalyPerson: function () {
    return `Greeting ${this.firstName} ${this.lastName}`;
  },
};

const address = {
  addressLine1: "Dummy Line 1",
  addressLine2: "Dummy Line 2",
  addressLine3: "Dummy Line 3",
  dispalyPersonDetails: function (person) {
    console.log(`Hello Dear firend My name is ${person.firstName} ${person.lastName} 
    and my address is ${this.addressLine1} ${this.addressLine2} ${this.addressLine3}`);
  },
};

person.add = function add(a, b) {
  return a, b;
};

console.log(person.dispalyPerson(), person.add(10, 20));

// Object Destructing
const {
  firstName: fname = "Dummy",
  lastName: lname = "Dummy",
  test: test1 = "Dummy", // assigning default value to a non existing peoperty
} = person;

//console.log(fname, lname, test1);
//Array Destructing
const [mon, , wed] = person.workingDays;

console.log(`Monday is ${mon ? mon : "Not working on Monday"}`);

console.log(`Wednesday is ${wed ? wed : "Not working on Wednesday"}`);

const [mon1, tue, , ...restdays1] = person.workingDays;
console.log(`mon = ${mon} tue = ${tue} restdays = ${restdays1}`);

const temp = [...person.workingDays, ...person.workingDaysNumeric];

console.log(temp);

console.log(
  `Result for  OR short circuiting ${undefined}||${null}|| ${false}|| ${0} || ${""}`
);

console.log(`Nullish coalescing example ${undefined ?? " Dummy"}`);
console.log(`Nullish coalescing example ${null ?? " Dummy"}`);
console.log(`Nullish coalescing example ${false ?? " Dummy"}`);
console.log(`Nullish coalescing example ${0 ?? "0 Dummy"}`);
console.log(`Nullish coalescing example ${"" ?? " Empty Dummy"}`);
let num = 10;
console.log(`Nullish coalescing example ${num ?? "NaN"}`);

console.log(`Or(||) equal operator ${(num ||= 20)}`);

for (let { index, value } of person.workingDays) {
  console.log(`Received index is ${index} `);
}

console.log(`Result of  '\${undefined && 10}\' ${undefined || 10}`);

address.dispalyPersonDetails(person);

console.log(`--------------OR-------------------start`);

let x = "123";

console.log(`Use of ternary operator for a truthy value ${x ? x : 5}`);
console.log(`Use of OR short Circuit operator or a truthy value ${x || 5}`);

x = "";

console.log(`Use of ternary operator for a falsey value ${x ? x : 5}`);
console.log(`Use of OR short Circuit operator or a falsey value ${x || 5}`);

console.log(`--------------OR------------------- end`);

// Note 0, false, null undefim=ned and '' are false values for ternary, OR and AND operator

console.log(`--------------Nullish Coalescing-------------------start`);

console.log(
  `Use of Nullish coalescing for a x = ${x} result ${"X s empty string" ?? 5}`
);

x = null;
console.log(
  `Use of Nullish coalescing for a x = ${x} result ${x ?? "x is null"}`
);

x = undefined;
console.log(
  `Use of Nullish coalescing for a x = ${x} result ${x ?? "x is undefined"}`
);

x = false;
console.log(`Use of Nullish coalescing for a x = ${x} result ${x ?? 5}`);

x = "0";
console.log(`Use of Nullish coalescing for a x = ${x} result ${x ?? 5}`);

console.log(`--------------Nullish Coalescing-------------------start`);
// Note: For nullish coalescing null and undefined is falsey values

console.log(`-------------Optional chnaing-------------------start`);

const person = {
  firstName: "Tushar",
  lastName: "Dusnae",
  dob: new Date(1988),
  hobbies: ["basketball", "cricket"],
  addresses: {
    permanentAddress: "Malegaon",
    currentAddress: "Ravet Pune",
    officeAddress: "Kalyani Nagar",
  },
  getPersonDetails: function () {
    return `firstName = ${this.firstName}, lastname = ${this.lastName}, dob = ${this.dob}, hobbies = ${this.hobbies}, married = ${this.married}`;
  },
};
console.log(person.addresses?.officeAddress);
console.log(person.addresses?.temp);

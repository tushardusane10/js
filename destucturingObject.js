const person = {
  firstName: "Tushar",
  lastName: "Dusane",
  age: 35,
  marritalStatus: "Married",
  familyMembers: ["Mother", "Brother", "Wife", "Son"],

  displayDetails: function ({ firstName, lastName, age }) {
    console.log(
      `Passed object details are \n ${this.firstName}, \n ${this.lastName} \n ${this.age}`
    );
  },
};

const { firstName, lastName, familyMembers } = person; // use only property name else give error
console.log(firstName, lastName, familyMembers); // // Tushar Dusane ["Mother", "Brother", "Wife", "Son"]

// if want to use any other name while object destructuting we need below syntax
const { firstName: fname, lastName: lname, familyMembers: fmember } = person;
console.log(fname, lname, fmember); // Tushar Dusane ["Mother", "Brother", "Wife", "Son"]

//skipping lastname property while destructuring object
const { firstName: fname3, familyMembers: fmember3 } = person;
console.log(fname3, fmember3); // Tushar  ["Mother", "Brother", "Wife", "Son"]

// Default value to a variable using object destucturing
// Here we give a different name to the object propert and assign a default value in case that propery is not fount in the object
const {
  firstName: fname1 = "Demo",
  lastName: lname1 = "Demo",
  familyMembers: fmember1 = [],
  dummy = null,
} = person;
console.log(fname1, lname1, fmember1, dummy);
// Tushar Dusane ["Mother", "Brother", "Wife", "Son"], null

// we are calling calling object(person function with an object,
// which would be deconstructed by function in the parameter and dispaly the dtails
person.displayDetails({
  fname: "Dummy",
  lname: "Dummy",
  lage: 20,
});

"use strict";

const array = ["a", "b", "c"];
console.log(array); //display array
console.log(array.length); // dispaly  array lenght

console.log(array[0]); //Display 0'th element

array.shift(); // remove first element of array
console.log(array); //display array

array.unshift("a"); // add element to the begining  of array
console.log(array); //display arra

array.push("d"); // add element to the end  of array
console.log(array); //display arra

array.pop(); // remove element to the end  of array
console.log(array); //display arra

const indexofC = array.indexOf("c"); // get indec of c
console.log(`index of c is${indexofC}`); //display arra

const indecofM = array.indexOf("m"); // get indec of non existing element
console.log(`index of c is${indecofM}`); //display arra

//spread Operator we can spread the array elemets using spread operator
// Spread operator is always used on right side of assignment operator(=)
const numarray1 = [1, 2, 3];
const numarray2 = [5, 6, 7];

const numarray3 = [...numarray1, ...numarray2];
console.log(typeof numarray3);
console.log(numarray3); //o/p [1,2,3,5,6,7]
console.log(`Merging array using spread Operator ${numarray3}`);

// rest parameter Operator we can rest to extract few elements of an array in variable and create a new array from the rest
// rest parameter is always used on left side of assignment operator(=)
const [x, y, ...z] = numarray3;
console.log("x = " + x); // 1
console.log("x = " + y); // 2
console.log("x = " + z, typeof z); // [3,4,5,6,7]

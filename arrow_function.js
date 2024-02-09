"use strict";

const summantion = (a, b) => {
  if (a < 0 || b < 0) {
    console.log("connot pass negative values for summation");
    return;
  }
  console.log(`values passed for summation are ${a} and ${b}`);
  return a + b;
};

console.log(summantion(10, 5));

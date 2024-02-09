for (let i = 0; i < 3; i++) {
  console.log(`Displaying number ${i}`);
}

var namesArray = ["A", "B", "C"];

console.log("Pop " + namesArray.pop());

namesArray.push("c");
console.log("Push " + namesArray);

namesArray.unshift("d");

console.log("Unshift " + namesArray);

namesArray.shift();
console.log("shift " + namesArray);

let num = [1, 2, 3, 4];
let [a, b, c, d] = num;

console.log(a, b, c, d);
// create 4 new variables named a,b,c,d and copies the values of each array element in sequensial order

let [w, , , z] = num;
console.log(w, z); // 1, 4
// copies cirst and fourt value in array by skipping 2 and 3 element
// we can skip an array element by give it and empty e.g line 8

// here we are creating an array from w and z variables  and then destucturing it to interchange the values.
[z, w] = [w, z]; // interchange the values of a variable
console.log(w, z); //4,1

//destructing array witn in Array
const [p, , [q, r]] = [1, 2, [3, 4]];
console.log(p, q, r); //1,3,4

// default values to variables during destructuring
const [l = 0, m = 0, n = 0] = [10, 12];
console.log(l, m, n); // 1l=10, m=12, n=0

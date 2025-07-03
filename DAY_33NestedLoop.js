// 1. Right Triangle - Star Pattern
// Write a program that takes an integer n as input and prints a right triangle star pattem with n rows.
// • Each row should contain stars (*) with spaces between them.
// • The number of stars increases as you move from the first row to the nth row.

// let n = 5;
// if (n < 1 || n > 100) {
//   console.log("n should be greater then 0 and under 100 ");
// }
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log("");
// }

// 2. Right Triangle - Number Pattem
// Write a program that takes an integer n as input and prints a right triangle number pattern with n rows.
// • Each row should start from 1 and print the next integers incrementally until the row number is reached.

// let n = 50;
// for (let i = 1; i <= n; i++) {
// for (let j = 1; j <= i; j++) {
//     process.stdout.write(j.toString() + " ");
// }
// console.log("");
// }

// 3. Right Triangle - Alphabet Pattern
// Write a program that takes an integer n as input and prints a right triangle alphabet pattern with n rows.
// Each row should start from 'A' and incrementally print the next letters of the alphabet until the row number is reached.
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let a = 65;
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(a) + " ");
//     a++;
//   }
//   console.log("");
// }

// let n = 5;

// for (i = 1; i <= n; i++) {
//   for (j = 0; j <= n * 2 - 1; j++) {
//     if (i == j || j == n * 2 - i) {
//       process.stdout.write("*");
//     } else {
//       process.stdout.write(" ");
//     }
//   }
//   console.log("");
// }

//

let arr = [0, 1, 1, 0, 0, 1, 0];
let copy = [];
for (let k = 0; k < arr.length; k++) {
  if (arr[k] == 0) {
    copy.unshift(0);
  } else {
    copy.push(1);
  }
}
console.log(copy);

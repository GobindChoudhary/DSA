// sum of digit of any number

// let num = Number(prompt("Enter the number:"));

// let sum = 0;
// while (num != 0) {
//   sum += num % 10;
//   num = Math.floor(num / 10);
// }
// console.log(sum);

//Reverse of number

// let num = +prompt("Enter the number:");
// let rev = 0;
// while (num > 0) {
//   rev = rev * 10 + (num % 10);
//   num = Math.floor(num / 10);
// }
// console.log(rev);

// Check Automorphic Number

// let num = Number(prompt("Enter a number:"));
// let copy = num;
// let square = Math.pow(num, 2);

// let i = 0;
// while (copy > 0) {
//   i++;
//   copy = Math.floor(copy / 10);
// }
// square = square % Math.pow(10, i);
// if (square == num) {
//   console.log("Automorphic number");
// } else console.log("Not automorphic");

// second method

let num = Number(prompt("Enter number:"));
let square = num * num;
let digit = Math.floor(Math.log10(num)) + 1;

if (num == square % Math.pow(10, digit)) {
  console.log("Automorphic number");
} else console.log("NonAutomorphic number");

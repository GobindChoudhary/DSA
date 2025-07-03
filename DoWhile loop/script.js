//  print Hello
// let i = 5;

// do {
//   console.log("hello");
//   i--;
// } while (i > 0);

// Guess the number
// compNum = Math.floor(Math.random() * 100 + 1);
// console.log(compNum);

// let number;
// do {
//   number = +prompt("Enter a number:");
//   if (number > compNum) console.log("You Entered greater number");
//   if (number < compNum) console.log("You Entered smaller number");
//   if (number === compNum) console.log("You guesss the right number 🎉");
// } while (compNum != number);

// sasta Calculator
// let userInput;
// do {
//   let num1 = +prompt("Enter first Number:");
//   let operator = prompt("Enter operator");
//   let num2 = +prompt("Enter second Number:");
//   switch (operator) {
//     case "+":
//       console.log(num1 + num2);
//       break;
//     case "-":
//       console.log(num1 - num2);
//       break;
//     case "*":
//       console.log(num1 * num2);
//       break;
//     case "/":
//       console.log(num1 / num2);
//       break;

//     default:
//       console.log("Enter a Valid Operator.");
//       break;
//   }
//   userInput = prompt(
//     "Do you want to calculate more. (yes/no)"
//   ).toLocaleLowerCase();
// } while (userInput == "yes");

//  ISBN

// let num = Number(prompt("Enter 10 digit number:"));
// let copy = num;
// let sum = 0;
// for (let i = 10; i > 0; i--) {
//   sum += (copy % 10) * i;
//   console.log(sum);
//   copy = Math.floor(copy / 10);
// }
// console.log(sum);
// if (sum % 11 == 0) {
//   console.log("ISBN Number");
// } else console.log("Not a ISBN Number");

// Greatest common divisor

// let a = Number(prompt("Enter first number:"));
// let b = Number(prompt("Enter second number:"));
// if (a < b) {
//   [a, b] = [b, a];
// }

// while (b !== 0) {
//   [a, b] = [b, a % b];
// }
// console.log(a);

// harshad Number

// let number = Number(prompt("Enter the number:"));
// let copy = number;
// let sum = 0;

// while (copy > 0) {
//   sum += copy % 10;
//   copy = Math.floor(copy / 10);
// }
// if (number % sum === 0) {
//   console.log("harshad Number");
// } else console.log("not a harshad number");

// perfect square

// let number = Number(prompt("Enter the number:"));

// if (Math.sqrt(number) === Math.floor(Math.sqrt(number))) {
//   console.log("perfect square");
// } else {
//   console.log("Not a Perfect square");
// }

//Abundant Number

// let number = Number(prompt("Enter the number:"));
// let sum = 0;
// for (let i = 1; i < number / 2; i++) {
//   if (number % i === 0) {
//     sum += i;
//   }
// }
// if (sum > number) {
//   console.log("Abundant Number");
// } else {
//   console.log("Not a Abundant Number");
// }

// let number = Number(prompt("Enter the number:"));
// let a = 0;
// let b = 1;
// let temp = 0;
// let series = [a, b];

// for (let i = 2; i <= number; i++) {
//   let temp = a + b;
//   series.push(temp);
//   a = b;
//   b = temp;
// }
// console.log(series);

// number with exactly X divisor

let number = Number(prompt("Enter the number:"));

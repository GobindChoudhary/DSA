// 1.
// Age Category Message – Ask the user for their age. If they are
// under 18, print “You are a minor.” If they are between 18 and 60,
// print “You are an adult.” If they are above 60, print “You are a
// senior citizen.

// const age = prompt("what is your age");
// if (age < 18) {
//   console.log("you are minor");
// } else if (age >= 18 && age <= 60) {
//   console.log("You are adult");
// } else {
//   console.log("you are senior citizen");
// }

// 2.

// Even or Odd Sum – Take two numbers from the user using
// prompt(). If the sum of both numbers is even, print “Even Sum”;
// otherwise, print “Odd Sum.”

//sol: Number(Prompt()), ParseInt(Prompt()), ParseFloat(Prompt()) for decimal,   +Prompt() return iniput as number

// const firstNum = +prompt("Enter First Number");
// const secondNum = +prompt("Enter second Number");

// const sum = firstNum + secondNum;
// // to chek even number find the mod of that number by 2 if == 0 then even
// if (sum % 2 == 0) {
//   console.log("sum is even");
// } else {
//   console.log("sum is odd");
// }

// 3. Character Case Checker – Ask the user for a single character.
// Check if it's uppercase, lowercase, or neither (not a letter).

// The condition 65 <= char.charCodeAt(0) <= 90 is incorrect because <= does not work like this in JavaScript.
// This is interpreted as: (65 <= char.charCodeAt(0)) <= 90

// const char = prompt(" Enter a Char: ");
// console.log(char.charCodeAt(0));
// if (65 <= char.charCodeAt(0) && char.charCodeAt(0) <= 90) {
//   console.log("Uppercase");
// } else if (97 <= char.charCodeAt(0) && char.charCodeAt(0) <= 122) {
//   console.log("LowerCase");
// } else {
//   console.log("Special Character or Number");
// }

// 4.

// Largest of Three Numbers – Take three numbers as input and
// print the largest number among them without using
// Math.max().

// const a = prompt("Enter A : ");
// const b = prompt("Enter B : ");
// const c = prompt("Enter C : ");

// if (a == b && b == c) {
//   console.log("all are equal");
// } else {
//     a > b
//       ? a > c
//         ? console.log("A is greatest number")
//         : console.log("C is greatest")
//       : b > c
//       ? console.log("B is greatest")
//       : console.log("C is greatest");

// }

// for NaN values

// if (isNaN(a) || isNaN(b) || isNaN(c)) {
//   console.error("Please use Numbers");
// } else if (a == b && b == c) {
//   console.log("all are equal");
// } else {
//   a > b && a > c
//     ? console.log("A is greatest number")
//     : b > c
//     ? console.log("B is greatest")
//     : console.log("C is greatest");
// }

//5.
//Leap Year Checker – Ask the user for a year and determine if
// it's a leap year or not.

// const year = +prompt("Enter the Year:");

// if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
//   console.log(`year ${year} is a leap year`);
// } else {
//   console.log(`year ${year} is not a leap year`);
// }

//6.
// Simple Calculator – Ask the user for two numbers and an
// operator (+, -, *, /). Perform the operation and display the result.

// const firstNum = +prompt("Enter the A:");
// const secondNum = +prompt("Enter the B:");

// console.log(firstNum + secondNum); //addtion
// console.log(firstNum - secondNum); //Sub
// console.log(firstNum * secondNum); //multiplication
// console.log(firstNum / secondNum); //Division
// console.log(firstNum % secondNum); //remainder

//8.
// User Greeting – Ask for the user's name and time (24-hour
// format). Greet them accordingly:

// const userName = prompt("Enter your Name:");
// const time = +prompt("Enter time (24 Hour formate):");

// if (time >= 5 && time < 12) {
//   console.log(`Good Morning ${userName}`);
// } else if (time >= 12 && time < 17) {
//   console.log(`Good Afternoon ${userName}`);
// } else if (time >= 17 && time < 21) {
//   console.log(`Good Evening ${userName}`);
// } else {
//   console.log(`Good Night ${userName}`);
// }

// 9.
// Traffic Light System – Ask the user for a traffic light color (red,
//     yellow, green). Print appropriate messages:

// const light = prompt("Enter the Color:");
// light.toLowerCase();

// switch (light) {
//   case "red":
//     console.log("STOP!");
//     break;
//   case "yellow":
//     console.log("Get Ready!");
//     break;
//   case "green":
//     console.log("Go!");
//     break;
//   default:
//     console.log("Enter the color among RED , YELLOW , GREEN");
//     break;
// }

// 10.
// Multiplication Table – Ask the user for a number and print its
// multiplication table up to 10.

// const number = prompt("Enter the number for table you want:");

// for (let i = 1; i <= 10; i++) {
//   console.log(` ${number} * ${i} = ${number * i}`);
// }

//11.
// 11. Grade Calculator – Ask the user for their marks (0-100).
// Assign grades based on the range:

// const number = +prompt("Enter your Score");

// switch (true) {
//   case number >= 90 && number <= 100:
//     console.log("A");
//     break;
//   case number >= 80 && number <= 89:
//     console.log("B");
//     break;
//   case number >= 70 && number <= 79:
//     console.log("C");
//     break;
//   case number >= 60 && number <= 69:
//     console.log("D");
//     break;
//   case number < 60:
//     console.log("FAIL");
//     break;
// }

//12.
// Simple Login System – Set a predefined username and
// password. Ask the user to enter their credentials using
// prompt(). If correct, print “Login Successful”; otherwise, print
// “Incorrect username or password.”

// const predefinedName = "gobind";
// const predefinedPassword = 123;

// const userName = prompt("Enter your userName");
// const password = prompt("Enter password");

// if (predefinedName == userName && predefinedPassword == password) {
//   console.log("Login Successful");
// } else {
//   console.log("Incorrect username or password.");
// }

// 13
// Swapping Without Third Variable – Take two numbers from the
// user and swap their values without using a third variable.

// let a = +prompt("enter a number A ");
// let b = +prompt("enter a number B ");

// a = a + b;
// b = a - b;
// a = a - b;

// console.log(`After swapping : A = ${a} `);
// console.log(`After swapping : B = ${b} `);

//14
// FizzBuzz (Multiple of Both) – Ask the user for a number. If it's a
// multiple of both 3 and 5, print “FizzBuzz”; if only 3, print “Fizz”; if
// only 5, print “Buzz”; otherwise, print the number itself.

// const num = +prompt("enter the number");

// if (num % 3 == 0 && num % 5 == 0) {
//   console.log("Fizzbuzz");
// } else if (num % 3 == 0) {
//   console.log("Fizz");
// } else if (num % 5 == 0) {
//   console.log("Buzz");
// } else {
//   console.log(num);
// }

// 15.
//  Number Reversal – Take a three-digit number from the user
// and print its reverse. (Example: 123 → 321).

// const num = prompt("enter the number");
// console.log(num.split("").reverse().join(""));

// var reverse = "";

// for (let i = num.length - 1; i >= 0; i--) {
//   reverse += num[i];
// }
// console.log(reverse);

// 16.
// Sum of Digits – Take a number from the user and print the sum
// of its digits. (Example: 123 → 1+2+3 = 6).

// const num = prompt("enter the number");

// var addtion = 0;

// for (let i = num.length - 1; i >= 0; i--) {
//   addtion += +num[i];
// }
// console.log(addtion);

//16.
// Palindrome Checker – Ask the user for a word. Check if it
// reads the same forward and backward. Print “Palindrome” or
// “Not a Palindrome.”

// const word = prompt("check for palindrome:");

// let forward = "";
// let backword = "";

// for (let i = 0; i <= word.length - 1; i++) {
//   forward += word[i];
// }
// console.log(forward);

// for (let i = word.length - 1; i >= 0; i--) {
//   backword += word[i];
// }
// console.log(backword);

// if (forward == backword) {
//   console.log("Palindrome");
// } else {
//   console.log("Not a Palindrome");
// }

// //18.
// Reverse Without String Methods – Ask the user for a number
// and reverse it without using .split(), .reverse(), or .join().

// const number = prompt("Enter a number");
// let reverse = "";

// for (i = number.length - 1; i >= 0; i--) {
//   reverse += number[i];
// }
// console.log(reverse);

//19.
// Find First Non-Repeating Character – Ask the user for a word
// and find the first character that does not repeat. Example: hello
// → h (since e, l, and o repeat).

// const word = prompt("Enter a word ");

// // console.log(word.split("").sort());
// // let sortWord = word.split("").sort();
// // [h, e, l, l, o];
// // console.log(sortWord.length);
// for (let i = 0; i < word.length; i++) {
//   if (word.indexOf(word[i]) === word.lastIndexOf(word[i])) {
//     console.log(word[i]);
//     break;
//   }
// }

// 21.
// Even Digit Counter – Take a number from the user and count
// how many even digits it has.

// const num = prompt("Enter number");

// let EvenDigitCount = 0;

// for (let i = 0; i <= num.length; i++) {
//   if (num[i] % 2 == 0) {
//     EvenDigitCount += 1;
//   }
// }

// console.log(EvenDigitCount);

// 22.
// Nested Condition Challenge – Ask the user for their age and
// salary. Print a message based on conditions:

// If age is below 18, print “Not eligible”

// If age is 18 or more but salary is less than ₹20,000, print “Low
// Salary”

// If salary is ₹50,000 or more, print “High Salary”

// . Otherwise, print “Medium Salary”

// const age = +prompt("Enter age:");
// const salary = +prompt("Enter salary:");
// if (age < 18) {
//   console.log("Not eligible");
// } else {
//   if (age >= 18) {
//     if (salary < 20000) {
//       console.log("Low Salary");
//     } else if (salary >= 50000) {
//       console.log("High Salary");
//     } else {
//       console.log("Medium Salary");
//     }
//   }
// }

//23.
// 65 - 90 = capital
// const word = prompt("Enter the word");
// let togleWord = "";
// // console.log(a.charCodeAt(0));
// for (let i = 0; i < word.length; i++) {
//   if (65 <= word.charCodeAt(i) && word.charCodeAt(i) <= 90) {
//     togleWord += word[i].toLowerCase();
//     // console.log("capital");
//   } else {
//     togleWord += word[i].toUpperCase();
//   }
// }
// console.log(togleWord);

//24.
//Find the Missing Number in a Sequence – Take a list of
// consecutive numbers (except one missing) and find the
// missing number. Example: 1, 2, 3, 5 → Missing number is 4.

// const num = prompt("Enter the list of number:");
// let totalnum = "";
// for (let i = +num[0]; i <= +num[num.length - 1]; i++) {
//   totalnum += i;
// }
// // console.log(totalnum);

// for (let i = 0; i < num.length; i++) {
//   if (num[i] != totalnum[i]) {
//     console.log(totalnum[i]);
//     break;
//   }
// }

//25
// Convert Number to Words – Take a single-digit number and
// print it in words (Example: 1 → One, 2 → Two).

// const num = +prompt("Enter a number:");

// switch (num) {
//   case 1:
//     console.log("one");
//     break;
//   case 2:
//     console.log("two");
//     break;
//   case 3:
//     console.log("three");
//     break;
//   case 4:
//     console.log("four");
//     break;
//   case 5:
//     console.log("five");
//     break;
//   case 6:
//     console.log("six");
//     break;
//   case 7:
//     console.log("seven");
//     break;
//   case 8:
//     console.log("eight");
//     break;
//   case 9:
//     console.log("nine");
//     break;
//   case 0:
//     console.log("zero");
//     break;

//   default:
//     console.log("enter a valid number");

//     break;
// }

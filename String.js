// // const str = "Gobind";
// // const str2 = "choudhary";

// // str[0] = "g";  ❌immutable
// // console.log(str[0]);  access
// // console.log(str.slice(0, 5)); index 5 is not included
// // console.log(str);  slice() dont effect the orignal string
// // console.log(str.toUpperCase());
// // console.log(str); dont effect the orignal string

// // console.log(str.toLowerCase());
// // console.log(str); dont effect the orignal string

// // console.log(str.trim()); dont effect the orignal string
// // console.log(str.trim().concat(" " + str2));
// // console.log(str);

// // console.log(str.indexOf("G"));
// // console.log(str.includes("G"));

// // console.log(str.length);

// // Reverse String

// function reverseString(str) {
//   // Write your logic here
//   for (let i = str.length - 1; i >= 0; i--) {
//     process.stdout.write(str.charAt(i));
//   }
//   console.log("");

//   return "";
// }

// reverseString("gobind");

// // isPalendrome

// let s = "A man, a plan, a canal: Panama";
// s = s.replace(/[^a-zA-Z0-9]/g, "").toLocaleLowerCase();
// let i = 0,
//   j = s.length - 1;
// let ispalendrome = true;

// while (i < j) {
//   if (s[i] != s[j]) {
//     ispalendrome = false;
//     break;
//   }
//   i++;
//   j--;
// }
// if (ispalendrome) {
//   console.log(ispalendrome);
// } else {
//   console.log(ispalendrome);
// }

// Toggle String

// let s = "AbCdEf";

// let toggleString = "";

// for (let i = 0; i < s.length; i++) {
//   if (s.charCodeAt(i) > 64 && s.charCodeAt(i) < 91)
//     // toggleString += s[i].toLowerCase();
//     toggleString += String.fromCharCode(s.charCodeAt(i) + 32);
//   if (s.charCodeAt(i) > 96 && s.charCodeAt(i) < 173)
//     // toggleString += s[i].toUpperCase();
//     toggleString += String.fromCharCode(s.charCodeAt(i) - 32);
// }
// console.log(toggleString);

// // count Prefix

// method 1

// var countPrefixes = function (words, s) {
//   let count = 0;
//   for (let i = 0; i < words.length; i++) {
//     let isprefix = true;

//     for (let j = 0; j < words[i].length; j++) {
//       if (words[i][j] != s[j]) {
//         isprefix = false;
//         break;
//       }
//     }
//     if (isprefix) {
//       count++;
//     }
//   }
//   console.log(count);
//   return count;
// };
// countPrefixes(["a", "abc"], "ab");

// method 2

// var countPrefixes = function (words, s) {
//   let count = 0;
//   for (let i = 0; i < words.length; i++) {
//     if (words[i] == s.slice(0, words[i].length)) {
//       count += 1;
//     }
//   }
//   console.log(count);
//   return count;
// };
// countPrefixes(["a", "abc"], "ab");

// method 3

// var countPrefixes = function (words, s) {
// return words.reduce((a,c)=> s.startWith(c),0)
// };
// countPrefixes(["a", "abc"], "ab");

// Frequency of a charcter using Array

// const str = "gobind chaudhary";
// const arr = new Array(123).fill(0);
// for (let i = 0; i < str.length; i++) {
//   let freq = str.charCodeAt(i);
//   arr[freq] = arr[freq] + 1;
// }

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0 && i != 32) {
//     console.log(String.fromCharCode(i) + "=>" + arr[i]);
//   }
// }

// Capitalised first and last char of each word of array

// without using method toUpperCase()

// let str = "hello world";
// let arr = str.split(" ");
// let ans = "";
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].length <= 2) ans += arr[i].toUpperCase() + " ";
//   let first = String.fromCharCode(arr[i].charCodeAt(0) - 32);
//   let last = String.fromCharCode(arr[i].charCodeAt(arr[i].length - 1) - 32);
//   ans += first + arr[i].slice(1, arr[i].length - 1) + last + " ";
// }
// console.log(ans);

// using method toUpperCase()

// let str = "hello world";
// let arr = str.split(" ");
// let ans = "";
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].length <= 2) ans += arr[i].toUpperCase() + " ";
//   ans +=
//     arr[i][0].toUpperCase() +
//     arr[i].slice(1, arr[i].length - 1) +
//     arr[i][arr[i].length - 1].toUpperCase() +
//     " ";
// }
// console.log(ans);

// toLowerCase

// var toLowerCase = function (s) {
//   let arr = [];
//   for (let i = 0; i < s.length; i++) {
//     if (s.charCodeAt(i) > 64 && s.charCodeAt(i) < 91) {
//       arr.push(String.fromCharCode(s.charCodeAt(i) + 32));
//     } else {
//       arr.push(s[i]);
//     }
//   }
//   return arr.join("");
// };

// console.log(toLowerCase("heLLo"));

// Valid Anagram

// var isAnagram = function (s, t) {
//   let arr = new Array(123).fill(0); //[0......122]
//   let valid = true;
//   if (s.length != t.length) {
//     valid = false;
//   } else {
//     for (let i = 0; i < s.length; i++) {
//       let ascii = s.charCodeAt(i);
//       arr[ascii] = arr[ascii] + 1;
//     }
//     for (let i = 0; i < t.length; i++) {
//       let ascii = t.charCodeAt(i);
//       arr[ascii] = arr[ascii] - 1;
//     }
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] != 0) {
//         valid = false;
//         break;
//       }
//     }
//   }
//   return valid;
// };

// console.log(isAnagram("anagram", "nagaram"));

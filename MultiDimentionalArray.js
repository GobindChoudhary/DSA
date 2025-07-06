const prompt = require("prompt-sync")();

// Traversal throught multidimentionla array

// const arr = Array.from({ length: 3 }, () => {
//   return Array(4).fill(0);
// });
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

// console.log(arr);

// inserting element in mutidimentional array

// const size = Number(prompt("Enter the size of the array: "));
// const arr1 = new Array(size);
// for (let i = 0; i < arr1.length; i++) {
//   const innerArraysize = +prompt(`Enter the size array at index ${i}: `);
//   arr1[i] = new Array(innerArraysize);
//   for (let j = 0; j < arr1[i].length; j++) {
//     const element = +prompt(`Enter ${j}th index element `);
//     arr1[i][j] = element;
//   }
// }

// console.log(arr1);

// Sum of Diagonal (Leetcode Question)

const size = Number(prompt("Enter the size of the array: "));
const arr2 = Array.from({ length: size }, (v, i) => {
  console.log(`Enter Element of array at index ${i}`);
  return Array.from({ length: size }, (v2, j) => {
    return Number(prompt("Enter the elemnt: "));
  });
});

let sum = 0;
// for (let i = 0; i < arr2.length; i++) {
//   for (let j = 0; j < arr2[i].length; j++) {
//     if (i == j || i + j == arr2.length - 1) {
//       sum += arr2[i][j];
//     }
//   }
// }
// console.log(arr2);
// console.log(sum); // O(n2) time complexity

//  Optimized solution
for (let i = 0; i < arr2.length; i++) {
  sum += arr2[i][i];
  sum += arr2[i][arr2.length - 1 - i];
}
if ((arr2.length - 1) % 2 == 0) {
  sum -= arr2[Math.floor(arr2.length / 2)][Math.floor(arr2.length / 2)];
}
console.log(sum); // O(n) time complexity

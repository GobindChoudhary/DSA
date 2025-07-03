// let prompt = require("prompt-sync")();

// const arr = [1, 2, 3, 4, 5, 6];

// Q 43. Sum of arrayʼs element
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);
// console.log(undefined + 1);

// Q 44. Max element from array

// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) max = arr[i];
// }
// console.log(max);

// Q 45. Second max element from array

// let max, smax;
// if (arr[0] > arr[1]) {
//   max = arr[0];
//   smax = arr[1];
// } else {
//   max = arr[1];
//   smax = arr[0];
// }

// for (let i = 2; i < arr.length; i++) {
//   if (arr[i] > max) {
//     smax = max;
//     max = arr[i];
//   } else if (arr[i] > smax) {
//     smax = arr[i];
//   }
// }

// console.log(smax);

//  Q 46. Reverse the array

// let reverse = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//   reverse.push(arr[i]);
// }

// process.stdout.write(reverse.join(","));

// Q. 47. All zeroes to left and all ones to right

// let arr = [0, 1, 1, 0, 0, 1, 0];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i; j < arr.length; j++) {
//     if (arr[j] == 0) {
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }
// console.log(arr);

// Q 48. Array left Rotation by 1
// const arr = [1, 2, 3, 4, 5, 6];
// let first = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i + 1];
// }
// arr[arr.length - 1] = first;
// console.log(arr);

// 49. Array left rotation by K elements
// const arr = [1, 2, 3, 4, 5, 6];
// let k = 8;
// k = k % arr.length;
// for (let j = 0; j < k; j++) {
//   let first = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = first;
// }
// console.log(arr);

// optimizes

// function reverse(arr, i, j) {
//   while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
//   }
// }

// reverse(arr, 0, k - 1);
// reverse(arr, k, arr.length - 1);
// reverse(arr, 0, arr.length - 1);

// console.log(arr);

// Q 50. Linear Search an array  If element found print the index else -1

// const arr = [1, 2, 3, 4, 5, 6];
// let elem = 9;
// let index = -1;
// for (let i = 0; i < arr.length - 1; i++) {
//   if (arr[i] == elem) {
//     console.log(i);
//     index = 1;
//     break;
//   }
// }
// if (index == -1) {
//   console.log(index);
// }

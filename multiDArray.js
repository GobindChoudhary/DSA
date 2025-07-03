// let prompt = require("prompt-sync")();

// let size = Number(prompt("Enter the size of the Array"));
// let sum = 0;
// let arr = new Array(size);

// for (let i = 0; i < arr.length; i++) {
//   let innerArraySize = Number(prompt("Enter inner array length"));
//   arr[i] = new Array(innerArraySize);
// }

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     arr[i][j] = Number(prompt("enter element"));
//     if (i == j || i + j == arr.length - 1) {
//       sum += arr[i][j];
//     }
//   }
// }

// console.log(sum);

let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

let ans = [];
while (ans.length < 16) {
  let minr = 0;
  let maxr = 3;
  let minc = 0;
  let maxc = 3;
  for (let i = minr; i < minr + 1; i++) {
    for (let j = minc; j <= maxc; j++) {
      ans.push(matrix[i][j]);
    }
  }
  minr = minr + 1;

  for (let i = minr; i <= maxr; i++) {
    for (let j = maxc; j <= maxc; j++) {
      ans.push(matrix[i][j]);
    }
  }
  maxc = maxc - 1;

  for (let i = maxr; i <= maxr; i++) {
    for (let j = maxc; j >= minc; j--) {
      ans.push(matrix[i][j]);
    }
  }
  maxr = maxr - 1;

  for (let i = maxr; i >= minr; i--) {
    for (let j = minc; j <= minc; j++) {
      ans.push(matrix[i][j]);
    }
  }
  minc = minc + 1;
  for (let i = minr; i <= maxr; i++) {
    for (let j = minc; j <= maxc; j++) {
      ans.push(matrix[i][j]);
    }
  }

  for (let i = maxr; i < maxr; i++) {
    for (let j = maxc; j >= minc; j--) {
      ans.push(matrix[i][j]);
    }
  }
}

console.log(ans);

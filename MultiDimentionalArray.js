const prompt = require("prompt-sync")();

// Traversal throught multidimentionla array

const arr = Array.from({ length: 3 }, () => {
  return Array(4).fill(0);
});
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

console.log(arr);

// inserting element in mutidimentional array

const size = Number(prompt("Enter the size of the array: "));
const arr1 = new Array(size);
for (let i = 0; i < arr1.length; i++) {
  const innerArraysize = +prompt(`Enter the size array at index ${i}: `);
  arr1[i] = new Array(innerArraysize);
  for (let j = 0; j < arr1[i].length; j++) {
    const element = +prompt(`Enter ${j}th index element `);
    arr1[i][j] = element;
  }
}

console.log(arr1);

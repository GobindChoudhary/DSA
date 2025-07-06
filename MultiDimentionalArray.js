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

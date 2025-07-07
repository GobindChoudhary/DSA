// transpose if amatrix
var transpose = function (matrix) {
  const arr = Array.from({ length: matrix[0].length }, () =>
    Array(matrix.length)
  );
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = matrix[j][i];
    }
  }
  return arr;
};
console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
//Rotate Image
var rotate = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    let j = 0;
    k = matrix.length - 1;
    while (j < k) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][k];
      matrix[i][k] = temp;
      j++;
      k--;
    }
  }
  return matrix;
};
console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

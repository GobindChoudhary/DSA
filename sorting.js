// bubble Short

let arr = [32, 41, 1, 90, 55, 83, 88, 23, 49, 57];

// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = 0; j < arr.length - i - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }
// console.log(arr);

// Selection sort

// for (let i = 0; i < arr.length - 1; i++) {
//   let small = i;
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[small] > arr[j]) {
//       small = j;
//     }
//   }
//   if (small != i) {
//     let temp = arr[small];
//     arr[small] = arr[i];
//     arr[i] = temp;
//   }
// }
// console.log(arr);

// Insertion sort

// for (let i = 1; i < arr.length; i++) {
//   let key = arr[i];
//   let j = i - 1;
//   for (; j >= 0 && key < arr[j]; j--) {
//     arr[j + 1] = arr[j];
//   }
//   arr[j + 1] = key;
// }
// console.log(arr);

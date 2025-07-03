// // // // // // let str = "hello";

// // // // // // let arr = new Array(123).fill(0);

// // // // // // for (let i = 0; i < str.length; i++) {
// // // // // //   let freq = str.charCodeAt(i);
// // // // // //   arr[freq] = arr[freq] + 1;
// // // // // // }

// // // // // // for (let i = 0; i < arr.length; i++) {
// // // // // //   if (arr[i] > 0) {
// // // // // //     console.log(String.fromCharCode(i) + " => " + arr[i]);
// // // // // //   }
// // // // // // }

// // // // // // function getCharFrequency(str) {
// // // // // //   let freq = {};

// // // // // //   for (let char of str) {
// // // // // //     freq[char] = (freq[char] || 0) + 1;
// // // // // //   }

// // // // // //   return freq;
// // // // // // }
// // // // // // console.log(getCharFrequency("kabhi kushi kabhi gam"));
// // // // // // // Output: { h: 1, e: 1, l: 2, o: 1 }

// // // // // let sentence = "abcdefghijklmnopqrstuvwxyzabcsedghropdnsjfsflknfs";
// // // // // let set = new Set(sentence);
// // // // // console.log(set);
// // // // // console.log(set.size);

// // // // let n = 19;
// // // // function Happpy(n) {
// // // //   let sum = 0;

// // // //   while (n > 0) {
// // // //     let digit = n % 10;
// // // //     sum += Math.pow(digit, 2);
// // // //     n = Math.floor(n / 10);
// // // //   }
// // // //   return sum
// // // // }
// // // // while (sum != 1) {
// // // //     Happpy(n)
// // // // }

// // // let num = [1, 2, 3, 4, 5];
// // // let target = 9;
// // // let inds = [];
// // // let map = new Map();
// // // for (let i = 0; i < num.length; i++) {
// // //    if(map.has(target - num[i])){
// // //     return  [map.get(target-num[i]),i]
// // //    }
// // //    map.set(num[i],i)
// // // }

// // let s = "abccdef";
// let name = ["a", "b", "c", "d"];
// let height = [4, 3, 2, 1];
// let map = new Map();
// for (let i = 0; i < name.length; i++) {
//   map.set(height[i], name[i]);
// }
// height.sort((a, b) => a - b);
// let arr = [];
// for (let i = 0; i < height.length; i++) {
//   arr.push(map.get(height[i]));
// }

// console.log(arr);

// function sum(n) {
//   if (n == 1) return 1;
//   let add = n * sum(n - 1);
//   return add;
// }
// console.log(sum(8));

function printFibonacci(n) {
  // Write your logic here
  if (n == 0) return;
  let third = first + second;
  console.log(third);
  first = second;
  second = third;
  printFibonacci(n - 1);
}

console.log(first, second);
printFibonacci(5);

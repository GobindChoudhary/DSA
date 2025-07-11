// // Creating a map
// const map = new Map();

// // Adding values
// map.set("name", "Gobind");
// map.set("age", 21);
// map.set("isStudent", true);

// // Getting values
// console.log(map.get("name")); // Gobind

// // Checking if a key exists
// console.log(map.has("age")); // true

// // Removing a key
// map.delete("isStudent");

// // Size of map
// console.log(map.size); // 2

// // Iterating through map
// for (let [key, value] of map) {
//   console.log(key, "=>", value);
// }

// frequency

// const arr = [1, 2, 3, 4, 2, 4, 5, 6, 4, 5];

// let map = new Map();
// for (let i = 0; i < arr.length; i++) {
//   if (map.has(arr[i])) {
//     map.set(arr[i], map.get(arr[i]) + 1);
//   } else map.set(arr[i], 0);
// }

// console.log(map);

// sortPeople

var sortPeople = function (names, heights) {
  let map = new Map();
  for (let i = 0; i < names.length; i++) {
    map.set(heights[i], names[i]);
  }
  heights.sort((a, b) => b - a);
  for (let i = 0; i < names.length; i++) {
    names[i] = map.get(heights[i]);
  }
  return names;
};

// sortPeople(["Mary", "John", "Emma"], [180, 165, 170]);

// twoSum

var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [i, map.get(target - nums[i])];
    }
    map.set(nums[i], i);
  }
};

// twoSum([2, 7, 11, 15], 9);

//  first letter to appear twice

var repeatedCharacter = function (s) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      return s[i];
    } else {
      map.set(s[i], 0);
    }
  }
};
// repeatedCharacter("abccbaacz");

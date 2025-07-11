//  anagram

var checkIfPangram = function (sentence) {
  let str = "abcdefghijklmnopqrstuvwxyz";
  let ans = str.split("").every((i) => sentence.includes(i));
  return ans;
};

var checkIfPangram = function (sentence) {
  let set = new Set();
  for (let char of sentence) {
    set.add(char);
  }
  return set.size == 26 ? true : false;
};

// console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));

// Jewels and Stones

var numJewelsInStones = function (jewels, stones) {
  let uniquejewels = new Set();
  for (let a of jewels) {
    uniquejewels.add(a);
  }
  let count = 0;
  for (let a of stones) {
    if (uniquejewels.has(a)) count++;
  }
  return count;
};
// console.log(numJewelsInStones("aA", "aAAbbbb"));

// Happy Number

var isHappy = function (n) {
  let sum = 0;
  function findSum(n) {
    while (n > 0) {
      let lastnum = n % 10;
      sum = sum + Math.pow(lastnum, 2);
      n = Math.floor(n / 10);
    }
  }
  findSum(n);
};
// console.log(isHappy(19));

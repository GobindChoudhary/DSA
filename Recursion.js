// print N hello world
const helloworld = (num) => {
  console.log(num + "Hello World");
  if (num == 1) return;
  //helloworld(num); //stackOverflow
  helloworld(num - 1);
};

// helloworld(10);

// sum of n digit
const add = (num) => {
  if (num === 0) return 0;
  return num + add(num - 1);
};
// console.log(add(10));

// print natural from n to 1

function print(n) {
  if (n == 0) return;
  console.log(n);
  print(n - 1);
}

// print(10);

// print natural from 1 to n

function print(s, e) {
  if (s > e) return;
  console.log(s++);
  print(s, e);
}

// print(1, 10);

// factorial

function fact(n) {
  if (n == 1) return 1;
  return n * fact(n - 1);
}
// console.log(fact(5));

// fibbonacci series
function fab(n, first, sec) {
  if (n == 0) return "";
  console.log(first);
  fab(n - 1, sec, first + sec);
  return "";
}
fab(5, 0, 1);

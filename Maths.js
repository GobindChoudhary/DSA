// GCD

let a = 18,
  b = 28;

for (let i = Math.min(a, b); i >= 0; i--) {
  if (a % i == 0 && b % i == 0) {
    console.log(i);
    break;
  }
}

// Elcudian method

while (a != b) {
  if (a > b) a = a - b;
  else b = b - a;
}

// unsing recursion
function findgcd(a, b) {
  if (a == b) return a;
  if (a > b) return findgcd(a - b, b);
  return findgcd(a, b - a);
}
console.log(findgcd(15, 5)); //O(max(a,b))

// improved

function gcd(a, b) {
  if (b == 0) return a;
  return gcd(b, a % b);
}
console.log(gcd(15, 5)); //O(logn(max(a,b)))

const isPrimeNumber = (num: number) => {
  for (let i = num - 1; i > 1; i--) {
    if (num % i === 0) return false;
  }
  return true;
};

console.log(
  ((num) => `${num} ${isPrimeNumber(num) ? "is" : "is not"} a prime number!`)(5)
);
console.log(
  ((num) => `${num} ${isPrimeNumber(num) ? "is" : "is not"} a prime number!`)(9)
);

const isPrimeNumber2 = (num: number) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

console.log(
  ((num) => `${num} ${isPrimeNumber2(num) ? "is" : "is not"} a prime number!`)(
    5
  )
);
console.log(
  ((num) => `${num} ${isPrimeNumber2(num) ? "is" : "is not"} a prime number!`)(
    9
  )
);

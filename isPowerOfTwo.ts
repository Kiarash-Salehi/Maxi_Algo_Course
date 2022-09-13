const isPowerOfTwo = (num: number) => {
  if (num <= 1) return false;
  if (num % 2 !== 0) return false;
  for (let i = num / 2; i > 1; i = i / 2) {
    if (i % 2 != 0) return false;
  }
  return true;
};

console.time("Is Even");
console.log(isPowerOfTwo(Math.pow(2, 10000000)));
console.timeEnd("Is Even");

const isPowerOfTwo2 = (num: number) => {
  if (num <= 1) return false;
  return (num & (num - 1)) === 0;
};

console.time("Is Even");
console.log(isPowerOfTwo2(Math.pow(2, 10000000)));
console.timeEnd("Is Even");

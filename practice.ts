const min = (nums: number[]) => Math.min(...nums);
const even = (num: number) => (num % 2 === 0 ? true : false);

console.time("Is Even");
console.log(even(90000000000000000000000000000000));
console.timeEnd("Is Even");

console.time("Min value");
console.log(
  min([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24,
  ])
);
console.timeEnd("Min value");

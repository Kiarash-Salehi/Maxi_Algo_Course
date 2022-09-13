const fibo = (ind: number) => {
  const fiboSequence = [1, 1];
  while (fiboSequence.length !== ind)
    fiboSequence.push(fiboSequence.at(-1)! + fiboSequence.at(-2)!);
  return fiboSequence.at(-1);
};

console.time("testing fibo");
console.log(fibo(80000));
console.timeEnd("testing fibo");

// ------------------------------------------------------------------------ 26 - factorial
const factorial = (number: number): number => {
  let res = number;
  for (let i = number - 1; i > 1; i--) {
    res *= i;
  }
  return res;
};

// should be 120
console.log(factorial(5));

// ------------------------------------------------------------------------ 28 - recursion in algorithms
// -- recursion module introduction

// ------------------------------------------------------------------------ 29 - writing factorial with recursion

const factorialWithRecursion = (num: number): number => {
  if (num === 1) return num;
  return num * factorialWithRecursion(num - 1);
};

console.log(
  "Factorial for 5 is:",
  factorialWithRecursion(5),
  ", Right answer is: 120"
);

// ------------------------------------------------------------------------ 30 - writing fibonachi with recursion

const fiboWithRecursion = (n: number): number => {
  if (n <= 1) return 1;
  return fiboWithRecursion(n - 1) + fiboWithRecursion(n - 2);
};

// console.log("\n5th fibo is:", fiboWithRecursion(5), ", Right answer is: 8");
// console.log("10th fibo is:", fiboWithRecursion(10), ", Right answer is: 89");

// conclusion: recursion is not always good for example here recursion makes exponential time complexity although we solved it with linear time complexity before

// ------------------------------------------------------------------------ 31 - Dynamic programming + memoization
// -- memoization: keeping a data for a certain piece of code (a function call) and not using it later in code

const fiboWithRecursion2 = (n: number, sequence: number[] = [1, 1]): number => {
  if (sequence[n]) return sequence[n];
  return fiboWithRecursion2(n, [
    ...sequence,
    sequence.at(-2)! + sequence.at(-1)!,
  ]);
};

// console.log("\n5th fibo is:", fiboWithRecursion2(5), ", Right answer is: 8");
// console.log("10th fibo is:", fiboWithRecursion2(10), ", Right answer is: 89");

// ------------------------------------------------------------------------- 49 - practice
// ------------------------------------------------------------------------- 51 - searching algorithms
// ------------------------------------------------------------------------- 52 - linear search algorithm
// -- loop through an array and find the item you are lokking for
// ------------------------------------------------------------------------- 53 - linear search algorithm code

const linearSearch = (item: number, items: number[]): number => {
  for (let i = 0; i < items.length; i++) {
    if (item == items[i]) return i;
  }
  return -1;
};

console.log("Linear search result:", linearSearch(5, [1, 2, 3, 4, 5, 6, 7]));

// ------------------------------------------------------------------------- 55 - Binary search
// -- only works on ordered lists
// -- how it works:
// ---- first you get the item in the middle of the array
// ---- If it is the item you are looking for you return it
// ---- If it is not the item you are looking for and it is greater than the number you take the elements to the right of the middle number
// ---- If it is not the item you are looking for and it is less than the number you take the elements to the left of the middle number
// ---- and you repeat this process till you find your number or run out of items

// ------------------------------------------------------------------------- 56 - Binary search code

const binarySearch = (element: number, list: number[]): number => {
  let min = 0;
  let max = list.length - 1;
  while (min <= max) {
    const mid = min + Math.floor((max - min) / 2);
    if (list[mid] == element) return mid;
    else if (list[mid] < element) min = mid + 1;
    else max = mid - 1;
  }
  return -1;
};

console.log(
  "Binary search result:",
  binarySearch(5, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
);

// ------------------------------------------------------------------------- 58 - Binary search code with recursion

const binarySearchWithRecursion = (
  element: number,
  list: number[],
  offset: number = 0
): number => {
  let min = 0;
  let max = list.length - 1;
  const mid = Math.floor((max - min) / 2);
  if (list[mid] == element) return mid + offset;
  else if (list[mid] < element) {
    min = mid + 1;
    offset += mid + 1;
  } else max = mid;
  return binarySearchWithRecursion(element, list.slice(min, max + 1), offset);
};

console.log(
  "Binary search with recursion result:",
  binarySearchWithRecursion(5, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
);

// ------------------------------------------------------------------------- 70 - introduction to sorting algos module
// ------------------------------------------------------------------------- 71 - sorting
// -- What is sorting?
// ---- given a array of unsorted items we must be able to sort them in ascending  or descending order

// -- sorting algorithms order (fastest to slowest):
// ---- merge sort > quick sort > bubble sort

// ------------------------------------------------------------------------- 72 - bubble sort
// -- How it's done:
// ---- Compare two items at a time and sort them. Go through the entire array multiple times until all pairs were compared and sorted

// ------------------------------------------------------------------------- 73 - bubble sort code

const bubbleSort = (numbers: number[]): number[] => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] > numbers[j]) {
        const temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
      }
    }
  }
  return numbers;
};

// console.time("Bubble time");
console.log(
  `Bubble sorted array: ${bubbleSort([7, 1, 6, 9, 48, 42, 10, 3, 99, 4, 5])}`
);
// console.timeEnd("Bubble time");

// ------------------------------------------------------------------------- 74 - bubble sort time complexity
// -- best case: O(n)
// -- average case = O(n^2)
// -- wort case = O(n^2)

// ------------------------------------------------------------------------- 75 - quick sort
// -- How it's done:
// ---- Use pivot elements to split array into smaller chunks -  elements bigger, smaller and equal than the pivot element. Repeat that process for all chuncks and contact the sorted chunks

// ------------------------------------------------------------------------- 76 - quick sort code

const quickSort = (numbers: number[]): number[] => {
  const copiedNumbers = [...numbers];
  if (copiedNumbers.length <= 1) return copiedNumbers;
  const pivot = copiedNumbers.shift()!;
  const smallerNumbers: number[] = [];
  const biggerNumbers: number[] = [];
  const equalNumbers: number[] = [pivot];
  while (copiedNumbers.length) {
    const currElem = copiedNumbers.shift()!;
    if (currElem < pivot) smallerNumbers.push(currElem);
    else if (currElem == pivot) equalNumbers.push(currElem);
    else if (currElem > pivot) biggerNumbers.push(currElem);
  }
  const smallerNumbersSorted = quickSort(smallerNumbers);
  const biggerNumbersSorted = quickSort(biggerNumbers);
  return [...smallerNumbersSorted, ...equalNumbers, ...biggerNumbersSorted];
};

// console.time("Quick time");
console.log(
  `Quick sort algorithm: ${quickSort([7, 1, 6, 9, 48, 42, 10, 3, 99, 4, 5])}`
);
// console.timeEnd("Quick time");

// ------------------------------------------------------------------------- 77 - quick sort time complexity
// -- best case: O(n * log n)
// -- average case: O(n * log n)
// -- worst case: O(n^2)

// -- master theorem:
// ---- Recursive Step Runtime: O(n^logb(a)) => O(n^log2(2)) => O(n)     ↓
// ---- Runtime Outside of recursion: O(n)                               ↓
// ------ Algorithm runtime: O(n^logb(a) * log n) => O(n * log n)

// ------------------------------------------------------------------------- 78 - merge sort
// -- How it's done:
// ---- Split array multiple times unril we have only 2-element arrays left sort those arrays and merge them toghether

// ------------------------------------------------------------------------- 79 - merge sort code

const mergeSort = (numbers: number[]): number[] => {
  if (numbers.length < 2) return numbers;
  if (numbers.length == 2)
    return numbers[0] > numbers[1] ? [numbers[1], numbers[0]] : numbers;
  const middle = Math.floor(numbers.length / 2);
  const rightNumbers = numbers.slice(0, middle);
  const leftNumbers = numbers.slice(middle);
  const rightNumbersSorted = mergeSort(leftNumbers);
  const leftNumbersSorted = mergeSort(rightNumbers);
  const mergedNumbers: number[] = [];
  let rightNumberIndex = 0;
  let leftNumberIndex = 0;
  while (
    leftNumberIndex < leftNumbersSorted.length ||
    rightNumberIndex < rightNumbersSorted.length
  ) {
    if (
      leftNumberIndex >= leftNumbersSorted.length ||
      leftNumbersSorted[leftNumberIndex] > rightNumbersSorted[rightNumberIndex]
    ) {
      mergedNumbers.push(rightNumbersSorted[rightNumberIndex]);
      rightNumberIndex++;
    } else {
      mergedNumbers.push(leftNumbersSorted[leftNumberIndex]);
      leftNumberIndex++;
    }
  }
  return mergedNumbers;
};

// console.time("Merge time");
console.log(
  `Merge sort algorithm: ${mergeSort([7, 1, 6, 9, 48, 42, 10, 3, 99, 4, 5])}`
);
// console.timeEnd("Merge time");

// ------------------------------------------------------------------------- 80 - merge sort time complexity
// -- best case: O(n * log n)
// -- average case: O(n * log n)
// -- worst case: O(n * log n)

// -- master theorem:
// ---- Recursive Step Runtime: O(n^logb(a)) => O(n^log2(2)) => O(n)     ↓
// ---- Runtime Outside of recursion: O(n)                               ↓
// ------ Algorithm runtime: O(n^logb(a) * log n) => O(n * log n)

// ------------------------------------------------------------------------- 81 - Using algorithms considaration

// -- for smaller arrays bubble sort could be faster than merge sort But for long arrays merge sort is definitely faster

// ------------------------------------------------------------------------- 82 - space complexity
// -- Time Complexity is far more important than space complexity for comparing algorithms
// -- Module Introduction

// ------------------------------------------------------------------------- 83 - space complexity definition

// -- What is space complexity?
// ---- How much space in memory does your algorithm occupy?

// * All values in javascript are stored in memory
// * Arrays and objects take more space in memory
// * Generally, in javascript, you won't need to worry about space complexity and memory too much though

// ------------------------------------------------------------------------- 84 - Deriving space complexity

// -- 1. Find places where data (values) is stored "permanantly" in your algorithm
// -- 2. Count often such "permanently" stored  values are being created (and kept around)
// -- 3. Determine how the number of values depends on your "n"
// -- 4. O(n), O(1) etc. exists for space complexity as well

// ------------------------------------------------------------------------- 85 - space complexity examples (loop factorial)

// const loopFactSpaceComplexity = (num: number): number => {
//   let res = 2;
//   for (let i = 2; i < num; i++) {
//     res *= i;
//   }
//   return res;
// };

// -- this algorithm has a time complexity of O(1)
// -- reason: We operate one and the same number, no new ("permanent") value is created per iteration

// ------------------------------------------------------------------------- 86 - space complexity examples (recursive factorial)

// const recursiveFactSpaceComplexity = (num: number): number => {
//   if (num === 1) return num;
//   return num * recursiveFactSpaceComplexity(num - 1);
// };

// -- this algorithm has a time complexity of O(n)
// -- reason: A new value is created for every nested function call (the parameter received)

// ------------------------------------------------------------------------- 87 - space complexity examples (linear search)

// -- this algorithm has a time complexity of O(1)
// -- reason: No new "permanent" values are created during the iteration

// ------------------------------------------------------------------------- 88 - space complexity examples (binary search)

// -- this algorithm has a time complexity of O(1)
// -- reason: No new "permanent" values are created during the iteration

// ------------------------------------------------------------------------- 89 - space complexity examples (bubble sort)

// -- this algorithm has a time complexity of O(1)
// -- reason: No new "permanent" values are created during the iteration

// ------------------------------------------------------------------------- 90 - space complexity examples (quick sort)

// -- this algorithm has a time complexity of O(n) (O(log n is possible))
// -- reason: Nested function calls with new values being created

// ------------------------------------------------------------------------- 91 - space complexity examples (merge sort)

// -- this algorithm has a time complexity of O(n)
// -- reason: Nested function calls with new values being created

// ------------------------------------------------------------------------- 60 & 61 - sets
// -- What are sets:
// ---- A set is a collection of values (objects, numbers) wich forms an entity itself

// ------------------------------------------------------------------------- 62 - shopping items combinations

const cartProduct = <T, K>(setA: T[], setB: K[]): (T | K)[][] => {
  const products: (T | K)[][] = [];
  let itemA: T | T[];
  for (itemA of setA) {
    if (!Array.isArray(itemA)) itemA = [itemA];
    for (const itemB of setB) {
      products.push([...itemA, itemB]);
    }
  }
  return products;
};

const cartColors = ["balck", "red", "white"];
const cartSizes = ["small", "large"];
console.log(cartProduct(cartColors, cartSizes));

// ------------------------------------------------------------------------- 63 - shopping items combinations time complexity

// -- Time Complexity: O(n*m) => if both arrays have the same length => O(n^2)
// -- Space Complexity: O(n*m) => if both arrays have the same length => O(n^2)
// -- n = first array length - m = second array length

// ------------------------------------------------------------------------- 64 - shopping items combinations (for multiple items)

const cartision = <T>(...sets: T[][]): T[][] => {
  let res: T[][] | T[] = sets[0];
  for (let i = 1; i < sets.length; i++) {
    res = cartProduct(res as T[], sets[i]);
  }
  return res as T[][];
};

const cartStyles = ["v neck", "T-shirt"];
console.log(cartision(cartColors, cartSizes, cartStyles));

// -- 1. n is we assume that length of all arrays are the same
// -- 2. x is the number of arrays
// -- Time Complexity: O(n^x)
// -- Space Complexity: O(n^x)

// ------------------------------------------------------------------------- 65 - permutations

// -- What are permutations?
// ---- Permutations are all possible order of items of a list

// ------------------------------------------------------------------------- 66 - permutations without repetition

const getPermutationsWithoutRepetetion = <T>(items: T[]): T[][] => {
  if (items.length == 1) return [items];
  const permutations: T[][] = [];
  const partialPermutations = getPermutationsWithoutRepetetion(items.slice(1));
  const firstOption = items[0];
  for (let i = 0; i < partialPermutations.length; i++) {
    const partialPermutation = partialPermutations[i];
    for (let j = 0; j <= partialPermutation.length; j++) {
      const permutationInFront = partialPermutation.slice(0, j);
      const permutationAfter = partialPermutation.slice(j);
      permutations.push([
        ...permutationInFront,
        firstOption,
        ...permutationAfter,
      ]);
    }
  }
  return permutations;
};

const toDoList = [
  "walk the dog",
  "clean the bathroom",
  "buy groceries",
  "order food",
];

// console.log(getPermutationsWithoutRepetetion(toDoList));

// ------------------------------------------------------------------------- 67 - inspecting permutations without repetition with logs
// ------------------------------------------------------------------------- 68 - permutations without repetition time complexity

// -- Time Complexity: O(n!)

// ------------------------------------------------------------------------- 69 - permutations with repetition

const getPermutationsWithRepetetion = <T>(
  items: T[],
  length: number = items.length
): T[][] => {
  if (length == 1) return items.map((item) => [item]);
  const permutations: T[][] = [];
  const partialPermutations = getPermutationsWithRepetetion(items, length - 1);
  for (const item of items) {
    for (const existingPermutation of partialPermutations) {
      permutations.push([item, ...existingPermutation]);
    }
  }
  return permutations;
};

const digits = [1, 2, 3];

console.log(getPermutationsWithRepetetion(digits));

// -- Time Complexity: O(n^n)

// ------------------------------------------------------------------------ 28 - How to solve any problem
// -- steps to solving problems:
// ---- 1. verify the problem + problem inputs
// ---- 2. Think about a problem + derive a verbal solution (= think loudly )
// ---- 3. write down a first version
// ---- 4. derive time complexity and see if you can improve it

// ------------------------------------------------------------------------ 29 - ways of simplifying a problem
// -- ways of simplifying a problem:
// ---- 1. split into smaller sub problems. e.g.:
// ------ split arrays into chuncks
// ------ recursion
// ---- 2. add console.log() or break points to verify what is in your (temporary) variables
// ---- 3. use helper variables

// ------------------------------------------------------------------------ 30 - Advice
// -- summary:
// ---- practice makes perfect

// ------------------------------------------------------------------------ 31 - knapsack problem
// -- problem:
// ---- we got a list of items and every item has a value and a weihgt and we also got a bag that holds a maximum wetght of x.
// ---- write a program that maximized the values of the items you put in the bag whilst ensuring that you don't exceed the maximum weight.
// ---- e.g.:
// ------ const items: { name: string; value: number; weight: number }[] = [
// -------- { name: "a", value: 3, weight: 3 },
// -------- { name: "b", value: 8, weight: 8 },
// -------- { name: "c", value: 10, weight: 3 },
// ------ ];
// ------ maxWeight = 8;
// ------ result = ["a", 'b'];

// ------------------------------------------------------------------------ 32 - solving the knapsack problem
// -- solving the knapsack problem:
// ---- 1. verify inputs:
// ------ can items be used multiple times?
// ---- 2. derive a first (verbal) solution:
// ------ e.g.: We could derive all possible combinations and find the one with the highest value and fitting weight
// ---- 3. write down a first version

interface IKnapsackItem {
  name: string;
  value: number;
  weight: number;
}

const items: IKnapsackItem[] = [
  { name: "a", value: 3, weight: 3 },
  { name: "b", value: 8, weight: 8 },
  { name: "c", value: 10, weight: 3 },
];

// console.log(getPermutationsWithoutRepetetion(items));

// ------------------------------------------------------------------------ 33 - knapsack problem
// -- rethinking about solving the knapsack problem:
// ---- check every possible combination of items
// ---- e.g.: Do I  include the first item in the final result or not if yes would I include the next one if no whould I include the next one?
// ------ Choose a:
// -------- if yes (And the wight will stay below maximum weight): What would the weight and the value be?
// -------- if no: What would the weight and the value be?

// ------------------------------------------------------------------------ 34 - finally solving the knapsack problem

interface IKnapsackResult {
  items: IKnapsackItem[];
  value: number;
  weight: number;
}

const knapsack = (
  items: IKnapsackItem[],
  maxWeight: number,
  itemIndex: number = items.length - 1,
  // 35 - mempization
  memo: IKnapsackResult[][] = Array.from(
    Array(maxWeight + 1),
    () => Array(items.length).fill(undefined)
    // 35 - mempization --
  )
): IKnapsackResult => {
  // 35 - mempization
  if (memo[maxWeight][itemIndex]) return memo[maxWeight][itemIndex];
  // 35 - mempization --
  if (maxWeight === 0 || itemIndex < 0)
    return { items: [], value: 0, weight: 0 };
  if (maxWeight < items[itemIndex].weight)
    return knapsack(items, maxWeight, itemIndex - 1, memo);
  const sackWithItem = knapsack(
    items,
    maxWeight - items[itemIndex].weight,
    itemIndex - 1,
    memo
  );
  const sackWithoutItem = knapsack(items, maxWeight, itemIndex - 1, memo);

  const valueWithItem = sackWithItem.value + items[itemIndex].value;
  const valueWithoutItem = sackWithoutItem.value;
  let resultSack: IKnapsackResult;
  if (valueWithItem > valueWithoutItem)
    resultSack = {
      items: [...sackWithItem.items, items[itemIndex]],
      value: valueWithItem,
      weight: sackWithItem.weight + items[itemIndex].weight,
    };
  else resultSack = sackWithoutItem;
  memo[maxWeight][itemIndex] = resultSack;
  return resultSack;
};

// ------------------------------------------------------------------------ 35 - knapsack time complexity

console.log(knapsack(items, 20));

// -- Time Complexity (without memoization): O(2^n)
// -- Time Complexity (with memoization): O(n*maxWeight)

// ------------------------------------------------------------------------ 36 - Greedy vs dynamic algorithms

// -- Greedy Algorithm:
// ---- Make best posiible decision in every step and hope that it leads to the overall best solution
// ---- Greedy algorithms often are faster to set up and come up with but they don't necessarily provide the best runtime and/or result

// -- Dynamic Algorithm:
// ---- Evaluate all possible solutions and find overall vest solution via comparison
// ---- "Divide and conquer" approach:
// ------ Divide the problem into smaller, easy-to-solve subproblems

// ------------------------------------------------------------------------ 37 - Greedy Knapsack problem
// -- It's bad don't do it

// ------------------------------------------------------------------------ 38 - final problem solving plan

// -- 1. Verify input / problems
// -- 2. Think about the problem + verbal solution ↓                                                       ←----
// --------------------------------------------------→ Maybe go with a simple, gridy approach first            ↑
// -- 3. Write down a first version                ↑                                                           ↑
// -- 4. Verify results -----------------------------→ try different inputs                                    ↑
// -- 5. Derive Time Complexity                                                                                ↑
// -- 6. Explore alternative approaches -----------------------------------------------------------------------↑

// ------------------------------------------------------------------------ 39 - Change making problem

// -- given a list of coins and a target find how to reach the target using the least amout of coins

// ------------------------------------------------------------------------ 40 - Change making problem code

interface IChangeResult {
  selectedCoins: Record<number, number>;
  numberOfCoins: number;
}

const computeChange = (coins: number[], target: number): IChangeResult => {
  let remainingAmount = target;
  const calculatedChange: IChangeResult = {
    selectedCoins: {},
    numberOfCoins: 0,
  };
  for (const coin of coins) {
    const count = Math.floor(remainingAmount / coin);
    calculatedChange.selectedCoins[coin] = count;
    calculatedChange.numberOfCoins += count;
    remainingAmount -= coin * count;
  }
  return calculatedChange;
};

const availableCoins = [100, 50, 20, 10, 5, 2, 1];
const targetAmount = 129;

console.log(computeChange(availableCoins, targetAmount));

// -- Time Complexity: O(n)
// -- Time Complexity: If we assume that coins array is always the same we will then have O(1)

// ------------------------------------------------------------------------ 41 - Change making problem code (with changing coins)

const computeChangeBruteForce = (
  coins: number[],
  target: number
): IChangeResult => {
  const result: IChangeResult[] = [];
  for (let i = 0; i < coins.length; i++) {
    result.push(computeChange(coins.slice(0), target));
  }
  let finalResult = result[0];
  for (let i = 0; i < result.length; i++) {
    if (result[i].numberOfCoins < finalResult.numberOfCoins)
      finalResult = result[i];
  }
  return finalResult;
};

console.log(computeChangeBruteForce(availableCoins, targetAmount));

// -- Time Complexity: O(n^2)
// -- Time Complexity of Greedy Algo (VID-40): O(n)

/*
master theorem: (When spliting input into smaller chuncks and using recursion)
  How do you derive Big O for more complex recursive algorithms?
    Overall algorithm runtime (time complexity) - three cases:
      Recurdion does more work:
        O(n^(logb(a)))
      Same work inside and outside of recursion:
        O(n^(logb(a)) * log n)
      Non-recursive part does more work:
        O(f(n))
    
    Where:
      a = the number of subproblems (number of reecursion splits)
      b = the relative subproblem size (input split)
      f(n) = the runtime outside of the recursion
*/

// ------------------------------------------------------------------------ 49 - FINISH

// -- Practice, practice and practice
// -- Din't try to learn algorithms by heart

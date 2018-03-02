# API

#### Index

<details>
<summary>Mathematics</summary>

- [average](#m-average)
- [baseChange](#m-baseChange)
- [catalan](#m-catalan)
- [clamp](#m-clamp)
- [combination](#m-combination)
- [cosineRule](#m-cosineRule)
- [countPrimeFactors](#m-countPrimeFactors)
- [degToRad](#m-degToRad)
- [digitalRoot](#m-digitalRoot)
- [division](#m-division)
- [doubleFactorial](#m-doubleFactorial)
- [euclideanDistance](#m-euclideanDistance)
- [factCountTrailingZeroes](#m-factCountTrailingZeroes)
- [factorialOneLine](#m-factorialOneLine)
- [factorialRecursive](#m-factorialRecursive)
- [factorialIterative](#m-factorialIterative)
- [fibRecursion](#m-fibRecursion)
- [fibDynamic](#m-fibDynamic)
- [geometricVariance](#m-geometricVariance)
- [gcd](#m-gcd)
- [hammingDistance](#m-hammingDistance)
- [isDivisible](#m-isDivisible)
- [isEven](#m-isEven)
- [isOdd](#m-isOdd)
- [isPrime](#m-isPrime)
- [integerReversal](#m-integerReversal)
- [lcm](#m-lcm)
- [leibniz](#m-leibniz)
- [lineFromPoints](#m-lineFromPoints)
- [maxOrMin](#m-maxOrMin)
- [median](#m-median)
- [nthSGonalNumber](#m-nthSGonalNumber)
- [nthRoot](#m-nthRoot)
- [permutation](#m-permutation)
- [pythagorasTheorem](#m-pythagorasTheorem)
- [radToDeg](#m-radToDeg)
- [round](#m-round)
- [sigmoid](#m-sigmoid)
- [slopeOfALine](#m-slopeOfALine)
- [subtract](#m-subtract)
- [sineRule](#m-sineRule)
</details>

<details>
<summary>Algorithms</summary>

- [binarySearch](#a-binarySearch)
- [bubbleSort](#a-bubbleSort)
- [chunk](#a-chunk)
- [collatz](#a-collatz)
- [concat](#a-concat)
- [fisherYates](#a-fisherYates)
- [fizzBuzz](#a-fizzBuzz)
- [flatten](#a-flatten)
- [insertionSort](#a-insertionSort)
- [linearSearch](#a-linearSearch)
- [modularExponential](#a-modularExponential)
- [nthLargest](#a-nthLargest)
- [remove](#a-remove)
- [removeDuplicates](#a-removeDuplicates)
- [reverse](#a-reverse)
- [segregate](#a-segregate)
- [selectionSort](#a-selectionSort)
</details>

## Mathematics
> functions performing mathematics

---

#### `average(arr)` <a id="m-average"></a>
Takes an average of any numerical array as an input.

```javascript
const average = mathematics.average([5,6,7,8]);
console.log(average);
// 6.5
```
---

#### `baseChange(number, originalBase, finalBase)` <a id="m-baseChange"></a>
Change the `originalBase` of a number to `finalBase`

```javascript
const baseChange = mathematics.baseChange(521, 10, 2);
console.log(baseChange);
// 1000001001
```
---

#### `catalan(number)` <a id="m-catalan"></a>

Catalan numbers form a sequence of natural numbers that occur in various counting problems, often involving recursively-defined objects. [Wikipedia](https://en.wikipedia.org/wiki/Catalan_number)

The function returns the nth catalan number.

```javascript
const catalan = mathematics.catalan(5);
console.log(catalan);
// 42
```

---

#### `clamp(number)` <a id="m-clamp"></a>

In computer science, the word clamp is used as a way to restrict a number between two other numbers.

```javascript
const clamp = mathematics.clamp(42, 1337, 9000);
console.log(clamp);
// 1337
```

---

#### `combination(number, rep)` <a id="m-combination"></a>

Calculates simple combination of a number. 

```javascript
const combination = mathematics.combination(7, 2);
console.log(combination);
// 21
```

#### `cosineRule(sideOne, sideTwo, theta)` <a id="m-cosineRule"></a>

Apply cosine rule to a triangle having 2 sides with one angle to find the remaining side.

```javascript
const cosine = mathematics.cosineRule(15, 90, 30);
console.log(cosine);
// 77.37
```

---

#### `countPrimeFactors(n)` <a id="m-countPrimeFactors"></a>

In number theory, the prime factors of a positive integer are the prime numbers that divide that integer exactly. [Wikipedia](https://en.wikipedia.org/wiki/Prime_factor) 

```javascript
const countPF = mathematics.countPrimeFactors(35);
console.log(countPF);
// 4
```

---

#### `degToRad(deg)` <a id="m-degToRad"></a>

Convert degrees to radians. 

```javascript
const degToRad = mathematics.degToRad(180);
console.log(degToRad);
// 3.14...
```

---

#### `digitalRoot(number)` <a id="m-digitalRoot"></a>

Calculate the [digital root](https://en.wikipedia.org/wiki/Digital_root) of a number. 

```javascript
const digRoot = mathematics.digitalRoot(265);
console.log(digRoot);
// 4
```

---

#### `division(dividend, divisor)` <a id="m-division"></a>

Simple mathematical division.

```javascript
const division = mathematics.division(25,5);
console.log(division);
// 5
```

---

#### `doublefactorial(n)` <a id="m-doubleFactorial"></a>

Double factorial of a non-integer `n` is the product of all integers from 1 to n that have the same parity i.e odd or even

```javascript
const doubleF = mathematics.doublefactorial(7);
console.log(doubleF);
// 105
```

---

#### `euclideanDistance(initial, final)` <a id="m-euclideanDistance"></a>

Calculates the [euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance) between two points in any plane.

```javascript
const eucl = mathematics.euclideanDistance([5, 3], [8, 6]);
console.log(eucl);
// 4.24
```

---

#### `factorialOneLine(n)` <a id="m-factorialOneLine"></a>

A one-line code for factorial of a number.

```javascript
const factOne = mathematics.factorialOneLine(5);
console.log(factOne);
// 120
```

---

#### `factorialRecursive(n)` <a id="m-factorialRecursive"></a>

Recursively calculate factorial of a given number `n`.

```javascript
const factRec = mathematics.factorialRecursive(4);
console.log(factRec);
// 24
```

---

#### `factorialIterative(n)` <a id="m-factorialIterative"></a>

Log out factorial of a given number `n` by iterative approach.

```javascript
const factIter = mathematics.factorialIterative(6);
console.log(factIter);
// 720
```

---

#### `factCountTrailingZeroes(n)` <a id="m-factCountTrailingZeroes"></a>

Count the trailing zeroes in `n` factorial.

```javascript
const countTrailingZeroes = mathematics.factCountTrailingZeroes(100);
console.log(countTrailingZeroes);
// 24
```

---

#### `fibRecursion(n)` <a id="m-fibRecursion"></a>

Recursively find the `nth` fibonacci number.

```javascript
const fibRec = mathematics.fibRecursion(8);
console.log(fibRec);
// 21
```

---

#### `fibDynamic(n)` <a id="m-fibDynamic"></a>

Use Dynamic Programming approach to find `nth` fibonacci number.

```javascript
const fibDyn = mathematics.fibDynamic(7);
console.log(fibDyn);
// 13
```

---

#### `geometricVariance(probability)` <a id="m-geometricVariance"></a>

Given `probability` to calculate [geometric variance](https://en.wikipedia.org/wiki/Geometric_distribution)

```javascript
const geom = mathematics.geometricVariance(0.5);
console.log(geom);
// 2
```

---

#### `gcd(numb1, numb2)` <a id="m-gcd"></a>

Returns [GCD](https://en.wikipedia.org/wiki/Greatest_common_divisor) of the the two numbers.

```javascript
const gcd = mathematics.gcd(16, 48);
console.log(gcd);
// 16
```

---

#### `hammingDistance(number1, number2)` <a id="m-hammingDistance"></a>

Calculates the [hamming distance](https://en.wikipedia.org/wiki/Hamming_distance) between two numbers.

```javascript
const hamming = mathematics.hammingDistance(1, 4);
console.log(hamming);
// 2
```

---

#### `isDivisible(dividend, divisor)` <a id="m-isDivisible"></a>

Returns `true` if divisible.

```javascript
const divisible = mathematics.isDivisible(25, 4);
console.log(divisible);
// false
```

---

#### `isEven(number)` <a id="m-isEven"></a>

Returns `true` if even.

```javascript
const even = mathematics.isEven(95);
console.log(even);
// false
```

---

#### `isOdd(number)` <a id="m-isOdd"></a>

Returns `true` if odd.

```javascript
const odd = mathematics.isEven(7);
console.log(odd);
// true
```

---

#### `isPrime(number)` <a id="m-isPrime"></a>

Returns `true` if `number` is prime.

```javascript
const prime = mathematics.isPrime(13);
console.log(prime);
// true
```

---

#### `integerReversal(integer)` <a id="m-integerReversal"></a>

Reverse an integer with signs.

```javascript
const intReverse = mathematics.integerReversal(-56);
console.log(intReverse);
// -65
```

---

#### `lcm(arr)` <a id="m-lcm"></a>

Returns the lcm of an array of numbers.

```javascript
const lcm = mathematics.lcm([2,4,6,5]);
console.log(lcm);
// 60
```

---

#### `leibniz(limit)` <a id="m-leibniz"></a>

Returns a predicted value of PI using [lebniz algorithm](https://en.wikipedia.org/wiki/Leibniz_formula_for_π)

```javascript
const leb = mathematics.leibniz([2,4,6,5]);
console.log(leb);
// 3.1465677471829556
```

---

#### `lineFromPoints(initial, final)` <a id="m-lineFromPoints"></a>

Creates a line or returns an equation of created lines provided arrays of `initial` & `final` points.

```javascript
const eqn = mathematics.lineFromPoints([2,4], [4,6]);
console.log(eqn);
// '2x + -2y = -4'
```

---

#### `maxOrMin(arr, task)` <a id="m-maxOrMin"></a>

Returns the maximum or minimum of an array according to task provided.

1. task = `'MAX'`, returns maximum.
2. task = `'MIN'`, returns minimum.

```javascript
const maxOrmin = mathematics.maxOrMin([5,8,3,1,4], 'MAX');
console.log(maxOrmin);
// 8
```

---

#### `median(arr)` <a id="m-median"></a>

Returns the median of an array.

```javascript
const median = mathematics.median([2,4,6,5,8,7]);
console.log(median);
// 5.5
```

---

#### `nthSGonalNumber(sides, number)` <a id="m-nthSGonalNumber"></a>

Calculates the nth s-gonal number of `'sides'` polygon

```javascript
const sgonal = mathematics.nthSGonalNumber(5,10);
console.log(sgonal);
// 145
```

#### `nthRoot(number, power)` <a id="m-nthRoot"></a>

Returns the nth root of a given `number`.

```javascript
const nthroot = mathematics.nthRoot(125, 3);
console.log(nthroot);
// 5
```

---

#### `permutation(number, rep)` <a id="m-permutation"></a>

Perform permutation.

```javascript
const permutation = mathematics.permutation(10, 4);
console.log(permutation);
// 5040
```

---

#### `pythagorasDistance(side1, side2)` <a id="m-pythagorasTheorem"></a>

Calculate the pythagorean distance of a triangle.

```javascript
const pyth = mathematics.pythagorasDistance(3,4);
console.log(pyth);
// 5
```

---

#### `radToDeg(rad)` <a id="m-radToDeg"></a>

Convert radians to degrees.

```javascript
const radToDeg = mathematics.radToDeg(1);
console.log(radToDeg);
// 57.2958
```

---

#### `round(number)` <a id="m-round"></a>

Round off a number to two decimal places.

```javascript
const round = mathematics.round(12.0005);
console.log(round);
// 12
```

---

#### `sigmoid(number)` <a id="m-sigmoid"></a>

A sigmoid function is a mathematical function having a characteristic "S"-shaped curve or sigmoid curve. [Sigmoid Function](https://en.wikipedia.org/wiki/Sigmoid_function)

```javascript
const sigmoid = mathematics.sigmoid(0.05);
console.log(sigmoid);
// 0.5124973964842104
```

---

#### `slopeOfALine(arg)` <a id="m-slopeOfALine"></a>

Calculates slope of a 2D line using `arg`.

`arg` can be in degrees or in form of points `[x1, y1][x2,y2]`.

```javascript
const slope = mathematics.slopeOfALine(60);
console.log(slope);
// 1.732...
```

---

#### `subract(firstNum, secondNum)` <a id="m-subtract"></a>

Simple mathematical subtraction operation.

```javascript
const subract = mathematics.subract(40,20);
console.log(subract);
// 20
```

---

#### `sumOfArray(arr)` <a id="m-sumOfArray"></a>

Returns the total sum of an array.

```javascript
const sumOfArray = mathematics.sumOfArray([100,200,300,400]);
console.log(sumOfArray);
// 1000
```

---

#### `sineRule(sideOne, angleOne, angleTwo)` <a id="m-sineRule"></a>

Apply sine rule to a triangle having 2 angles with one side to find the remaining side.

```javascript
const sine = mathematics.sineRule(5, 60, 45);
console.log(sine);
// 6.12
```

## Algorithms
> functions which solve a problem

---

#### `binarySearch(arr, elem)` <a id="a-binarySearch"></a>

Search an `elem` in an `arr` using the traditional Binary Search Technique.
Returns the index.

```javascript
const bSearch = algorithms.binarySearch([6, 5, 4, 2, 3, 5], 2);
console.log(bSearch);
// 3
```

---

#### `bubbleSort(arr)` <a id="a-bubbleSort"></a>

Sort an `arr` using Bubble Sort Technique.

```javascript
const bSort = algorithms.bubbleSort([6, 5, 4, 2, 3, 5]);
console.log(bSort);
// [2, 3, 4, 5, 5, 6]
```

---

#### `chunk(arr, size)` <a id="a-chunk"></a>

Split a given `arr` into chunks of array of given `size`.

```javascript
const chunk = algorithms.chunk([6, 5, 4, 2, 3, 5, 8, 9, 4, 1], 2);
console.log(chunk);
// [ [ 6, 5 ], [ 4, 2 ], [ 3, 5 ], [ 8, 9 ], [ 4, 1 ] ]
```

---

#### `collatz(number)` <a id="a-collatz"></a>

The Collatz conjecture is a conjecture in mathematics that concerns a sequence defined as follows: start with any positive integer n. Then each term is obtained from the previous term as follows: if the previous term is even, the next term is one half the previous term. Otherwise, the next term is 3 times the previous term plus 1. The conjecture is that no matter what value of n, the sequence will always reach 1. [Wikipedia](https://en.wikipedia.org/wiki/Collatz_conjecture)

```javascript
const collatz = algorithms.collatz(4);
console.log(collatz);
// [ 4, 2, 1 ]
```

---

#### `concat(...arrs)` <a id="a-concat"></a>

Concantenate arrays into a single array.

```javascript
const concat = algorithms.concat([1,2], [8,9]);
console.log(concat);
// [1, 2, 8, 9]
```

---

#### `fisherYates(arr)` <a id="a-fisherYates"></a>

The Fisher–Yates shuffle is an algorithm for generating a random permutation of a finite sequence—in plain terms, the algorithm shuffles the sequence. [Wikipedia](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)

```javascript
const fisherYates = algorithms.fisherYates([100,40,60,80,20]);
console.log(fisherYates);
// A shuffled array
```

---

#### `fizzBuzz(n)` <a id="a-fizzBuzz"></a>

The classic FizzBuzz Algorithm. [Wikipedia](https://en.wikipedia.org/wiki/Fizz_buzz)

```javascript
const fizz = algorithms.fizzBuzz(8);
console.log(fizz);
// ... ;) :D
```

---

#### `flatten(arr, givenArr)` <a id="a-flatten"></a>

Merge two arrays together.

```javascript
const flatten = algorithms.flatten([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]);
console.log(flatten);
// [ 6, 7, 8, 9, 10, 1, 2, 3, 4, 5 ]
```

---

#### `insertionSort(arr)` <a id="a-insertionSort"></a>

Sort an array using the Insertion Sort Technique. [Wikipedia](https://en.wikipedia.org/wiki/Insertion_sort)

```javascript
const insertionSort = algorithms.insertionSort([5,2,3,9]);
console.log(insertionSort);
// [2,3,5,9]
```

---

#### `linearSearch(arr, elem)` <a id="a-linearSearch"></a>

Search an `elem` using the Linear Search Technique. [Wikipedia](https://en.wikipedia.org/wiki/Linear_search)

```javascript
const linearSearch = algorithms.linearSearch([1,5,2,3,9,4], 2);
console.log(linearSearch);
// 2
```

---

#### `modularExponential(base, power, mod)` <a id="a-modularExponential"></a>

Modular exponentiation is a type of exponentiation performed over a modulus. It is useful in computer science, especially in the field of public-key cryptography. 
[Wikipedia](https://en.wikipedia.org/wiki/Modular_exponentiation)

```javascript
const modularExponential = algorithms.modularExponential(10,5,6);
console.log(modularExponential);
// 4
```

---

#### `nthLargest(arr, nth)` <a id="a-nthLargest"></a>

Find the nth largest number in an `arr` of numbers.

```javascript
const nthLargest = algorithms.nthLargest([1,5,2,3,9,4], 2);
console.log(nthLargest);
// 5
```

---

#### `remove(arr, elem)` <a id="a-remove"></a>

Remove an `elem` from a given `arr`. 

```javascript
const remove = algorithms.remove([8,1,0,8,9,6,0,0,7,2], 1);
console.log(remove);
// [ 8, 0, 8, 9, 6, 0, 0, 7, 2 ]
```

---

#### `removeDuplicates(arr)` <a id="a-removeDuplicates"></a>

Remove duplicates from a given `arr`.

```javascript
const removeDuplicates = algorithms.removeDuplicates([9,8,6,7,6,4,5,2,9,7]);
console.log(removeDuplicates);
// [ 2, 4, 5, 6, 7, 8, 9 ]
```

---

#### `reverse(arr)` <a id="a-reverse"></a>

Reverse an array.

```javascript
const reverse = algorithms.reverse([1,4,3,6]);
console.log(reverse);
// [6,3,4,1]
```

---

#### `segregate(arr)` <a id="a-segregate"></a>

Segregate 0's and 1's in an array.

```javascript
const segregate = algorithms.segregate([0, 1, 0, 0, 0, 1, 1, 1, 0]);
console.log(segregate);
// [ 0, 0, 0, 0, 0, 1, 1, 1, 1 ]
```

---

#### `selectionSort(arr)` <a id="a-selectionSort"></a>

Another technique known as Selection Sort to sort arrays.

```javascript
const selectionSort = algorithms.selectionSort([-1, -2, -3, 0, 1, 2]);
console.log(selectionSort);
// [ -3, -2, -1, 0, 1, 2 ]
```

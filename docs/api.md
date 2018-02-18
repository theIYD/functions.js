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
- [euclideanDistance](m-euclideanDistance)
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

---

#### `countPrimeFactors(n)` <a id="m-countPrimeFactors"></a>

In number theory, the prime factors of a positive integer are the prime numbers that divide that integer exactly. [Wikipedia](https://en.wikipedia.org/wiki/Prime_factor) 

```javascript
const countPF = mathematics.countPrimeFactors(35);
console.log(countPF);
// 4
```

---

#### `degToRad(deg)` <a id="m-countPrimeFactors"></a>

Convert degrees to radians. 

```javascript
const degToRad = mathematics.degToRad(180);
console.log(degToRad);
// 3.14...
```
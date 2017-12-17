![](https://github.com/theIYD/functions.js/blob/master/media/functionsjs.png)

# functions.js

> **functions.js** is a hub of various functions or methods which act differently according to their functionality.

 - Please feel free to contribute, read the <a href="https://github.com/theIYD/functions.js/blob/master/CONTRIBUTING.md">contributing guide</a>.
 - The code is written in ES6.

## Install

The project is up on <a href="https://www.npmjs.com/package/functions.js">npm</a> and can be used in a project by: 

```
npm install --save functions.js

```
## Usage

Below is an example on how to use the library into your projects.

```js

const func = require('functions.js');

console.log(func.StringFunc.SecureEmail('helloworld@example.com'));
//returns 'he********@example.com'

console.log(func.MathFunc.EuclideanDistance([3,4,5], [8,7,9]));
//returns '7.0710678118654755'

console.log(func.AlgoFunc.Reverse([17,65,100,32,98,14,25]));
//returns '[25,14,98,32,100,65,17]'

console.log(func.StringFunc.hasAtleastOneLowerCaseLetter('HELLoWORLD'));
//returns 'true'
```
## Methods 

| Method Name | Category | Description | Return Type |
| ------------| ------------| ------------| ------------|
|`average(arr)` |math |Calculates the average of an array |number |
|`binarySearch(arr, elem)` |algorithm |Search an element using binary search tehcnique |number(position) |
|`bubbleSort(arr)` |algorithm |Sort an array using bubble sort technique |array |
|`camelize(str)` |string |Camelize a string i.e CamelCase |string |
|`changeBase(number, original, final)` |math |Convert a base of a number to any base. |number |
|`combination(number,rep)` |math |Calculates simple combination. |number |
|`concat(...arrs)` |algorithm |Concatenates into a single array. |arr |
|`countPrimeFactors(n)` |math |A function to count all prime factors of a given number. |number |
|`countVowels(str)` |string |Count the number of vowels in a string. |number |
|`doublefactorial(n)` |math |Print semi-factorial or double factorial of number using the iterative approach. |number |
|`escape(str)` |string |Escape characters from string |string |
|`euclideanDistance(initial, final)` |math |Calculates the distance between two points in any plane. initial takes an array of initial points & final takes an array of final points. |number |
|`evenOrOdd(number)` |math |Number is even or odd |boolean |
|`factorialRecursive(n)` |math |Print factorial of a number using recursive function approach. |number |
|`factorialIterative(n)` |math |Print factorial of a number using iterative approach. |number |
|`factorialOneLine(n)` |math |Print factorial of a number using a ternary operator. |number |
|`factCountTrailingZeroes(n)` |math |Print the count of trailing zeroes in n!. |number |
|`fibRecursion(n)` |math |Print nth fibonacci number using recursion. |number |
|`fibDynamic(n)` |math |Print nth fibonacci number using dynamic programming approach. |number |
|`filter(arr, elem)` |string |Filter out an element from an array |array |
|`filterFalsy(arr)` |string |Filter out falsy values from an array |array |
|`fisherYates(arr)` |math |Shuffle an array using the Fisher Yates Algorithm using a while loop. |array |
|`gcd(numb1, numb2)` |math |Calculate the greatest common divisor among the two numbers using Euclideans algorithm. |number |
|`guid(len)` |string |Generate a Global Unique Identifier |string |
|`hasAtleastOneUpperCaseLetter(str)` |string |String has atleast one upper-cased letter. |boolean |
|`hasAtleastOneLowerCaseLetter(str)` |string |String has atleast one lower-cased letter. |boolean |
|`isASCII(str)` |string |String contains ASCII characters |boolean |
|`isBool(str)` |string |String contains true or false |boolean |
|`isDataURI(str)` |string |String is a data uri format. |boolean |
|`isEmpty(str)` |string |String is empty. |boolean |
|`isEndWith(str, target)` |string |String ends with target. |boolean |
|`isEquals(str, elem)` |string |Compares the two strings entered. |boolean |
|`isHexaDecimal(str)` |string |String is hexadecimal. |boolean |
|`isHexColor(str)` |string |String is a hex color. |boolean |
|`isIPAddress(str)` |string |String is an IP address. |boolean |
|`isLowerCase(str)` |string |String is all lower-cased. |boolean |
|`isMACAddress(str)` |string |String is a MAC Address. |boolean |
|`isMD5(str)` |string |String is a a MD5 type. |boolean |
|`initials(str)` |string |Get the initials of a persons name. |string |
|`ISO8601WeekNumber(dateObj)` |string |Get ISO-8601 week number of a year. |number |
|`isPalindrome(str)` |string |String is a palindrome. |boolean |
|`isUpperCase(str)` |string |String is all upper-cased. |boolean |
|`isValidEmail(str)` |string |String is a valid email id. |boolean |
|`linearSearch(arr, elem)` |algorithm |Search an element using linear search technique |number(position) |
|`maxOrMin(arr, task)` |math |Get maximum or minimum of an array |number |
|`nthRoot(number, n)` |math |Calculates the nth root of a positive number |number |
|`permutation(num,rep)` |math |Calculates simple permutation. |number |
|`pythagorasDistance(arg1, arg2)` |math |Calculate the pythogorean distance if arg1 and arg2 are 2 sides of a right-angled triangle. |number |
|`remove(arr)` |algorithm |Remove an element from an array |arr |
|`reverse(arr)` |algorithm |Reverse an array |arr |
|`rgbToHex(red,green,blue)` |string |RGB to Hex format |string |
|`secureEmail(str)` |string |Secures your email using asterisks |string |
|`selectionSort(arr)` |algorithm |Sort an array using the selection sort technique |arr |
|`slopeOfALine(arg)` |math |Calculates the slope of a line using points and angle of inclination. arg takes angle of inclination or an array of initial points and final points. Example arg = 60 degrees or [x0,y0,x1,y1] |number |
|`sumOfArray(arr)` |math |Addition of all the integers in an array |number |


## About
 The project is a continuation to a package previously owned by me named **<a href="https://www.npmjs.com/package/okay-string">okay-string</a>**. I thought of renaming it to <em>functions</em> & learn more by actually practicing functions. That's how <code>functions.js</code> was created.😍

## License
 The project is licensed under <a href="https://github.com/theIYD/functions.js/blob/master/LICENSE">MIT</a>
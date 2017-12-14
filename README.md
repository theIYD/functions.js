![](https://github.com/theIYD/functions.js/blob/master/media/functionsjs.png)

# functions.js

> **functions.js** is a hub of various functions or methods which act differently according to their functionality.

 - Please feel free to contribute, read the ![contributions guide](https://github.com/theIYD/functions.js/blob/master/CONTRIBUTING.md).
 - The code is written in ES6.

## Install

The project is up on ![npm]() and can be used in a project by: 

```
npm install --save functions.js

```
## Usage

Below is an example on how to use the library into your projects.

```js

const func = require('functions.js');

console.log(func.MathFunc.Pythagoras.pythagorasDistance(3,4));
//returns '5'

console.log(func.StringFunc.stringfunc.isItHexColor('#fc3'));
//returns 'true'
```
## Methods 

| Method Name | Category | Description | Return Type |
| ------------| ------------| ------------| ------------|
|`countPrimeFactors(n)` |math |A function to count all prime factors of a given number. |number |
|`factorialRecursive(n)` |math |Print factorial of a number using recursive function approach. |number |
|`factorialIterative(n)` |math |Print factorial of a number using iterative approach. |number |
|`factorialOneLine(n)` |math |Print factorial of a number using a ternary operator. |number |
|`doublefactorial(n)` |math |Print semi-factorial or double factorial of number using the iterative approach. |number |
|`factCountTrailingZeroes(n)` |math |Print the count of trailing zeroes in n!. |number |
|`fibRecursion(n)` |math |Print nth fibonacci number using recursion. |number |
|`fibDynamic(n)` |math |Print nth fibonacci number using dynamic programming approach. |number |
|`fisherYates(arr)` |math |Shuffle an array using the Fisher Yates Algorithm using a while loop. |array |
|`gcd(numb1, numb2)` |math |Calculate the greatest common divisor among the two numbers using Euclideans algorithm. |number |
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
|`isPalindrome(str)` |string |String is a palindrome. |boolean |
|`isUpperCase(str)` |string |String is all upper-cased. |boolean |
|`isValidEmail(str)` |string |String is a valid email id. |boolean |
|`maxOrMin(arr, task)` |math |Get maximum or minimum of an array |number |
|`pythagorasDistance(arg1, arg2)` |math |Calculate the pythogorean distance if arg1 and arg2 are 2 sides of a right-angled triangle |number |


## License
 The project is licensed under ![MIT](https://github.com/theIYD/functions.js/blob/master/LICENSE)
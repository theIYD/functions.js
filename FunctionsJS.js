(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("FunctionsJS", [], factory);
	else if(typeof exports === 'object')
		exports["FunctionsJS"] = factory();
	else
		root["FunctionsJS"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isString = function isString(input) {
    if (!(typeof input === 'string' || input instanceof String)) {
        throw new TypeError('Enter String Only !');
    }
};

/**
 * Courtesy: https://github.com/chriso/validator.js/blob/master/src/lib/util/toString.js
 */
var convertString = function convertString(arg) {
    if (!input && (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object') {
        if (typeof arg.convertString === 'function') {
            arg = arg.convertString();
        } else {
            arg = '[object Object]';
        }
    } else if (arg === null || typeof arg === 'undefined' || !arg.length && isNaN(arg)) {
        arg = '';
    }

    return String(arg);
};

module.exports = { isString: isString, convertString: convertString };

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var RegexPatterns = function RegexPatterns(str) {
  var obj = {
    email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    md5: /^[a-f0-9]{32}$/,
    hexcolor: /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i,
    mac: /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/,
    ascii: /^[\x00-\x7F]+$/,
    ip: /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
    hexdecimal: /[0-9a-fA-F]+/,
    dataURI: /^\s*data:([a-z]+\/[a-z0-9\-\+]+(;[a-z\-]+=[a-z0-9\-]+)?)?(;base64)?,[a-z0-9!\$&',\(\)\*\+,;=\-\._~:@\/\?%\s]*\s*$/i,
    emoji: /(?:[\xA9\xAE\u2122\u23E9-\u23EF\u23F3\u23F8-\u23FA\u24C2\u25B6\u2600-\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDE51\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F\uDE80-\uDEFF]|\uD83E[\uDD00-\uDDFF])/g
  };

  var temp = void 0;
  Object.keys(obj).forEach(function (i) {
    if (i === str) {
      temp = obj[i];
    }
  });

  return temp;
};

module.exports = {
  RegexPatterns: RegexPatterns
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Method 1: Recursive Function
 * @function factorialRecursive: Print factorial of a number using recursive function approach
 * Time complexity is O(n).
 * @param {Number} n - a number
 * @returns {Number}
 */
var factorialRecursive = function factorialRecursive(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorialRecursive(n - 1);
    }
};

/**
 * Method 2: Iterative 
 * @function factorialIterative: Print factorial of a number using iterative approach
 * @param {Number} n - a number
 * @returns {Number}
 * Time complexity is O(n).
 */
var factorialIterative = function factorialIterative(n) {
    var temp = 1,
        i = void 0;
    for (i = 2; i <= n; i++) {
        temp *= i;
    }
    return temp;
};

/**
 * Method 3: One line solution
 * @function factorialOneLine: Print factorial of a number using a ternary operator.
 * @param {Number} n - a number
 * @returns {Number}
 */
var factorialOneLine = function factorialOneLine(n) {
    return n === 1 || n === 0 ? 1 : n * factorialOneLine(n - 1);
};

/**
 * @function doubleFactorial: Print semi-factorial or double factorial of number using the iterative approach. 
 * 
 * Double factorial of a non-integer n is the product of all integers from 1 to n that have the same parity i.e odd or even
 * @param {Number} n - a number
 * @returns {Number}
 */
var doublefactorial = function doublefactorial(n) {
    var temp = 1;
    for (var i = n; i >= 0; i = i - 2) {
        if (i === 0 || i === 1) return temp;else temp *= i;
    }
};

/**
 * @function facCountTrailingZeroes: Print the count of trailing zeroes in n!
 * @param {Number} n - a number
 * @returns {Number}
 */
var factCountTrailingZeroes = function factCountTrailingZeroes(n) {
    var count = 0;
    for (var i = 5; n / i >= 1; i *= 5) {
        count += n / i;
    }
    return count;
};

module.exports = {
    factorialRecursive: factorialRecursive,
    factorialIterative: factorialIterative,
    factorialOneLine: factorialOneLine,
    doublefactorial: doublefactorial,
    factCountTrailingZeroes: factCountTrailingZeroes
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function gcd: Calculate the greatest common divisor among the two numbers using Euclidean's algorithm.
 * 
 * @param {Number} numb1 
 * @param {Number} numb2 
 * @returns {Number}
 */
var gcd = function gcd(numb1, numb2) {
    var temp = 0;
    while (numb1 !== 0) {
        temp = numb1;
        numb1 = numb2 % numb1;
        numb2 = temp;
    }
    return numb2;
};

module.exports = gcd;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var func = {
    MathFunc: __webpack_require__(5),
    StringFunc: __webpack_require__(31),
    AlgoFunc: __webpack_require__(80)
};

module.exports = func;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    Average: __webpack_require__(6),
    BaseChange: __webpack_require__(7),
    Clamp: __webpack_require__(8),
    Combination: __webpack_require__(9),
    CountPrimeFactors: __webpack_require__(10),
    DegToRad: __webpack_require__(11),
    Division: __webpack_require__(12),
    EuclideanDistance: __webpack_require__(13),
    EvenOrOdd: __webpack_require__(14),
    Factorial: __webpack_require__(2),
    Fibonacci: __webpack_require__(15),
    GCD: __webpack_require__(3),
    HammingDistance: __webpack_require__(16),
    IsItDivisible: __webpack_require__(17),
    ItItPrime: __webpack_require__(18),
    LCM: __webpack_require__(19),
    MaxOrMin: __webpack_require__(20),
    Median: __webpack_require__(21),
    NthRoot: __webpack_require__(22),
    Permutation: __webpack_require__(23),
    Pythagoras: __webpack_require__(24),
    RadToDeg: __webpack_require__(25),
    Round: __webpack_require__(26),
    Slope: __webpack_require__(27),
    Subtract: __webpack_require__(28),
    SumOfArray: __webpack_require__(29),
    Trigonometry: __webpack_require__(30)
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function average: Calculates the average of an array
 * @param {Array} arr - an array
 * @returns {Number} 
 */
var average = function average(arr) {
    var temp = 0,
        average = void 0;
    if (Array.isArray(arr)) {
        temp = arr.reduce(function (previous, current) {
            return current += previous;
        });
        average = temp / arr.length;
        return average;
    } else {
        throw new Error('error occured');
    }
};

module.exports = average;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Convert a base of a number to any base. 
 * @param {Number} number 
 * @param {Number} originalBase 
 * @param {Number} finalBase 
 * @returns {Number}
 */
var changeBase = function changeBase(number, originalBase, finalBase) {
    var output = "";
    if (number !== undefined) {
        if (finalBase >= 2 && finalBase <= 36) {
            output = parseInt(number, originalBase).toString(finalBase);
        }
    }
    return output;
};

module.exports = changeBase;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Clamp a number
 * @param {Number} number 
 * @param {Number} min 
 * @param {Number} max
 * @returns {Number} 
 */
var clamp = function clamp(number, min, max) {
  if (min > max) throw new RangeError('`max` must be greater than `min`');
  if (number < min) return min;
  if (number > max) return max;
  return number;
};

module.exports = clamp;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var factorial = __webpack_require__(2).factorialOneLine;

/**
 * @function Calculates simple combination 
 * @param {Number} number - a number
 * @param {Number} rep - repitition
 * @returns {Number}
 */
var combination = function combination(number, rep) {
  return factorial(number) / (factorial(rep) * factorial(number - rep));
};

module.exports = combination;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function countPrimeFactors: A function to count all prime factors of a given number
 * @param {Number} n - a number
 * @returns {Number} 
 */
var countPrimeFactors = function countPrimeFactors(n) {
    var count = 0;
    while (n % 2 == 0) {
        n = n / 2;
        count++;
    }
    for (var i = 3; i <= Math.sqrt(n); i = i + 2) {
        while (n % i == 0) {
            n = n / i;
            count++;
        }
    }
    if (n > 2) count++;
    return count;
};

module.exports = countPrimeFactors;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Convert degrees to radians
 * @param {Number} deg - a number
 * @returns {Number} 
 */
var degToRad = function degToRad(deg) {
  return deg * (Math.PI / 180);
};

module.exports = degToRad;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Simple division function which returns an array of quotient & remainder.
 * @param {Number} dividend 
 * @param {Number} divisor 
 * @returns {Number}
 */
var division = function division(dividend, divisor) {
  return [dividend / divisor, dividend % divisor];
};

module.exports = division;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function: euclideanDistance: Calculates the distance between two points in any plane. Initial takes an array of initial points & Final takes an array of final points.
 * @param {Array} initial: initial points 
 * @param {Array} final: final points
 * @returns {Number}
 */
var euclideanDistance = function euclideanDistance(initial, final) {
    var total = 0;
    if (initial && final) {
        for (var i = 0; i < initial.length; i++) {
            total = total + Math.pow(final[i] - initial[i], 2);
        }
        return Math.sqrt(total);
    } else {
        throw new Error('Initial and final points needed');
    }
};

module.exports = euclideanDistance;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Number is even or odd
 * @param {Number} number 
 * @returns {Boolean}
 */
var isEven = function isEven(number) {
    return number % 2 === 0;
};

var isOdd = function isOdd(number) {
    return number % 2 !== 0;
};

module.exports = {
    isEven: isEven,
    isOdd: isOdd
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Method 1 : Using recursion.
 * @function fibRecursion: Print nth fibonacci number using recursion.
 * Time Complexity: T(n) = T(n-1) + T(n-2) which is exponential.
 * @param {Number} n - a number
 * @returns {Number}
 */
var fibRecursion = function fibRecursion(n) {
    if (n <= 1) return n;
    return fibRecursion(n - 1) + fibRecursion(n - 2);
};

/**
 * Method 2: Using dynamic programming
 * @function fibDynamic: Print nth fibonacci number using dynamic programming approach.
 * Time Complexity: O(n) 
 * @param {Number} n - a number
 * @returns {Number}
 */
var fibDynamic = function fibDynamic(n) {
    var f = [];
    f.push(n + 1);
    f[0] = 0;
    f[1] = 1;
    for (var i = 2; i <= n; i++) {
        f[i] = f[i - 1] + f[i - 2];
    }
    return f[n];
};

module.exports = {
    fibRecursion: fibRecursion,
    fibDynamic: fibDynamic
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Calculate hamming distance
 * @param {Number} number1 
 * @param {Number} number2
 * @returns {Number} 
 */
var hammingDistance = function hammingDistance(number1, number2) {
  return ((number1 ^ number2).toString(2).match(/1/g) || '').length;
};

module.exports = hammingDistance;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Check if the first number is divisible by second one
 * @param {Number} dividend 
 * @param {Number} divisor
 * @returns {Boolean} 
 */
var isDivisible = function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
};

module.exports = isDivisible;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Check if a number is prime
 * @param {Number} number
 * @returns {Boolean} 
 */
var isPrime = function isPrime(number) {
    var divisor = 2;
    while (number > divisor) {
        if (number % divisor === 0) return false;else divisor++;
    }
    return true;
};

module.exports = isPrime;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var gcd = __webpack_require__(3);

/**
 * @function Calculate LCM of an array of numbers
 * @param {Array} arr - an array
 * @returns {Number} 
 */
var lcm = function lcm(arr) {
    return arr.reduce(function (a, b) {
        return a * b / gcd(a, b);
    });
};

module.exports = lcm;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @function maxOrmin: Get maximum or minimum of an array
 * @param {Array} arr 
 * @param {String} task
 * @returns {Number} 
 */
var maxOrMin = function maxOrMin(arr, task) {
    if (task) {
        if (task.toUpperCase() === 'MAX') {
            return Math.max.apply(Math, _toConsumableArray(arr));
        } else if (task.toUpperCase() === 'MIN') {
            return Math.min.apply(Math, _toConsumableArray(arr));
        } else {
            throw new Error('Error occured');
        }
    } else {
        throw new Error('max or min not defined');
    }
};

module.exports = maxOrMin;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Calculate median of a sorted number array
 * @param {Array} arr - an array
 * @returns {Number} 
 */
var median = function median(arr) {
    var median = void 0;
    arr.sort(function (a, b) {
        return a - b;
    });
    if (arr.length % 2 === 0) median = (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;else median = arr[arr.length / 2];
    return median;
};

module.exports = median;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function nthRoot: Calculates the nth root of a positive number
 * @param {Number} number - a number 
 * @param {Number} power 
 * @returns {Number}
 */
var nthRoot = function nthRoot(number, power) {
  return Math.pow(number, 1 / power);
};

module.exports = nthRoot;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var factorial = __webpack_require__(2).factorialOneLine;

/**
 * @function Calculates simple permutation 
 * @param {Number} number - a number
 * @param {Number} rep - repitition
 * @returns {Number}
 */
var permutation = function permutation(number, rep) {
  return factorial(number) / factorial(number - rep);
};

module.exports = permutation;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function pythagorasDistance: Calculate the pythogorean distance if side1 and side2 are 2 sides of a right-angled triangle
 * @param {Number} side1 
 * @param {Number} side2 
 * @returns {Number}
 */
var pythagorasDistance = function pythagorasDistance(side1, side2) {
    return Math.sqrt(side1 * side1 + side2 * side2);
};

module.exports = {
    pythagorasDistance: pythagorasDistance
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Convert radians to degrees
 * @param {Number} deg
 * @returns {Number} 
 */
var radToDeg = function radToDeg(rad) {
  return rad * (180 / Math.PI);
};

module.exports = radToDeg;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Round a number to two places
 * @param {Number} number - a number
 * @returns {Number}
 */
var round = function round(number) {
  return +(Math.round(number + "e+2") + "e-2");
};

module.exports = round;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function slopeOfALine: Calculates the slope of a line using points and angle of inclination. arg takes angle of inclination or an array of initial points and final points.
 * Example: arg = 60 degrees or [x0,y0,x1,y1]
 * @param {Number || Array} arg - a number or an array of points
 * @returns {Number} 
 */
var slopeOfALine = function slopeOfALine(arg) {
    var slope = 0;

    if (arg) {
        if (!isNaN(arg)) {
            slope = Math.tan(arg * Math.PI / 180);
        } else if (Array.isArray(arg)) {
            var initialX = void 0,
                initialY = void 0,
                finalX = void 0,
                finalY = void 0;
            initialX = arg[0], initialY = arg[1], finalX = arg[2], finalY = arg[3];

            if (arg.every(function (val, i, arr) {
                return val === 0;
            })) {
                throw new Error('Inderminate');
            } else {
                slope = (finalY - initialY) / (finalX - initialX);
            }
        }
    }

    return slope;
};

module.exports = slopeOfALine;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Subtract a number from another
 * @param {Array} arr - an array
 * @returns {Number} 
 */
var subract = function subract(firstNum, secondNum) {
  return firstNum >= secondNum ? firstNum - secondNum : secondNum - firstNum;
};

module.exports = subract;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function sumOfArray: Addition of all the integers in an array
 * @param {Array} arr - an array
 * @returns {Number} 
 */
var sumOfArray = function sumOfArray(arr) {
  return arr.reduce(function (previous, current) {
    return current += previous;
  });
};

module.exports = sumOfArray;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Sine Rule using two angles & one side
 * @param {Number} sideOne 
 * @param {Number} angleOne 
 * @param {Number} angleTwo 
 * @returns {Number}
 */
var sineRule = function sineRule(sideOne, angleOne, angleTwo) {
    return Math.sin(angleTwo / 180 * Math.PI) * (sideOne / Math.sin(angleOne / 180 * Math.PI));
};

/**
 * @function Cosine Rule
 * @param {Number} sideOne 
 * @param {Number} sideTwo 
 * @param {Number} theta
 * @returns {Number} 
 */
var cosineRule = function cosineRule(sideOne, sideTwo) {
    var theta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    var angle = Math.PI / 180 * parseFloat(theta);
    return Math.sqrt(sideOne * sideOne + sideTwo * sideTwo - 2 * sideOne * sideTwo * Math.cos(angle));
};

module.exports = {
    sineRule: sineRule,
    cosineRule: cosineRule
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    Anagram: __webpack_require__(32),
    Camelize: __webpack_require__(33),
    CountVowels: __webpack_require__(34),
    Escape: __webpack_require__(35),
    Filter: __webpack_require__(36),
    Date: __webpack_require__(37),
    FisherYates: __webpack_require__(38),
    GenerateHexColor: __webpack_require__(39),
    GenerateRGBColor: __webpack_require__(40),
    GUID: __webpack_require__(41),
    Initials: __webpack_require__(42),
    HasAtleastOneLowerCaseLetter: __webpack_require__(43),
    HasAtleastOneUpperCaseLetter: __webpack_require__(44),
    HexToRGB: __webpack_require__(45),
    HumanizeNumber: __webpack_require__(46),
    IsItADataURI: __webpack_require__(47),
    IsItAHexaDecimal: __webpack_require__(48),
    IsItASCII: __webpack_require__(49),
    IsItAValidEmail: __webpack_require__(50),
    IsItAnIPAddress: __webpack_require__(51),
    IsItBool: __webpack_require__(52),
    IsItEmoji: __webpack_require__(53),
    IsItEmpty: __webpack_require__(54),
    IsItEndWith: __webpack_require__(55),
    IsItEquals: __webpack_require__(56),
    IsItHexColor: __webpack_require__(57),
    IsItLowerCased: __webpack_require__(58),
    IsItMACAddress: __webpack_require__(59),
    IsItMD5: __webpack_require__(60),
    IsItPalindrome: __webpack_require__(61),
    IsItUpperCased: __webpack_require__(62),
    KebabCase: __webpack_require__(63),
    RemoveTags: __webpack_require__(64),
    ReverseInPlace: __webpack_require__(65),
    RgbToHex: __webpack_require__(66),
    Romanize: __webpack_require__(67),
    SecureEmail: __webpack_require__(68),
    SecurePassword: __webpack_require__(69),
    SnakeCase: __webpack_require__(70),
    SortChar: __webpack_require__(71),
    SplitName: __webpack_require__(72),
    StringHammingDistance: __webpack_require__(73),
    ThousandSeperator: __webpack_require__(74),
    ToTitleCase: __webpack_require__(75),
    TrailingAndLeading: __webpack_require__(76),
    Truncate: __webpack_require__(77),
    UUID: __webpack_require__(78),
    ZeroFill: __webpack_require__(79)
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var string_util = __webpack_require__(0);

/**
 * @function Both strings are anagrams
 * @param {String} str1 - First string
 * @param {String} str2  - Second String
 * @returns {Boolean} 
 */
var anagram = function anagram(str1, str2) {
  string_util.isString(str1);
  string_util.isString(str2);
  return str1.split('').sort().join('') === str2.split('').sort().join('');
};

module.exports = anagram;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var string_util = __webpack_require__(0);

/**
 * @function Camelize a string i.e CamelCase
 * @param {String} str - a String
 * @returns {String} 
 */
var camelize = function camelize(str) {
    string_util.isString(str);
    return str.replace(/\s(.)/g, function (val) {
        return val.toUpperCase();
    }).replace(/\s/g, '').replace(/^(.)/, function (val) {
        return val.toLowerCase();
    });
};

module.exports = camelize;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var string_util = __webpack_require__(0);

/**
 * @function Count the number of vowels in a string
 * @param {String} str - a string
 * @returns {Number}
 */
var countVowels = function countVowels(str) {
    string_util.isString(str);
    var vowels = 'aeiouAEIOU',
        count = 0;
    str = str.trim().split("");
    str.forEach(function (val) {
        if (vowels.indexOf(val) !== -1) count++;
    });
    return count;
};

module.exports = countVowels;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var string_util = __webpack_require__(0);

/**
 * @function Escape characters from string
 * @param {String} str - a String 
 * @returns {String}
 */
var escape = function escape(str) {
    string_util.isString(str);
    if (!str) {
        throw new Error('error');
    } else {
        var map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
        return str.toString().replace(/[&<>"']/g, function (m) {
            return map[m];
        });
    }
};

module.exports = escape;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Filter out falsy values from an array
 * @param {Array} arr - an array  
 * @returns {Array}
 */
var filterFalsy = function filterFalsy(arr) {
    return arr.filter(function (val) {
        if (val !== false || val !== null || val !== 0 || val !== "") {
            return val;
        }
    });
};

/**
 * @function Filter out an element from an array
 * @param {Array} arr: an array 
 * @param {Element} elem: an element 
 * @returns {Array}
 */
var filter = function filter(arr, elem) {
    return arr.filter(function (val) {
        return val === elem ? val : null;
    });
};

module.exports = { filterFalsy: filterFalsy, filter: filter };

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Get ISO-8601 week number of a year
 * @param {Object} date: Date Object
 * @returns {Number}
 */
var ISO8601WeekNumber = function ISO8601WeekNumber(date) {
  var d = new Date(date.valueOf());
  d.setDate(d.getDate() - (date.getDay() + 6) % 7 + 3);
  var temp = d.valueOf();
  d.setMonth(0, 1);
  if (d.getDay() !== 4) d.setMonth(0, 1 + (4 - d.getDay() + 7) % 7);
  return 1 + Math.ceil((temp - d) / 604800000);
};

/**
 * @function Calculate the days between two dates
 * @param {Object} date1: First date object
 * @param {Object} date2: Second date object 
 * @returns {Number}
 */
var differenceBetweenDates = function differenceBetweenDates(date1, date2) {
  var difference = (date2.getTime() - date1.getTime()) / 1000;
  difference /= 60 * 60 * 24;
  return Math.abs(Math.round(difference));
};

module.exports = { ISO8601WeekNumber: ISO8601WeekNumber, differenceBetweenDates: differenceBetweenDates };

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function fisherYates: Shuffle an array using the Fisher Yates Algorithm using a while loop.
 * @param {Array} arr: an array
 * @returns {Array} 
 */
var fisherYates = function fisherYates(arr) {
    var currentIndex = arr.length,
        temporaryValue = void 0,
        randomIndex = void 0;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
    }
    return arr;
};

module.exports = {
    fisherYates: fisherYates
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Generate random hex color
 * @returns {String}
 */
var generateHexColor = function generateHexColor() {
  var letters = '0123456789ABCDEF',
      color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

module.exports = generateHexColor;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Generate random RGB color
 * @returns {String}
 */
var generateRGBColor = function generateRGBColor() {
  return "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
};

module.exports = generateRGBColor;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Generate a Global Unique Identifier
 * @param {Number} len - length 
 * @returns {String}
 */
var guid = function guid(len) {
    var arr = [],
        chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        length = len || 32;

    for (var i = 0; i < length; i++) {
        arr[i] = chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return arr.join('');
};

module.exports = guid;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var string_util = __webpack_require__(0);

/**
 * @function initials: Get the intitials of a person's name
 * @param {String} str - a string
 * @returns {String} 
 */
var initials = function initials(str) {
    string_util.isString(str);
    var output = '';
    str = str.split("");
    output = str[0];
    str.forEach(function (val, index) {
        if (val.indexOf(' ') != -1) {
            output += str[index + 1];
        }
    });
    return output;
};

module.exports = initials;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var string_util = __webpack_require__(0);

/**
 * @function hasAtleastOneLowerCaseLetter: String has atleast one lower-cased letter.
 * @param {String} str - a string
 * @returns {Boolean} 
 */
var hasAtleastOneLowerCaseLetter = function hasAtleastOneLowerCaseLetter(str) {
    string_util.isString(str);
    var temp = false;
    var a = str.split("");
    a.forEach(function (key, index) {
        if (a[index] === key.toLowerCase()) {
            temp = true;
        }
    });

    return temp;
};

module.exports = hasAtleastOneLowerCaseLetter;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var string_util = __webpack_require__(0);

/**
 * @function hasAtleastOneUpperCaseLetter: String has atleast one upper-cased letter.
 * @param {String} str - a string
 * @returns {Boolean}  
 */
var hasAtleastOneUpperCaseLetter = function hasAtleastOneUpperCaseLetter(str) {
  string_util.isString(str);
  var temp = false;
  var a = str.split("");
  a.forEach(function (key, index) {
    if (key.toUpperCase() === a[index]) {
      temp = true;
    }
  });
  return temp;
};

module.exports = hasAtleastOneUpperCaseLetter;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var string_util = __webpack_require__(0);

/**
 * @function Converts hex color to RGB
 * @param {String} hex - a hex string
 * @returns {Array}
 */
var hexToRgb = function hexToRgb(hex) {
  string_util.isString(hex);
  hex = hex.replace(/^#/, '');
  if (hex.length === 3) hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  var temp = parseInt(hex, 16);

  return [temp >> 16, temp >> 8 & 255, temp & 255];
};

module.exports = hexToRgb;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Humanize a number
 * @param {Number} num - a number
 * @returns {String} 
 */
var humanizeNumber = function humanizeNumber(num) {
  var array = ["th", "st", "nd", "rd"];
  if (num === undefined) return "";
  var lstDg = num % 10;
  return lstDg < 4 ? num + array[lstDg] : num + array[0];
};

module.exports = humanizeNumber;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var string_util = __webpack_require__(0);
var regexpattern = __webpack_require__(1).RegexPatterns;

/**
 * @function isDataURI: String is a data uri format.
 * @param {String} str - a string
 * @returns {Boolean}  
 */
var isDataURI = function isDataURI(str) {
  string_util.isString(str);
  return regexpattern('dataURI').test(str);
};

module.exports = isDataURI;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var string_util = __webpack_require__(0);
var regexpattern = __webpack_require__(1).RegexPatterns;

/**
 * @function isHexaDecimal: String is hexadecimal.
 * @param {String} str - a string
 * @returns {Boolean} 
 */
var isHexaDecimal = function isHexaDecimal(str) {
  string_util.isString(str);

  return regexpattern('hexdecimal').test(str);
};

module.exports = isHexaDecimal;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var string_util = __webpack_require__(0);
var regexpattern = __webpack_require__(1).RegexPatterns;

/**
 * @function isASCII: String contains ASCII characters
 * @param {String} str - a string
 * @returns {Boolean} 
 */
var isASCII = function isASCII(str) {
  var regex = regexpattern('ascii');

  string_util.isString(str);
  return regex.test(str);
};

module.exports = isASCII;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var string_util = __webpack_require__(0);
var regexpattern = __webpack_require__(1).RegexPatterns;

/**
 * @function isValidEmail: String is a valid email id.
 * @param {String} str - a string
 * @returns {Boolean}  
 */
var isValidEmail = function isValidEmail(str) {
  var regex = regexpattern('email');

  string_util.isString(str);
  return regex ? regex.test(str) : null;
};

module.exports = isValidEmail;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var string_util = __webpack_require__(0);
var regexpattern = __webpack_require__(1).RegexPatterns;

/**
 * @function isIPAddress: String is an IP address.
 * @param {String} str - a string
 * @returns {Boolean} 
 */
var isIPAddress = function isIPAddress(str) {
  string_util.isString(str);

  return regexpattern('ip').test(str);
};

module.exports = isIPAddress;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var string_util = __webpack_require__(0);

/**
 * @function isBool: String contains true, false, 0 or 1
 * @param {String} str - a string 
 * @returns {Boolean} 
 */
var isBool = function isBool(str) {
  string_util.isString(str);
  return str === 'true' || str === 'false' || parseInt(str) === 0 || parseInt(str) === 1;
};

module.exports = isBool;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var string_util = __webpack_require__(0);
var regexpattern = __webpack_require__(1).RegexPatterns;

/**
 * @function String is an emoji
 * @param {String} str - a string
 * @returns {Boolean}  
 */
var isEmoji = function isEmoji(str) {
  string_util.isString(str);
  return regexpattern('emoji').test(str);
};

module.exports = isEmoji;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var string_util = __webpack_require__(0);

/**
 * @function isEmpty: String is empty or not
 * @param {String} str - a string
 * @returns {Boolean}  
 */
var isEmpty = function isEmpty(str) {
  string_util.isString(str);
  return str === null || str === 'undefined' || str.length === 0;
};

module.exports = isEmpty;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var string_util = __webpack_require__(0);

/**
 * @function isEndWidth: String ends with target.
 * @param {String} str 
 * @param {String} target 
 * @returns {Boolean} 
 */
var isEndWith = function isEndWith(str, target) {
    if (target) {
        string_util.isString(str);
        return str.substr(-target.length) === target ? true : false;
    }
};

module.exports = isEndWith;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var string_util = __webpack_require__(0);

/**
 * @function isEquals: Compares the two strings entered
 * @param {String} str - a string
 * @param {String} elem - an element 
 */
var isEquals = function isEquals(str, elem) {
  string_util.isString(str);
  return str === elem;
};

module.exports = isEquals;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var string_util = __webpack_require__(0);
var regexpattern = __webpack_require__(1).RegexPatterns;

/**
 * @function isHexColor: String is a hex color.
 * @param {String} str - a string
 * @returns {Boolean}  
 */
var isHexColor = function isHexColor(str) {
  var hex = regexpattern('hexcolor');

  string_util.isString(str);
  return hex.test(str);
};

module.exports = isHexColor;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var string_util = __webpack_require__(0);

/**
 * @function isLowerCase: String is all lower-cased.
 * @param {String} str - a string
 * @returns {Boolean}  
 */
var isLowerCase = function isLowerCase(str) {
  string_util.isString(str);

  return str === str.toLowerCase();
};

module.exports = isLowerCase;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var string_util = __webpack_require__(0);
var regexpattern = __webpack_require__(1).RegexPatterns;

/**
 * @function isMACAddress: String is a MAC Address.
 * @param {String} str - a string
 * @returns {Boolean}  
 */
var isMACAddress = function isMACAddress(str) {
  var mac = regexpattern('mac');

  string_util.isString(str);
  return mac.test(str);
};

module.exports = isMACAddress;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var string_util = __webpack_require__(0);
var regexpattern = __webpack_require__(1).RegexPatterns;

/**
 * @function isMD5: Validate MD5
 * @param {String} - str - a string
 * @returns {Boolean} 
 */
var isMD5 = function isMD5(str) {
  string_util.isString(str);
  var md5 = regexpattern('md5');

  return md5.test(str);
};

module.exports = isMD5;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var string_util = __webpack_require__(0);

/**
 * @function isPalindrome: String is a palindrome.
 * @param {String} str - a string
 * @returns {Boolean}  
 */
var isPalindrome = function isPalindrome(str) {
  string_util.isString(str);
  var reverse = str.toLowerCase().replace(/[\W_]/g, '').split("").reverse().join("");

  return str.toLowerCase().replace(/[\W_]/g, '') === reverse;
};

module.exports = isPalindrome;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var string_util = __webpack_require__(0);

/**
 * @function isUpperCase: String is all upper-cased.
 * @param {String} str - a string
 * @returns {Boolean}  
 */
var isUpperCase = function isUpperCase(str) {
  string_util.isString(str);

  return str === str.toUpperCase();
};

module.exports = isUpperCase;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var string_util = __webpack_require__(0);
/**
 * @function to Kebab Case
 * @param {String} str - a string
 * @returns {String} 
 */
var kebabCase = function kebabCase(str) {
  string_util.isString(str);
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/\s+/g, '-').toLowerCase();
};

module.exports = kebabCase;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var string_util = __webpack_require__(0);

/**
 * @function Remove tags from an HTML statement
 * @param {String} str - a string
 * @returns {String} 
 */
var removeTags = function removeTags(str) {
  string_util.isString(str);
  str = str.toString();
  return str.replace(/<[^>]*>/g, '');
};

module.exports = removeTags;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Reverse words of a sentence in place
 * @param {String} str - a string
 * @returns {String}  
 */
var reverseInPlace = function reverseInPlace(str) {
  return str.split(' ').reverse().join(' ').split('').reverse().join('');
};

module.exports = reverseInPlace;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function rgbToHex: RGB to Hex format
 * @param {Number} red 
 * @param {Number} green 
 * @param {Number} blue
 * @returns {String} 
 */
var rgbToHex = function rgbToHex(red, green, blue) {
  var hex = '';
  hex = "#" + ("0" + parseInt(red, 10).toString(16)).slice(-2) + ("0" + parseInt(green, 10).toString(16)).slice(-2) + ("0" + parseInt(blue, 10).toString(16)).slice(-2);

  return hex;
};

module.exports = rgbToHex;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Romanize a number
 * @param {Number} num - a number
 * @returns {String} 
 */
var romanize = function romanize(num) {
    if (!+num) throw new Error('Some error');
    var digits = String(+num).split(""),
        key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        romanNum = "",
        temp = 3;
    while (temp--) {
        romanNum = (key[+digits.pop() + temp * 10] || "") + romanNum;
    }return Array(+digits.join("") + 1).join("M") + romanNum;
};

module.exports = romanize;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var string_util = __webpack_require__(0);

/**
 * @function Secures your email using asterisks
 * @param {String} str - a string
 * @returns {String} 
 */
var secureEmail = function secureEmail(str) {
    string_util.isString(str);
    var str1 = void 0,
        temp = void 0,
        asterisks = void 0;
    str1 = str.split("@");
    asterisks = str1[0].length - str1[0].length * 0.8;
    temp = str1[0].substring(0, Math.floor(asterisks));

    return '' + temp + '*'.repeat(str1[0].split("").length - asterisks) + '@' + str1[1];
};

module.exports = secureEmail;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var string_util = __webpack_require__(0);

/**
 * @function Secure password using astrisks
 * @param {String} str - a string
 * @returns {String} 
 */
var securePassword = function securePassword(str) {
  string_util.isString(str);
  return '*'.repeat(str.length);
};

module.exports = securePassword;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var string_util = __webpack_require__(0);
/**
 * @function to Snake Case
 * @param {String} str - a string 
 * @returns {String}
 */
var snakeCase = function snakeCase(str) {
  string_util.isString(str);
  return str.indexOf(" ") !== -1 ? str.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/\s+/g, '_').toLowerCase() : str.replace(/([A-Z])/g, function ($1) {
    return "_" + $1.toLowerCase();
  });
};

module.exports = snakeCase;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Sort string characters in alphabetical order
 * @param {String} str - a string
 * @returns {String} 
 */
var sortChar = function sortChar(str) {
  return str.toLowerCase().match(/\w/g).sort().join("");
};

module.exports = sortChar;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var string_util = __webpack_require__(0);

/**
 * @function splitName: Return the first name and the last name of a person's name.
 * @param {String} str - a string
 * @returns {Array}
 */
var splitName = function splitName(str) {
  string_util.isString(str);

  return str.split(" ");
};

module.exports = splitName;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var string_util = __webpack_require__(0);

/**
 * @function String Hamming Distance
 * @param {String} str1 - a string
 * @param {String} str2 - a string
 * @returns {Number}
 */
var stringHammingDistance = function stringHammingDistance(str1, str2) {
    string_util.isString(str1), string_util.isString(str2);
    var distance = 0;
    str1 = str1.toLowerCase(), str2 = str2.toLowerCase();

    for (var i in str1) {
        if (str2[i] && str2[i] !== str1[i]) {
            distance += Math.abs(str1.charCodeAt(i) - str2.charCodeAt(i)) + Math.abs(str2.indexOf(str1[i])) * 2;
        } else if (!str2[i]) {
            distance += distance;
        }
    }
    return distance;
};

module.exports = stringHammingDistance;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Seperate thousands using commas
 * @param {Number} num - a number
 * @returns {String} 
 */
var thousandSeperator = function thousandSeperator(num) {
  var parts = num.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};

module.exports = thousandSeperator;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var string_util = __webpack_require__(0);

/**
 * @function Convert string to titleCase
 * @param {String} str - a string
 * @returns {String}
 */
var toTitleCase = function toTitleCase(str) {
  string_util.isString(str);
  return str.toString().replace(/\w\S*/g, function (text) {
    return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
  });
};

module.exports = toTitleCase;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Remove leading and trailing zeroes from an array
 * @param {Array} arr - an array
 * @returns {Array} 
 */
var trailingAndLeading = function trailingAndLeading(arr) {
  return arr.join("").replace(/^0+(\d)|(\d)0+$/gm, '$1$2');
};

module.exports = trailingAndLeading;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var string_util = __webpack_require__(0);

/**
 * @function Truncate a string at provided position 
 * @param {String} str - a string
 * @param {Number} pos - position is array
 * @returns {String}
 */
var truncate = function truncate(str, pos) {
  string_util.isString(str);
  return str.split(" ").splice(0, pos).join(" ");
};

module.exports = truncate;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Generate a UUID i.e universally unique identifier
 * @returns {String}
 */
var uuid = function uuid() {
    var date = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (val) {
        var r = (date + Math.random() * 16) % 16 | 0;
        date = Math.floor(date / 16);
        return (val == 'x' ? r : r & 0x3 | 0x8).toString(16);
    });
    return uuid;
};

module.exports = uuid;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Zerofill a number to the given length
 * @param {Number} number - a number
 * @param {*} len - length
 */
var zeroFill = function zeroFill(number, len) {
  return '0'.repeat(len - number.toString().length) + number;
};

module.exports = zeroFill;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    BinarySearch: __webpack_require__(81),
    BubbleSort: __webpack_require__(82),
    Chunk: __webpack_require__(83),
    Collatz: __webpack_require__(84),
    Concat: __webpack_require__(85),
    FizzBuzz: __webpack_require__(86),
    Flatten: __webpack_require__(87),
    InsertionSort: __webpack_require__(88),
    LinearSearch: __webpack_require__(89),
    ModularExponential: __webpack_require__(90),
    NthLargest: __webpack_require__(91),
    Remove: __webpack_require__(92),
    RemoveDuplicates: __webpack_require__(93),
    Reverse: __webpack_require__(94),
    Segregate: __webpack_require__(95),
    SelectionSort: __webpack_require__(96)
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Search an element using binary search tehcnique
 * @param {Array} arr - an array 
 * @param {Element} elem - an element
 * @returns {Number} 
 */
var binarySearch = function binarySearch(arr, elem) {
  var upperBound = arr.length,
      lowerBound = 0,
      mid = Math.ceil((upperBound - lowerBound) / 2);

  while (elem !== arr[mid]) {
    if (mid === 0 || mid === upperBound) {
      return -1;
    }
    if (elem < arr[mid]) {
      upperBound = mid;
      mid -= Math.ceil((upperBound - lowerBound) / 2);
    } else {
      lowerBound = mid;
      mid += Math.ceil((upperBound - lowerBound) / 2);
    }
  }
  return mid;
};

module.exports = binarySearch;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Sort an array using bubble sort technique
 * @param {Array} arr - an array
 * @returns {Array} 
 */
var bubbleSort = function bubbleSort(arr) {
    var is_sorted = false,
        temp = void 0;
    while (!is_sorted) {
        is_sorted = true;
        arr.forEach(function (val, index) {
            if (arr[index] && arr[index + 1] && arr[index] > arr[index + 1]) {
                var _ref = [arr[index + 1], arr[index]];
                arr[index] = _ref[0];
                arr[index + 1] = _ref[1];

                is_sorted = false;
            }
        });
    }
    return arr;
};

module.exports = bubbleSort;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Split array into chunks of smaller arrays of the desired size
 * @param {Array} arr - an array 
 * @param {Number} size
 * @returns {Array} 
 */
var chunk = function chunk(arr, size) {
    var output = [],
        chunks = arr.length / size;
    for (var i = 0, j = 0; i < chunks; i++, j += size) {
        output[i] = arr.slice(j, j + size);
    }

    return output;
};

module.exports = chunk;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Collatz Algorithm
 * @param {Number} number
 * @returns {Number} 
 */
var collatz = function collatz(number) {
  return number % 2 == 0 ? number / 2 : 3 * number + 1;
};

module.exports = collatz;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Concatenates into a single array
 * @param {Array} arrs 
 * @returns {Array}
 */
var concat = function concat() {
  for (var _len = arguments.length, arrs = Array(_len), _key = 0; _key < _len; _key++) {
    arrs[_key] = arguments[_key];
  }

  var temp = [];
  arrs.forEach(function (arr) {
    return arr.forEach(function (val) {
      return temp.push(val);
    });
  });
  return temp;
};

module.exports = concat;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function FizzBuzz Algorithm: most famous asked question
 * @param {Number} n - a number
 * @returns {String || Number} 
 */
var fizzBuzz = function fizzBuzz(n) {
    for (var i = 1; i < n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz!");
        } else {
            console.log(i);
        }
    }
};

module.exports = fizzBuzz;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Flatten/Merge two arrays
 * @param {Array} arr - an array
 * @param {Array} givenArr 
 */
var flatten = function flatten(arr, givenArr) {
  arr.forEach(function (item) {
    Array.isArray(item) && flatten(item, givenArr);
    !Array.isArray(item) && givenArr.push(item);
  });

  return givenArr;
};

module.exports = flatten;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Sort an array using the insertion sort technique
 * @param {Array} arr 
 * @returns {Array}
 */
var insertionSort = function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var value = arr[i],
        j = void 0;
    j = i - 1;
    while (j >= 0 && arr[j] > value) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = value;
  }
  return arr;
};

module.exports = insertionSort;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Search an element using linear search technique
 * @param {Array} arr - an array
 * @param {Element} elem - an element
 * @returns {Number}
 */
var linearSearch = function linearSearch(arr, elem) {
  var temp = 0;
  arr.forEach(function (val, index) {
    if (val === elem) temp = index;else temp = -1;
  });

  return temp;
};

module.exports = linearSearch;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Modular Exponential Algorithm
 * @param {Number} base 
 * @param {Number} power 
 * @param {Number} mod
 * @returns {Number} 
 */
var modularExponential = function modularExponential(base, power, mod) {
    if (power < 0) return -1;
    var result = 1;
    base %= mod;

    while (power > 0) {
        if (power % 2 == 1) result = result * base % mod;
        power = power >> 1;
        base = base * base % mod;
    }
    return result;
};

module.exports = modularExponential;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Find the nth largest number from an unsorted array
 * @param {Array} arr - an array 
 * @param {Number} nth 
 * @returns {Number}
 */
var nthLargest = function nthLargest(arr, nth) {
  var large = arr.splice(arr.indexOf(Math.max.apply(null, arr)), 1);
  return nth === 1 ? +large : nthLargest(arr, nth - 1);
};

module.exports = nthLargest;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Remove an element from an array
 * @param {Array} arr - an array 
 * @param {Element} elem - an element
 * @returns {Array}
 */
var remove = function remove(arr, elem) {
  arr.forEach(function (num, i) {
    if (num === elem) arr.splice(i, 1);
  });
  return arr;
};

module.exports = remove;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Remove duplicates from an array
 * @param {Array} arr - an array
 * @returns {Array} 
 */
var removeDuplicate = function removeDuplicate(arr) {
    var exists = {},
        output = [];
    arr.forEach(function (val) {
        if (!exists[val]) {
            output.push(val);
            exists[val] = true;
        }
    });

    return output.sort(function (a, b) {
        return a - b;
    });
};

module.exports = removeDuplicate;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Reverse an array
 * @param {Array} arr - an array
 * @returns {Array} 
 */
var reverse = function reverse(arr) {
  var len = arr.length;
  return arr.map(function () {
    return arr[--len];
  });
};

module.exports = reverse;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Segregate 0's and 1's in an array
 * @param {Array} arr - an array
 * @returns {Array} 
 */
var segregate = function segregate(arr) {
    var left = 0,
        size = arr.length,
        right = size - 1;
    while (left < right) {
        while (arr[left] === 0 && left < right) {
            left++;
        }while (arr[right] === 1 && left < right) {
            right--;
        }if (left < right) {
            arr[left] = 0;
            arr[right] = 1;
            left++;
            right--;
        }
    }
    return arr;
};

module.exports = segregate;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @function Sort an array using the selection sort technique
 * @param {Array} arr - an array
 * @returns {Array} 
 */
var selectionSort = function selectionSort(arr) {
    for (var index = 0; index < arr.length; index++) {
        var minimum = index;

        for (var j = index + 1; j < arr.length; j++) {
            if (arr[j] < arr[minimum]) minimum = j;
        }
        if (index !== minimum) {
            ;
            var _ref = [arr[minimum], arr[index]];
            arr[index] = _ref[0];
            arr[minimum] = _ref[1];
        }
    }
    return arr;
};

module.exports = selectionSort;

/***/ })
/******/ ]);
});
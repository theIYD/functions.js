(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("FJS", [], factory);
	else if(typeof exports === 'object')
		exports["FJS"] = factory();
	else
		root["FJS"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    mathematics: __webpack_require__(1),
    strings: __webpack_require__(2),
    algorithms: __webpack_require__(4)
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mathematics = function () {
    function Mathematics() {
        _classCallCheck(this, Mathematics);
    }

    _createClass(Mathematics, [{
        key: 'average',

        /**
         * @function average: Calculates the average of an array
         * @param {Array} arr - an array
         * @returns {Number} 
         */
        value: function average(arr) {
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
        }

        /**
         * @function Convert a base of a number to any base. 
         * @param {Number} number 
         * @param {Number} originalBase 
         * @param {Number} finalBase 
         * @returns {Number}
         */

    }, {
        key: 'baseChange',
        value: function baseChange(number, originalBase, finalBase) {
            var output = "";
            if (number !== undefined) {
                if (finalBase >= 2 && finalBase <= 36) {
                    output = parseInt(number, originalBase).toString(finalBase);
                }
            }
            return output;
        }

        /**
         * @function Catalan Number
         * @param {Number} number
         * @returns {Number} 
         */

    }, {
        key: 'catalan',
        value: function catalan(number) {
            var res = 0;
            if (number <= 1) return 1;
            for (var i = 0; i < number; i++) {
                res += this.catalan(i) * this.catalan(number - i - 1);
            }
            return res;
        }

        /**
         * @function Clamp a number
         * @param {Number} number 
         * @param {Number} min 
         * @param {Number} max
         * @returns {Number} 
         */

    }, {
        key: 'clamp',
        value: function clamp(number, min, max) {
            if (min > max) throw new RangeError('`max` must be greater than `min`');
            if (number < min) return min;
            if (number > max) return max;
            return number;
        }

        /**
         * Method 3: One line solution
         * @function factorialOneLine: Print factorial of a number using a ternary operator.
         * @param {Number} n - a number
         * @returns {Number}
         */

    }, {
        key: 'factorialOneLine',
        value: function factorialOneLine(n) {
            return n === 1 || n === 0 ? 1 : n * this.factorialOneLine(n - 1);
        }

        /**
         * @function Calculates simple combination 
         * @param {Number} number - a number
         * @param {Number} rep - repitition
         * @returns {Number}
         */

    }, {
        key: 'combination',
        value: function combination(number, rep) {
            return this.factorialOneLine(number) / (this.factorialOneLine(rep) * this.factorialOneLine(number - rep));
        }

        /**
         * @function countPrimeFactors: A function to count all prime factors of a given number
         * @param {Number} n - a number
         * @returns {Number} 
         */

    }, {
        key: 'countPrimeFactors',
        value: function countPrimeFactors(n) {
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
        }

        /**
         * @function Convert degrees to radians
         * @param {Number} deg - a number
         * @returns {Number} 
         */

    }, {
        key: 'degToRad',
        value: function degToRad(deg) {
            return deg * (Math.PI / 180);
        }

        /**
         * @function Digital Root of a number.
         * @param {Number} input number 
         * @returns {Number}
         */

    }, {
        key: 'digitalRoot',
        value: function digitalRoot(number) {
            return (number - 1) % 9 + 1;
        }

        /**
         * @function Simple division function which returns an array of quotient & remainder.
         * @param {Number} dividend 
         * @param {Number} divisor 
         * @returns {Number}
         */

    }, {
        key: 'division',
        value: function division(dividend, divisor) {
            return [dividend / divisor, dividend % divisor];
        }

        /**
         * @function: euclideanDistance: Calculates the distance between two points in any plane. Initial takes an array of initial points & Final takes an array of final points.
         * @param {Array} initial: initial points 
         * @param {Array} final: final points
         * @returns {Number}
         */

    }, {
        key: 'euclideanDistance',
        value: function euclideanDistance(initial, final) {
            var total = 0;
            if (initial && final) {
                for (var i = 0; i < initial.length; i++) {
                    total = total + Math.pow(final[i] - initial[i], 2);
                }
                return Math.sqrt(total);
            } else {
                throw new Error('Initial and final points needed');
            }
        }

        /**
         * @function Number is even or odd
         * @param {Number} number 
         * @returns {Boolean}
         */

    }, {
        key: 'isEven',
        value: function isEven(number) {
            return number % 2 === 0;
        }
    }, {
        key: 'isOdd',
        value: function isOdd(number) {
            return number % 2 !== 0;
        }

        /**
         * Method 1: Recursive Function
         * @function factorialRecursive: Print factorial of a number using recursive function approach
         * Time complexity is O(n).
         * @param {Number} n - a number
         * @returns {Number}
         */

    }, {
        key: 'factorialRecursive',
        value: function factorialRecursive(n) {
            if (n === 0) {
                return 1;
            } else {
                return n * this.factorialRecursive(n - 1);
            }
        }

        /**
         * Method 2: Iterative 
         * @function factorialIterative: Print factorial of a number using iterative approach
         * @param {Number} n - a number
         * @returns {Number}
         * Time complexity is O(n).
         */

    }, {
        key: 'factorialIterative',
        value: function factorialIterative(n) {
            var temp = 1,
                i = void 0;
            for (i = 2; i <= n; i++) {
                temp *= i;
            }
            return temp;
        }

        /**
         * @function doubleFactorial: Print semi-factorial or double factorial of number using the iterative approach. 
         * 
         * Double factorial of a non-integer n is the product of all integers from 1 to n that have the same parity i.e odd or even
         * @param {Number} n - a number
         * @returns {Number}
         */

    }, {
        key: 'doublefactorial',
        value: function doublefactorial(n) {
            var temp = 1;
            for (var i = n; i >= 0; i = i - 2) {
                if (i === 0 || i === 1) return temp;else temp *= i;
            }
        }

        /**
         * @function facCountTrailingZeroes: Print the count of trailing zeroes in n!
         * @param {Number} n - a number
         * @returns {Number}
         */

    }, {
        key: 'factCountTrailingZeroes',
        value: function factCountTrailingZeroes(n) {
            var count = 0;
            for (var i = 5; n / i >= 1; i *= 5) {
                count += n / i;
            }
            return count;
        }

        /**
         * Method 1 : Using recursion.
         * @function fibRecursion: Print nth fibonacci number using recursion.
         * Time Complexity: T(n) = T(n-1) + T(n-2) which is exponential.
         * @param {Number} n - a number
         * @returns {Number}
         */

    }, {
        key: 'fibRecursion',
        value: function fibRecursion(n) {
            if (n <= 1) return n;
            return this.fibRecursion(n - 1) + this.fibRecursion(n - 2);
        }

        /**
         * Method 2: Using dynamic programming
         * @function fibDynamic: Print nth fibonacci number using dynamic programming approach.
         * Time Complexity: O(n) 
         * @param {Number} n - a number
         * @returns {Number}
         */

    }, {
        key: 'fibDynamic',
        value: function fibDynamic(n) {
            var f = [];
            f.push(n + 1);
            f[0] = 0;
            f[1] = 1;
            for (var i = 2; i <= n; i++) {
                f[i] = f[i - 1] + f[i - 2];
            }
            return f[n];
        }

        /**
         * @function Calculate geometric variance
         * @param {Number} probability
         * @returns {Number} 
         */

    }, {
        key: 'geometricVariance',
        value: function geometricVariance(probability) {
            return (1 - probability) / Math.pow(probability, 2);
        }

        /**
         * @function gcd: Calculate the greatest common divisor among the two numbers using Euclidean's algorithm.
         * 
         * @param {Number} numb1 
         * @param {Number} numb2 
         * @returns {Number}
         */

    }, {
        key: 'gcd',
        value: function gcd(numb1, numb2) {
            var temp = 0;
            while (numb1 !== 0) {
                temp = numb1;
                numb1 = numb2 % numb1;
                numb2 = temp;
            }
            return numb2;
        }

        /**
         * @function Calculate hamming distance
         * @param {Number} number1 
         * @param {Number} number2
         * @returns {Number} 
         */

    }, {
        key: 'hammingDistance',
        value: function hammingDistance(number1, number2) {
            return ((number1 ^ number2).toString(2).match(/1/g) || '').length;
        }

        /**
         * @function Check if the first number is divisible by second one
         * @param {Number} dividend 
         * @param {Number} divisor
         * @returns {Boolean} 
         */

    }, {
        key: 'isDivisible',
        value: function isDivisible(dividend, divisor) {
            return dividend % divisor === 0;
        }

        /**
         * @function Check if a number is prime
         * @param {Number} number
         * @returns {Boolean} 
         */

    }, {
        key: 'isPrime',
        value: function isPrime(number) {
            var divisor = 2;
            while (number > divisor) {
                if (number % divisor === 0) return false;else divisor++;
            }
            return true;
        }

        /**
         * @function Reverse an integer
         * @param {Number} integer
         * @returns {Number} 
         */

    }, {
        key: 'integerReversal',
        value: function integerReversal(integer) {
            var reversed = integer.toString().split('').reverse().join('');
            return parseInt(reversed) * Math.sign(integer);
        }

        /**
         * @function Calculate LCM of an array of numbers
         * @param {Array} arr - an array
         * @returns {Number} 
         */

    }, {
        key: 'lcm',
        value: function lcm(arr) {
            var _this = this;

            return arr.reduce(function (a, b) {
                return a * b / _this.gcd(a, b);
            });
        }

        /**
         * @function Predict the value of PI using Leibniz
         * @param {Number} - limit
         * @returns {Number} 
         */

    }, {
        key: 'leibniz',
        value: function leibniz(limit) {
            var temp = 0;
            for (var j = 0; j <= limit; j++) {
                temp += Math.pow(-1, j) / (2 * j + 1);
            }

            //To get PI, 4*PI/4 = PI
            return 4 * temp;
        }

        /**
         * @function Create a line from 2 points in XY plane
         * @param {Array} - [x1, y1]
         * @param {Array} - [x2, y2]
         * @returns {Number} 
         */

    }, {
        key: 'lineFromPoints',
        value: function lineFromPoints(initial, final) {
            var coeffOfX = final[1] - initial[1];
            var coeffOfY = initial[0] - final[0];
            var constant = coeffOfX * initial[0] + coeffOfY * initial[1];

            return coeffOfX + 'x + ' + coeffOfY + 'y = ' + constant;
        }

        /**
         * @function maxOrmin: Get maximum or minimum of an array
         * @param {Array} arr 
         * @param {String} task
         * @returns {Number} 
         */

    }, {
        key: 'maxOrMin',
        value: function maxOrMin(arr, task) {
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
        }

        /**
         * @function Calculate median of a sorted number array
         * @param {Array} arr - an array
         * @returns {Number} 
         */

    }, {
        key: 'median',
        value: function median(arr) {
            var median = void 0;
            arr.sort(function (a, b) {
                return a - b;
            });
            if (arr.length % 2 === 0) median = (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;else median = arr[arr.length / 2];
            return median;
        }

        /**
         * @function nthRoot: Calculates the nth root of a positive number
         * @param {Number} number - a number 
         * @param {Number} power 
         * @returns {Number}
         */

    }, {
        key: 'nthRoot',
        value: function nthRoot(number, power) {
            return Math.pow(number, 1 / power);
        }

        /**
         * @function Calculates simple permutation 
         * @param {Number} number - a number
         * @param {Number} rep - repitition
         * @returns {Number}
         */

    }, {
        key: 'permutation',
        value: function permutation(number, rep) {
            return this.factorialOneLine(number) / this.factorialOneLine(number - rep);
        }

        /**
         * @function pythagorasDistance: Calculate the pythogorean distance if side1 and side2 are 2 sides of a right-angled triangle
         * @param {Number} side1 
         * @param {Number} side2 
         * @returns {Number}
         */

    }, {
        key: 'pythagorasDistance',
        value: function pythagorasDistance(side1, side2) {
            return Math.sqrt(side1 * side1 + side2 * side2);
        }

        /**
         * @function Convert radians to degrees
         * @param {Number} deg
         * @returns {Number} 
         */

    }, {
        key: 'radToDeg',
        value: function radToDeg(rad) {
            return rad * (180 / Math.PI);
        }

        /**
         * @function Round a number to two places
         * @param {Number} number - a number
         * @returns {Number}
         */

    }, {
        key: 'round',
        value: function round(number) {
            return +(Math.round(number + 'e+2') + "e-2");
        }

        /**
         * @function Sigmoid Function
         * @param {Number} number - a number
         * @returns {Number}
         */

    }, {
        key: 'sigmoid',
        value: function sigmoid(number) {
            return 1 / (1 + Math.exp(-number));
        }

        /**
         * @function slopeOfALine: Calculates the slope of a line using points and angle of inclination. arg takes angle of inclination or an array of initial points and final points.
         * Example: arg = 60 degrees or [x0,y0,x1,y1]
         * @param {Number || Array} arg - a number or an array of points
         * @returns {Number} 
         */

    }, {
        key: 'slopeOfALine',
        value: function slopeOfALine(arg) {
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
        }

        /**
         * @function Subtract a number from another
         * @param {Array} arr - an array
         * @returns {Number} 
         */

    }, {
        key: 'subract',
        value: function subract(firstNum, secondNum) {
            return firstNum >= secondNum ? firstNum - secondNum : secondNum - firstNum;
        }

        /**
         * @function sumOfArray: Addition of all the integers in an array
         * @param {Array} arr - an array
         * @returns {Number} 
         */

    }, {
        key: 'sumOfArray',
        value: function sumOfArray(arr) {
            return arr.reduce(function (previous, current) {
                return current += previous;
            });
        }

        /**
         * @function Sine Rule using two angles & one side
         * @param {Number} sideOne 
         * @param {Number} angleOne 
         * @param {Number} angleTwo 
         * @returns {Number}
         */

    }, {
        key: 'sineRule',
        value: function sineRule(sideOne, angleOne, angleTwo) {
            return Math.sin(angleTwo / 180 * Math.PI) * (sideOne / Math.sin(angleOne / 180 * Math.PI));
        }

        /**
         * @function Cosine Rule
         * @param {Number} sideOne 
         * @param {Number} sideTwo 
         * @param {Number} theta
         * @returns {Number} 
         */

    }, {
        key: 'cosineRule',
        value: function cosineRule(sideOne, sideTwo) {
            var theta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            var angle = Math.PI / 180 * parseFloat(theta);
            return Math.sqrt(sideOne * sideOne + sideTwo * sideTwo - 2 * sideOne * sideTwo * Math.cos(angle));
        }
    }]);

    return Mathematics;
}();

module.exports = Mathematics;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var regexpattern = __webpack_require__(3).RegexPatterns;

var Strings = function () {
    function Strings() {
        _classCallCheck(this, Strings);
    }

    _createClass(Strings, [{
        key: 'anagram',

        /**
         * @function Both strings are anagrams
         * @param {String} str1 - First string
         * @param {String} str2  - Second String
         * @returns {Boolean} 
         */
        value: function anagram(str1, str2) {
            return str1.split('').sort().join('') === str2.split('').sort().join('');
        }

        /**
         * @function Camelize a string i.e CamelCase
         * @param {String} str - a String
         * @returns {String} 
         */

    }, {
        key: 'camelize',
        value: function camelize(str) {
            return str.replace(/\s(.)/g, function (val) {
                return val.toUpperCase();
            }).replace(/\s/g, '').replace(/^(.)/, function (val) {
                return val.toLowerCase();
            });
        }

        /**
         * @function Get ISO-8601 week number of a year
         * @param {Object} date: Date Object
         * @returns {Number}
         */

    }, {
        key: 'ISO8601WeekNumber',
        value: function ISO8601WeekNumber(date) {
            var d = new Date(date.valueOf());
            d.setDate(d.getDate() - (date.getDay() + 6) % 7 + 3);
            var temp = d.valueOf();
            d.setMonth(0, 1);
            if (d.getDay() !== 4) d.setMonth(0, 1 + (4 - d.getDay() + 7) % 7);
            return 1 + Math.ceil((temp - d) / 604800000);
        }

        /**
         * @function Calculate the days between two dates
         * @param {Object} date1: First date object
         * @param {Object} date2: Second date object 
         * @returns {Number}
         */

    }, {
        key: 'differenceBetweenDates',
        value: function differenceBetweenDates(date1, date2) {
            var difference = (date2.getTime() - date1.getTime()) / 1000;
            difference /= 60 * 60 * 24;
            return Math.abs(Math.round(difference));
        }

        /**
         * @function Escape characters from string
         * @param {String} str - a String 
         * @returns {String}
         */

    }, {
        key: 'escape',
        value: function escape(str) {
            if (!str) {
                throw new Error('error');
            } else {
                var map = {
                    '&': '&amp;',
                    '<': '&lt;',
                    '>': '&gt;',
                    '"': '&quot;',
                    "'": '&#039;'
                };
                return str.toString().replace(/[&<>"']/g, function (m) {
                    return map[m];
                });
            }
        }

        /**
         * @function Filter out falsy values from an array
         * @param {Array} arr - an array  
         * @returns {Array}
         */

    }, {
        key: 'filterFalsy',
        value: function filterFalsy(arr) {
            return arr.filter(function (val) {
                if (val !== false || val !== null || val !== 0 || val !== "") {
                    return val;
                }
            });
        }

        /**
         * @function Filter out an element from an array
         * @param {Array} arr: an array 
         * @param {Element} elem: an element 
         * @returns {Array}
         */

    }, {
        key: 'filter',
        value: function filter(arr, elem) {
            return arr.filter(function (val) {
                return val === elem ? val : null;
            });
        }

        /**
         * @function Generate random hex color
         * @returns {String}
         */

    }, {
        key: 'generateHexColor',
        value: function generateHexColor() {
            var letters = '0123456789ABCDEF',
                color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        /**
         * @function Generate random RGB color
         * @returns {String}
         */

    }, {
        key: 'generateRGBColor',
        value: function generateRGBColor() {
            return 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
        }

        /**
         * @function Generate a Global Unique Identifier
         * @param {Number} len - length 
         * @returns {String}
         */

    }, {
        key: 'guid',
        value: function guid(len) {
            var arr = [],
                chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
                length = len || 32;

            for (var i = 0; i < length; i++) {
                arr[i] = chars.charAt(Math.floor(Math.random() * chars.length));
            }

            return arr.join('');
        }

        /**
         * @function String Hamming Distance
         * @param {String} str1 - a string
         * @param {String} str2 - a string
         * @returns {Number}
         */

    }, {
        key: 'stringHammingDistance',
        value: function stringHammingDistance(str1, str2) {
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
        }

        /**
         * @function hasAtleastOneLowerCaseLetter: String has atleast one lower-cased letter.
         * @param {String} str - a string
         * @returns {Boolean} 
         */

    }, {
        key: 'hasAtleastOneLowerCaseLetter',
        value: function hasAtleastOneLowerCaseLetter(str) {
            var temp = false;
            var a = str.split("");
            a.forEach(function (key, index) {
                if (a[index] === key.toLowerCase()) {
                    temp = true;
                }
            });

            return temp;
        }

        /**
         * @function hasAtleastOneUpperCaseLetter: String has atleast one upper-cased letter.
         * @param {String} str - a string
         * @returns {Boolean}  
         */

    }, {
        key: 'hasAtleastOneUpperCaseLetter',
        value: function hasAtleastOneUpperCaseLetter(str) {
            var temp = false;
            var a = str.split("");
            a.forEach(function (key, index) {
                if (key.toUpperCase() === a[index]) {
                    temp = true;
                }
            });
            return temp;
        }

        /**
         * @function Converts hex color to RGB
         * @param {String} hex - a hex string
         * @returns {Array}
         */

    }, {
        key: 'hexToRgb',
        value: function hexToRgb(hex) {
            hex = hex.replace(/^#/, '');
            if (hex.length === 3) hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
            var temp = parseInt(hex, 16);

            return [temp >> 16, temp >> 8 & 255, temp & 255];
        }

        /**
         * @function Humanize a number
         * @param {Number} num - a number
         * @returns {String} 
         */

    }, {
        key: 'humanizeNumber',
        value: function humanizeNumber(num) {
            var array = ["th", "st", "nd", "rd"];
            if (num === undefined) return "";
            var lstDg = num % 10;
            return lstDg < 4 ? num + array[lstDg] : num + array[0];
        }

        /**
         * @function initials: Get the intitials of a person's name
         * @param {String} str - a string
         * @returns {String} 
         */

    }, {
        key: 'initials',
        value: function initials(str) {
            var output = '';
            str = str.split("");
            output = str[0];
            str.forEach(function (val, index) {
                if (val.indexOf(' ') != -1) {
                    output += str[index + 1];
                }
            });
            return output;
        }

        /**
         * @function isASCII: String contains ASCII characters
         * @param {String} str - a string
         * @returns {Boolean} 
         */

    }, {
        key: 'isASCII',
        value: function isASCII(str) {
            var regex = regexpattern('ascii');
            return regex.test(str);
        }

        /**
         * @function isBool: String contains true, false, 0 or 1
         * @param {String} str - a string 
         * @returns {Boolean} 
         */

    }, {
        key: 'isBool',
        value: function isBool(str) {
            return str === 'true' || str === 'false' || parseInt(str) === 0 || parseInt(str) === 1;
        }

        /**
         * @function isDataURI: String is a data uri format.
         * @param {String} str - a string
         * @returns {Boolean}  
         */

    }, {
        key: 'isDataURI',
        value: function isDataURI(str) {
            return regexpattern('dataURI').test(str);
        }

        /**
         * @function String is an emoji
         * @param {String} str - a string
         * @returns {Boolean}  
         */

    }, {
        key: 'isEmoji',
        value: function isEmoji(str) {
            return regexpattern('emoji').test(str);
        }

        /**
         * @function isEmpty: String is empty or not
         * @param {String} str - a string
         * @returns {Boolean}  
         */

    }, {
        key: 'isEmpty',
        value: function isEmpty(str) {
            return str === null || str === 'undefined' || str.length === 0;
        }

        /**
         * @function isEndWidth: String ends with target.
         * @param {String} str 
         * @param {String} target 
         * @returns {Boolean} 
         */

    }, {
        key: 'isEndWith',
        value: function isEndWith(str, target) {
            if (target) {
                return str.substr(-target.length) === target ? true : false;
            }
        }

        /**
         * @function isEquals: Compares the two strings entered
         * @param {String} str - a string
         * @param {String} elem - an element 
         */

    }, {
        key: 'isEquals',
        value: function isEquals(str, elem) {
            return str === elem;
        }

        /**
         * @function Value is a function
         * @param {Argument} val 
         * @returns {Boolean}
         */

    }, {
        key: 'isFunction',
        value: function isFunction(val) {
            return typeof val === 'function';
        }

        /**
         * @function isHexaDecimal: String is hexadecimal.
         * @param {String} str - a string
         * @returns {Boolean} 
         */

    }, {
        key: 'isHexaDecimal',
        value: function isHexaDecimal(str) {
            return regexpattern('hexdecimal').test(str);
        }

        /**
         * @function isHexColor: String is a hex color.
         * @param {String} str - a string
         * @returns {Boolean}  
         */

    }, {
        key: 'isHexColor',
        value: function isHexColor(str) {
            var hex = regexpattern('hexcolor');
            return hex.test(str);
        }

        /**
         * @function isIPAddress: String is an IP address.
         * @param {String} str - a string
         * @returns {Boolean} 
         */

    }, {
        key: 'isIPAddress',
        value: function isIPAddress(str) {
            return regexpattern('ip').test(str);
        }

        /**
         * @function String is a JSON object
         * @param {String} str
         * @returns {Boolean} 
         */

    }, {
        key: 'isJSON',
        value: function isJSON(str) {
            try {
                var obj = JSON.parse(str);
                return !!obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
            } catch (e) {}
            return false;
        }

        /**
         * @function isLowerCase: String is all lower-cased.
         * @param {String} str - a string
         * @returns {Boolean}  
         */

    }, {
        key: 'isLowerCase',
        value: function isLowerCase(str) {
            return str === str.toLowerCase();
        }

        /**
         * @function isMACAddress: String is a MAC Address.
         * @param {String} str - a string
         * @returns {Boolean}  
         */

    }, {
        key: 'isMACAddress',
        value: function isMACAddress(str) {
            var mac = regexpattern('mac');
            return mac.test(str);
        }

        /**
         * @function isMD5: Validate MD5
         * @param {String} - str - a string
         * @returns {Boolean} 
         */

    }, {
        key: 'isMD5',
        value: function isMD5(str) {
            var md5 = regexpattern('md5');
            return md5.test(str);
        }

        /**
         * @function isPalindrome: String is a palindrome.
         * @param {String} str - a string
         * @returns {Boolean}  
         */

    }, {
        key: 'isPalindrome',
        value: function isPalindrome(str) {
            var reverse = str.toLowerCase().replace(/[\W_]/g, '').split("").reverse().join("");
            return str.toLowerCase().replace(/[\W_]/g, '') === reverse;
        }

        /**
         * @function isUpperCase: String is all upper-cased.
         * @param {String} str - a string
         * @returns {Boolean}  
         */

    }, {
        key: 'isUpperCase',
        value: function isUpperCase(str) {
            return str === str.toUpperCase();
        }

        /**
         * @function isValidEmail: String is a valid email id.
         * @param {String} str - a string
         * @returns {Boolean}  
         */

    }, {
        key: 'isValidEmail',
        value: function isValidEmail(str) {
            var regex = regexpattern('email');
            return regex ? regex.test(str) : null;
        }

        /**
         * @function to Kebab Case
         * @param {String} str - a string
         * @returns {String} 
         */

    }, {
        key: 'kebabCase',
        value: function kebabCase(str) {
            return str.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/\s+/g, '-').toLowerCase();
        }

        /**
         * @function Remove tags from an HTML statement
         * @param {String} str - a string
         * @returns {String} 
         */

    }, {
        key: 'removeTags',
        value: function removeTags(str) {
            str = str.toString();
            return str.replace(/<[^>]*>/g, '');
        }

        /**
         * @function Reverse words of a sentence in place
         * @param {String} str - a string
         * @returns {String}  
         */

    }, {
        key: 'reverseInPlace',
        value: function reverseInPlace(str) {
            return str.split(' ').reverse().join(' ').split('').reverse().join('');
        }

        /**
         * @function rgbToHex: RGB to Hex format
         * @param {Number} red 
         * @param {Number} green 
         * @param {Number} blue
         * @returns {String} 
         */

    }, {
        key: 'rgbToHex',
        value: function rgbToHex(red, green, blue) {
            var hex = '';
            hex = "#" + ("0" + parseInt(red, 10).toString(16)).slice(-2) + ("0" + parseInt(green, 10).toString(16)).slice(-2) + ("0" + parseInt(blue, 10).toString(16)).slice(-2);

            return hex;
        }

        /**
         * @function Romanize a number
         * @param {Number} num - a number
         * @returns {String} 
         */

    }, {
        key: 'romanize',
        value: function romanize(num) {
            if (!+num) throw new Error('Some error');
            var digits = String(+num).split(""),
                key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
                romanNum = "",
                temp = 3;
            while (temp--) {
                romanNum = (key[+digits.pop() + temp * 10] || "") + romanNum;
            }return Array(+digits.join("") + 1).join("M") + romanNum;
        }

        /**
         * @function Secures your email using asterisks
         * @param {String} str - a string
         * @returns {String} 
         */

    }, {
        key: 'secureEmail',
        value: function secureEmail(str) {
            var str1 = void 0,
                temp = void 0,
                asterisks = void 0;
            str1 = str.split("@");
            asterisks = str1[0].length - str1[0].length * 0.8;
            temp = str1[0].substring(0, Math.floor(asterisks));

            return '' + temp + '*'.repeat(str1[0].split("").length - asterisks) + '@' + str1[1];
        }

        /**
         * @function Secure password using astrisks
         * @param {String} str - a string
         * @returns {String} 
         */

    }, {
        key: 'securePassword',
        value: function securePassword(str) {
            return '*'.repeat(str.length);
        }

        /**
         * @function to Snake Case
         * @param {String} str - a string 
         * @returns {String}
         */

    }, {
        key: 'snakeCase',
        value: function snakeCase(str) {
            return str.indexOf(" ") !== -1 ? str.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/\s+/g, '_').toLowerCase() : str.replace(/([A-Z])/g, function ($1) {
                return "_" + $1.toLowerCase();
            });
        }

        /**
         * @function Sort string characters in alphabetical order
         * @param {String} str - a string
         * @returns {String} 
         */

    }, {
        key: 'sortChar',
        value: function sortChar(str) {
            return str.toLowerCase().match(/\w/g).sort().join("");
        }

        /**
         * @function splitName: Return the first name and the last name of a person's name.
         * @param {String} str - a string
         * @returns {Array}
         */

    }, {
        key: 'splitName',
        value: function splitName(str) {
            return str.split(" ");
        }

        /**
         * @function Seperate thousands using commas
         * @param {Number} num - a number
         * @returns {String} 
         */

    }, {
        key: 'thousandSeperator',
        value: function thousandSeperator(num) {
            var parts = num.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return parts.join(".");
        }

        /**
         * @function Parse string to float value
         * @param {String} str - a string
         * @returns {Number} 
         */

    }, {
        key: 'toFloat',
        value: function toFloat(str) {
            return parseFloat(str);
        }

        /**
         * @function Parse string to integer value
         * @param {String} str - a string
         * @returns {Number} 
         */

    }, {
        key: 'toInt',
        value: function toInt(str, radix) {
            return parseInt(str, radix || 10);
        }

        /**
         * @function Convert string to titleCase
         * @param {String} str - a string
         * @returns {String}
         */

    }, {
        key: 'toTitleCase',
        value: function toTitleCase(str) {
            return str.toString().replace(/\w\S*/g, function (text) {
                return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
            });
        }

        /**
         * @function Remove leading and trailing zeroes from an array
         * @param {Array} arr - an array
         * @returns {Array} 
         */

    }, {
        key: 'trailingAndLeading',
        value: function trailingAndLeading(arr) {
            return arr.join("").replace(/^0+(\d)|(\d)0+$/gm, '$1$2');
        }

        /**
         * @function Truncate a string at provided position 
         * @param {String} str - a string
         * @param {Number} pos - position is array
         * @returns {String}
         */

    }, {
        key: 'truncate',
        value: function truncate(str, pos) {
            return str.split(" ").splice(0, pos).join(" ");
        }

        /**
         * @function Unescape the string
         * @param {String} str - an escaped string
         * @returns {String} 
         */

    }, {
        key: 'unescape',
        value: function unescape(str) {
            return str.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#x2F;/g, '/').replace(/&#x5C;/g, '\\').replace(/&#96;/g, '`');
        }

        /**
         * @function Generate a UUID i.e universally unique identifier
         * @returns {String}
         */

    }, {
        key: 'uuid',
        value: function uuid() {
            var date = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (val) {
                var r = (date + Math.random() * 16) % 16 | 0;
                date = Math.floor(date / 16);
                return (val == 'x' ? r : r & 0x3 | 0x8).toString(16);
            });
            return uuid;
        }

        /**
         * @function Count the number of vowels in a string
         * @param {String} str - a string
         * @returns {Number}
         */

    }, {
        key: 'countVowels',
        value: function countVowels(str) {
            var vowels = 'aeiouAEIOU',
                count = 0;
            str = str.trim().split("");
            str.forEach(function (val) {
                if (vowels.indexOf(val) !== -1) count++;
            });
            return count;
        }

        /**
         * @function Zerofill a number to the given length
         * @param {Number} number - a number
         * @param {*} len - length
         */

    }, {
        key: 'zeroFill',
        value: function zeroFill(number, len) {
            return '0'.repeat(len - number.toString().length) + number;
        }
    }]);

    return Strings;
}();

module.exports = Strings;

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Algorithms = function () {
    function Algorithms() {
        _classCallCheck(this, Algorithms);
    }

    _createClass(Algorithms, [{
        key: "binarySearch",


        /**
         * @function Search an element using binary search tehcnique
         * @param {Array} arr - an array 
         * @param {Element} elem - an element
         * @returns {Number} 
         */
        value: function binarySearch(arr, elem) {
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
        }

        /**
         * @function Sort an array using bubble sort technique
         * @param {Array} arr - an array
         * @returns {Array} 
         */

    }, {
        key: "bubbleSort",
        value: function bubbleSort(arr) {
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
        }

        /**
         * @function Split array into chunks of smaller arrays of the desired size
         * @param {Array} arr - an array 
         * @param {Number} size
         * @returns {Array} 
         */

    }, {
        key: "chunk",
        value: function chunk(arr, size) {
            var output = [],
                chunks = arr.length / size;
            for (var i = 0, j = 0; i < chunks; i++, j += size) {
                output[i] = arr.slice(j, j + size);
            }

            return output;
        }

        /**
         * @function Collatz Algorithm
         * @param {Number} number
         * @returns {Number} 
         */

    }, {
        key: "collatz",
        value: function collatz(number) {
            var tree = [];

            tree.push(parseInt(number));

            while (number != 1) {
                if (number % 2 == 0) {
                    number = number / 2;
                    tree.push(number);
                } else {
                    number = 3 * number + 1;
                    tree.push(number);
                }
            }

            return tree;
        }

        /**
         * @function Concatenates into a single array
         * @param {Array} arrs 
         * @returns {Array}
         */

    }, {
        key: "concat",
        value: function concat() {
            var temp = [];

            for (var _len = arguments.length, arrs = Array(_len), _key = 0; _key < _len; _key++) {
                arrs[_key] = arguments[_key];
            }

            arrs.forEach(function (arr) {
                return arr.forEach(function (val) {
                    return temp.push(val);
                });
            });
            return temp;
        }

        /**
         * @function fisherYates: Shuffle an array using the Fisher Yates Algorithm using a while loop.
         * @param {Array} arr: an array
         * @returns {Array} 
         */

    }, {
        key: "fisherYates",
        value: function fisherYates(arr) {
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
        }
    }, {
        key: "fizzBuzz",


        /**
         * @function FizzBuzz Algorithm: most famous asked question
         * @param {Number} n - a number
         * @returns {String || Number} 
         */
        value: function fizzBuzz(n) {
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
        }

        /**
         * @function Flatten/Merge two arrays
         * @param {Array} arr - an array
         * @param {Array} givenArr 
         */

    }, {
        key: "flatten",
        value: function flatten(arr, givenArr) {
            var _this = this;

            arr.forEach(function (item) {
                Array.isArray(item) && _this.flatten(item, givenArr);
                !Array.isArray(item) && givenArr.push(item);
            });

            return givenArr;
        }

        /**
         * @function Sort an array using the insertion sort technique
         * @param {Array} arr 
         * @returns {Array}
         */

    }, {
        key: "insertionSort",
        value: function insertionSort(arr) {
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
        }

        /**
         * @function Search an element using linear search technique
         * @param {Array} arr - an array
         * @param {Element} elem - an element
         * @returns {Number}
         */

    }, {
        key: "linearSearch",
        value: function linearSearch(arr, elem) {
            var temp = 0;
            arr.forEach(function (val, index) {
                if (val === elem) temp = index;else temp = -1;
            });

            return temp;
        }

        /**
         * @function Modular Exponential Algorithm
         * @param {Number} base 
         * @param {Number} power 
         * @param {Number} mod
         * @returns {Number} 
         */

    }, {
        key: "modularExponential",
        value: function modularExponential(base, power, mod) {
            if (power < 0) return -1;
            var result = 1;
            base %= mod;

            while (power > 0) {
                if (power % 2 == 1) result = result * base % mod;
                power = power >> 1;
                base = base * base % mod;
            }
            return result;
        }

        /**
         * @function Find the nth largest number from an unsorted array
         * @param {Array} arr - an array 
         * @param {Number} nth 
         * @returns {Number}
         */

    }, {
        key: "nthLargest",
        value: function nthLargest(arr, nth) {
            var large = arr.splice(arr.indexOf(Math.max.apply(null, arr)), 1);
            return nth === 1 ? +large : this.nthLargest(arr, nth - 1);
        }

        /**
         * @function Remove an element from an array
         * @param {Array} arr - an array 
         * @param {Element} elem - an element
         * @returns {Array}
         */

    }, {
        key: "remove",
        value: function remove(arr, elem) {
            arr.forEach(function (num, i) {
                if (num === elem) arr.splice(i, 1);
            });
            return arr;
        }

        /**
         * @function Remove duplicates from an array
         * @param {Array} arr - an array
         * @returns {Array} 
         */

    }, {
        key: "removeDuplicates",
        value: function removeDuplicates(arr) {
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
        }

        /**
         * @function Reverse an array
         * @param {Array} arr - an array
         * @returns {Array} 
         */

    }, {
        key: "reverse",
        value: function reverse(arr) {
            var len = arr.length;
            return arr.map(function () {
                return arr[--len];
            });
        }

        /**
         * @function Segregate 0's and 1's in an array
         * @param {Array} arr - an array
         * @returns {Array} 
         */

    }, {
        key: "segregate",
        value: function segregate(arr) {
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
        }

        /**
         * @function Sort an array using the selection sort technique
         * @param {Array} arr - an array
         * @returns {Array} 
         */

    }, {
        key: "selectionSort",
        value: function selectionSort(arr) {
            for (var index = 0; index < arr.length; index++) {
                var minimum = index;

                for (var j = index + 1; j < arr.length; j++) {
                    if (arr[j] < arr[minimum]) minimum = j;
                }
                if (index !== minimum) {
                    ;
                    var _ref2 = [arr[minimum], arr[index]];
                    arr[index] = _ref2[0];
                    arr[minimum] = _ref2[1];
                }
            }
            return arr;
        }
    }]);

    return Algorithms;
}();

module.exports = Algorithms;

/***/ })
/******/ ]);
});
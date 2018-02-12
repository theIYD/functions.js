'use strict';

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
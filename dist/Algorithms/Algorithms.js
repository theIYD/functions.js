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
class Algorithms {

    /**
     * @function Search an element using binary search tehcnique
     * @param {Array} arr - an array 
     * @param {Element} elem - an element
     * @returns {Number} 
     */
    binarySearch(arr, elem) {
        let upperBound = arr.length,
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
    bubbleSort(arr) {
        let is_sorted = false,
            temp;
        while (!is_sorted) {
            is_sorted = true;
            arr.forEach((val, index) => {
                if (arr[index] && arr[index + 1] && arr[index] > arr[index + 1]) {
                    [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]]
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
    chunk(arr, size) {
        let output = [],
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
    collatz(number) {
        let tree = [];

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
    concat(...arrs) {
        let temp = [];
        arrs.forEach(arr => arr.forEach(val => temp.push(val)));
        return temp;
    }

    /**
     * @function fisherYates: Shuffle an array using the Fisher Yates Algorithm using a while loop.
     * @param {Array} arr: an array
     * @returns {Array} 
     */
    fisherYates(arr) {
        let currentIndex = arr.length,
            temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex = currentIndex - 1;
            temporaryValue = arr[currentIndex];
            arr[currentIndex] = arr[randomIndex];
            arr[randomIndex] = temporaryValue;
        }
        return arr;
    };

    /**
     * @function FizzBuzz Algorithm: most famous asked question
     * @param {Number} n - a number
     * @returns {String || Number} 
     */
    fizzBuzz(n) {
        for (let i = 1; i < n; i++) {
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
    flatten(arr, givenArr) {
        arr.forEach((item) => {
            (Array.isArray(item)) && (this.flatten(item, givenArr));
            (!Array.isArray(item)) && (givenArr.push(item));
        });

        return givenArr;
    }

    /**
     * @function Sort an array using the insertion sort technique
     * @param {Array} arr 
     * @returns {Array}
     */
    insertionSort(arr) {
        for (let i = 1; i < arr.length; i++) {
            let value = arr[i],
                j;
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
    linearSearch(arr, elem) {
        let temp = 0;
        arr.forEach((val, index) => {
            if (val === elem) temp = index;
            else temp = -1;
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
    modularExponential(base, power, mod) {
        if (power < 0) return -1;
        let result = 1;
        base %= mod;

        while (power > 0) {
            if (power % 2 == 1) result = (result * base) % mod;
            power = power >> 1;
            base = (base * base) % mod;
        }
        return result;
    }

    /**
     * @function Find the nth largest number from an unsorted array
     * @param {Array} arr - an array 
     * @param {Number} nth 
     * @returns {Number}
     */
    nthLargest(arr, nth) {
        let large = arr.splice(arr.indexOf(Math.max.apply(null, arr)), 1);
        return (nth === 1) ? +large : this.nthLargest(arr, nth - 1);
    }

    /**
     * @function Remove an element from an array
     * @param {Array} arr - an array 
     * @param {Element} elem - an element
     * @returns {Array}
     */
    remove(arr, elem) {
        arr.forEach((num, i) => {
            if (num === elem) arr.splice(i, 1)
        });
        return arr;
    }

    /**
     * @function Remove duplicates from an array
     * @param {Array} arr - an array
     * @returns {Array} 
     */
    removeDuplicates(arr) {
        let exists = {},
            output = [];
        arr.forEach((val) => {
            if (!exists[val]) {
                output.push(val);
                exists[val] = true;
            }
        });

        return output.sort((a, b) => a - b);
    }

    /**
     * @function Reverse an array
     * @param {Array} arr - an array
     * @returns {Array} 
     */
    reverse(arr) {
        let len = arr.length;
        return arr.map(() => arr[--len]);
    }

    /**
     * @function Segregate 0's and 1's in an array
     * @param {Array} arr - an array
     * @returns {Array} 
     */
    segregate(arr) {
        let left = 0,
            size = arr.length,
            right = size - 1;
        while (left < right) {
            while (arr[left] === 0 && left < right) left++;
            while (arr[right] === 1 && left < right) right--;
            if (left < right) {
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
    selectionSort(arr) {
        for (let index = 0; index < arr.length; index++) {
            let minimum = index;

            for (let j = index + 1; j < arr.length; j++) {
                if (arr[j] < arr[minimum]) minimum = j;
            }
            if (index !== minimum)[arr[index], arr[minimum]] = [arr[minimum], arr[index]];
        }
        return arr;
    }
}

module.exports = Algorithms
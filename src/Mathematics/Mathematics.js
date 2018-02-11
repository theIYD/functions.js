class Mathematics {
    /**
     * @function average: Calculates the average of an array
     * @param {Array} arr - an array
     * @returns {Number} 
     */
    average(arr) {
        let temp = 0,
            average;
        if (Array.isArray(arr)) {
            temp = arr.reduce((previous, current) => current += previous)
            average = temp / arr.length;
            return average;
        } else {
            throw new Error('error occured')
        }
    }

    /**
     * @function Convert a base of a number to any base. 
     * @param {Number} number 
     * @param {Number} originalBase 
     * @param {Number} finalBase 
     * @returns {Number}
     */
    baseChange(number, originalBase, finalBase) {
        let output = "";
        if (number !== undefined) {
            if (finalBase >= 2 && finalBase <= 36) {
                output = parseInt(number, originalBase).toString(finalBase);
            }
        }
        return output;
    }

    /**
     * @function Clamp a number
     * @param {Number} number 
     * @param {Number} min 
     * @param {Number} max
     * @returns {Number} 
     */
    clamp(number, min, max) {
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
    factorialOneLine(n) {
        return (n === 1 || n === 0) ? 1 : n * this.factorialOneLine(n - 1);
    }

    /**
     * @function Calculates simple combination 
     * @param {Number} number - a number
     * @param {Number} rep - repitition
     * @returns {Number}
     */
    combination(number, rep) {
        return this.factorialOneLine(number) / (this.factorialOneLine(rep) * this.factorialOneLine(number - rep));
    }

    /**
     * @function countPrimeFactors: A function to count all prime factors of a given number
     * @param {Number} n - a number
     * @returns {Number} 
     */
    countPrimeFactors(n) {
        let count = 0;
        while (n % 2 == 0) {
            n = n / 2;
            count++;
        }
        for (let i = 3; i <= Math.sqrt(n); i = i + 2) {
            while (n % i == 0) {
                n = n / i;
                count++;
            }
        }
        if (n > 2) count++;
        return (count);
    }

    /**
     * @function Convert degrees to radians
     * @param {Number} deg - a number
     * @returns {Number} 
     */
    degToRad(deg) {
        return deg * (Math.PI / 180);
    }

    /**
     * @function Digital Root of a number.
     * @param {Number} input number 
     * @returns {Number}
     */
    digitalRoot(number) {
        return (number-1)%9+1;
    }

    /**
     * @function Simple division function which returns an array of quotient & remainder.
     * @param {Number} dividend 
     * @param {Number} divisor 
     * @returns {Number}
     */
    division(dividend, divisor) {
        return [dividend / divisor, dividend % divisor];
    }

    /**
     * @function: euclideanDistance: Calculates the distance between two points in any plane. Initial takes an array of initial points & Final takes an array of final points.
     * @param {Array} initial: initial points 
     * @param {Array} final: final points
     * @returns {Number}
     */
    euclideanDistance(initial, final) {
        let total = 0;
        if (initial && final) {
            for (let i = 0; i < initial.length; i++) {
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
    isEven(number) {
        return number % 2 === 0;
    }

    isOdd(number) {
        return number % 2 !== 0;
    }

    /**
     * Method 1: Recursive Function
     * @function factorialRecursive: Print factorial of a number using recursive function approach
     * Time complexity is O(n).
     * @param {Number} n - a number
     * @returns {Number}
     */
    factorialRecursive(n) {
        if (n === 0) {
            return 1
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
    factorialIterative(n) {
        let temp = 1,
            i;
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
    doublefactorial(n) {
        let temp = 1;
        for (let i = n; i >= 0; i = i - 2) {
            if (i === 0 || i === 1) return temp;
            else temp *= i;
        }
    }

    /**
     * @function facCountTrailingZeroes: Print the count of trailing zeroes in n!
     * @param {Number} n - a number
     * @returns {Number}
     */
    factCountTrailingZeroes(n) {
        let count = 0;
        for (let i = 5; n / i >= 1; i *= 5) {
            count += (n / i);
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
    fibRecursion(n) {
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
    fibDynamic(n) {
        let f = [];
        f.push(n + 1);
        f[0] = 0;
        f[1] = 1;
        for (let i = 2; i <= n; i++) {
            f[i] = f[i - 1] + f[i - 2];
        }
        return f[n];
    }

    /**
     * @function Calculate geometric variance
     * @param {Number} probability
     * @returns {Number} 
     */
    geometricVariance(probability) {
        return (1 - probability) / Math.pow(probability, 2);
    }

    /**
     * @function gcd: Calculate the greatest common divisor among the two numbers using Euclidean's algorithm.
     * 
     * @param {Number} numb1 
     * @param {Number} numb2 
     * @returns {Number}
     */
    gcd(numb1, numb2) {
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
    hammingDistance(number1, number2) {
        return ((number1 ^ number2).toString(2).match(/1/g) || '').length;
    }

    /**
     * @function Check if the first number is divisible by second one
     * @param {Number} dividend 
     * @param {Number} divisor
     * @returns {Boolean} 
     */
    isDivisible(dividend, divisor) {
        return dividend % divisor === 0
    }

    /**
     * @function Check if a number is prime
     * @param {Number} number
     * @returns {Boolean} 
     */
    isPrime(number) {
        let divisor = 2;
        while (number > divisor) {
            if (number % divisor === 0) return false;
            else divisor++;
        }
        return true;
    }

    /**
     * @function Reverse an integer
     * @param {Number} integer
     * @returns {Number} 
     */
    integerReversal(integer) {
        const reversed = integer.toString().split('').reverse().join('');
        return parseInt(reversed) * Math.sign(integer);
    }

    /**
     * @function Calculate LCM of an array of numbers
     * @param {Array} arr - an array
     * @returns {Number} 
     */
    lcm(arr) {
        return arr.reduce((a, b) => {
            return (a * b / this.gcd(a, b));
        });
    }

    /**
     * @function Predict the value of PI using Leibniz
     * @param {Number} - limit
     * @returns {Number} 
     */
    leibniz(limit) {
        let temp = 0;
        for(let j = 0; j <= limit; j++) {
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
    maxOrMin(arr, task) {
        if (task) {
            if (task.toUpperCase() === 'MAX') {
                return Math.max(...arr);
            } else if (task.toUpperCase() === 'MIN') {
                return Math.min(...arr);
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
    median(arr) {
        let median;
        arr.sort((a, b) => a - b);
        if (arr.length % 2 === 0) median = (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
        else median = arr[arr.length / 2];
        return median
    }

    /**
     * @function nthRoot: Calculates the nth root of a positive number
     * @param {Number} number - a number 
     * @param {Number} power 
     * @returns {Number}
     */
    nthRoot(number, power) {
        return Math.pow(number, 1 / power);
    }

    /**
     * @function Calculates simple permutation 
     * @param {Number} number - a number
     * @param {Number} rep - repitition
     * @returns {Number}
     */
    permutation(number, rep) {
        return this.factorialOneLine(number) / this.factorialOneLine(number - rep);
    }

    /**
     * @function pythagorasDistance: Calculate the pythogorean distance if side1 and side2 are 2 sides of a right-angled triangle
     * @param {Number} side1 
     * @param {Number} side2 
     * @returns {Number}
     */
    pythagorasDistance(side1, side2) {
        return Math.sqrt((side1 * side1 + side2 * side2));
    }

    /**
     * @function Convert radians to degrees
     * @param {Number} deg
     * @returns {Number} 
     */
    radToDeg(rad) {
        return rad * (180 / Math.PI);
    }

    /**
     * @function Round a number to two places
     * @param {Number} number - a number
     * @returns {Number}
     */
    round(number) {
        return +(Math.round(`${number}e+2`) + "e-2");
    }

    /**
     * @function Sigmoid Function
     * @param {Number} number - a number
     * @returns {Number}
     */
    sigmoid(number) {
        return 1 / (1 + Math.exp(-number));
    }

    /**
     * @function slopeOfALine: Calculates the slope of a line using points and angle of inclination. arg takes angle of inclination or an array of initial points and final points.
     * Example: arg = 60 degrees or [x0,y0,x1,y1]
     * @param {Number || Array} arg - a number or an array of points
     * @returns {Number} 
     */
    slopeOfALine(arg) {
        let slope = 0;

        if (arg) {
            if (!isNaN(arg)) {
                slope = Math.tan(arg * (Math.PI) / 180);
            } else if (Array.isArray(arg)) {
                let initialX, initialY, finalX, finalY;
                initialX = arg[0], initialY = arg[1], finalX = arg[2], finalY = arg[3];

                if (arg.every((val, i, arr) => val === 0)) {
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
    subract(firstNum, secondNum) {
        return (firstNum >= secondNum) ? firstNum - secondNum : secondNum - firstNum;
    }

    /**
     * @function sumOfArray: Addition of all the integers in an array
     * @param {Array} arr - an array
     * @returns {Number} 
     */
    sumOfArray(arr) {
        return arr.reduce((previous, current) => current += previous);
    }

    /**
     * @function Sine Rule using two angles & one side
     * @param {Number} sideOne 
     * @param {Number} angleOne 
     * @param {Number} angleTwo 
     * @returns {Number}
     */
    sineRule(sideOne, angleOne, angleTwo) {
        return Math.sin(angleTwo / 180 * Math.PI) * (sideOne / Math.sin(angleOne / 180 * Math.PI));
    }

    /**
     * @function Cosine Rule
     * @param {Number} sideOne 
     * @param {Number} sideTwo 
     * @param {Number} theta
     * @returns {Number} 
     */
    cosineRule(sideOne, sideTwo, theta = 0) {
        let angle = (Math.PI / 180) * parseFloat(theta)
        return Math.sqrt((sideOne * sideOne + sideTwo * sideTwo) - 2 * sideOne * sideTwo * Math.cos(angle))
    }
}

module.exports = Mathematics;
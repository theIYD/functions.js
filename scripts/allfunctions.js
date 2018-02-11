const funcs = [
    {
        title: '`anagram(str1, str2)`',
        topic: 'string',
        description: 'Both strings are anagrams',
        return_type: 'boolean'
    },
    {
        title: '`average(arr)`',
        topic: 'math',
        description: 'Calculates the average of an array',
        return_type: 'number'
    },
    {
        title: '`binarySearch(arr, elem)`',
        topic: 'algorithm',
        description: 'Search an element using binary search tehcnique',
        return_type: 'number(position)'
    },
    {
        title: '`bubbleSort(arr)`',
        topic: 'algorithm',
        description: 'Sort an array using bubble sort technique',
        return_type: 'array'
    },
    {
        title: '`camelize(str)`',
        topic: 'string',
        description: 'Camelize a string i.e CamelCase',
        return_type: 'string'
    },
    {
        title: '`changeBase(number, original, final)`',
        topic: 'math',
        description: 'Convert a base of a number to any base.',
        return_type: 'number'
    },
    {
        title: '`chunk(arr, size)`',
        topic: 'math',
        description: 'Split array into chunks of smaller arrays of the desired size.',
        return_type: 'array'
    },
    {
        title: '`clamp(number, min, max)`',
        topic: 'math',
        description: 'Clamp a number.',
        return_type: 'number'
    },
    {
        title: '`collatz(number)`',
        topic: 'algortihm',
        description: 'Collatz Algorithm.',
        return_type: 'number'
    },
    {
        title: '`combination(number,rep)`',
        topic: 'math',
        description: 'Calculates simple combination.',
        return_type: 'number'
    },
    {
        title: '`concat(...arrs)`',
        topic: 'algorithm',
        description: 'Concatenates into a single array.',
        return_type: 'arr'
    },
    {
        title: '`cosineRule(sideOne, sideTwo, theta)`',
        topic: 'math',
        description: 'Cosine Rule.',
        return_type: 'number'
    },
    {
        title: '`countPrimeFactors(n)`',
        topic: 'math',
        description: 'A function to count all prime factors of a given number.',
        return_type: 'number'
    },
    {
        title: '`countVowels(str)`',
        topic: 'string',
        description: 'Count the number of vowels in a string.',
        return_type: 'number'
    },
    {
        title: '`degToRad(deg)`',
        topic: 'math',
        description: 'Convert degrees to radians.',
        return_type: 'number'
    },
    {
        title: '`differenceBetweenDates(date1, date2)`',
        topic: 'math',
        description: 'Simple division function which returns an array of quotient & remainder.',
        return_type: 'array'
    },
    {
        title: '`digitalRoot(number)`',
        topic: 'math',
        description: 'Digital Root of a number',
        return_type: 'number'
    },
    {
        title: '`division(dividend, divisor)`',
        topic: 'math',
        description: 'Simple division function which returns an array of quotient & remainder.',
        return_type: 'array'
    },
    {
        title: '`doublefactorial(n)`',
        topic: 'math',
        description: 'Print semi-factorial or double factorial of number using the iterative approach.',
        return_type: 'number'
    },
    {
        title: '`escape(str)`',
        topic: 'string',
        description: 'Escape characters from string',
        return_type: 'string'
    },
    {
        title: '`euclideanDistance(initial, final)`',
        topic: 'math',
        description: 'Calculates the distance between two points in any plane. initial takes an array of initial points & final takes an array of final points.',
        return_type: 'number'
    },
    {
        title: '`factorialRecursive(n)`',
        topic: 'math',
        description: 'Print factorial of a number using recursive function approach.',
        return_type: 'number'
    },
    {
        title: '`factorialIterative(n)`',
        topic: 'math',
        description: 'Print factorial of a number using iterative approach.',
        return_type: 'number'
    },
    {
        title: '`factorialOneLine(n)`',
        topic: 'math',
        description: 'Print factorial of a number using a ternary operator.',
        return_type: 'number'
    },
    {
        title: '`factCountTrailingZeroes(n)`',
        topic: 'math',
        description: 'Print the count of trailing zeroes in n!.',
        return_type: 'number'
    },
    {
        title: '`fibRecursion(n)`',
        topic: 'math',
        description: 'Print nth fibonacci number using recursion.',
        return_type: 'number'
    },
    {
        title: '`fibDynamic(n)`',
        topic: 'math',
        description: 'Print nth fibonacci number using dynamic programming approach.',
        return_type: 'number'
    },
    {
        title: '`filter(arr, elem)`',
        topic: 'string',
        description: 'Filter out an element from an array',
        return_type: 'array'
    },
    {
        title: '`filterFalsy(arr)`',
        topic: 'string',
        description: 'Filter out falsy values from an array',
        return_type: 'array'
    },
    {
        title: '`fisherYates(arr)`',
        topic: 'math',
        description: 'Shuffle an array using the Fisher Yates Algorithm using a while loop.',
        return_type: 'array'
    },
    {
        title: '`fizzBuzz(n)`',
        topic: 'algorithm',
        description: 'FizzBuzz Algorithm: most famous asked question.',
        return_type: 'string'
    },
    {
        title: '`flatten(arr, givenArr)`',
        topic: 'algorithm',
        description: 'Flatten/Merge two arrays.',
        return_type: 'array'
    },
    {
        title: '`geometricVariance(probability)`',
        topic: 'math',
        description: 'Calculate geometric variance.',
        return_type: 'number'
    },
    {
        title: '`gcd(numb1, numb2)`',
        topic: 'math',
        description: 'Calculate the greatest common divisor among the two numbers using Euclideans algorithm.',
        return_type: 'number'
    },
    {
        title: '`generateHexColor()`',
        topic: 'string',
        description: 'Generate random hex color.',
        return_type: 'string'
    },
    {
        title: '`generateRGBColor()`',
        topic: 'string',
        description: 'Generate random RGB color.',
        return_type: 'string'
    },
    {
        title: '`guid(len)`',
        topic: 'string',
        description: 'Generate a Global Unique Identifier',
        return_type: 'string'
    },
    {
        title: '`hammingDistance(number1, number2)`',
        topic: 'math',
        description: 'Calculate hamming distance.',
        return_type: 'number'
    },
    {
        title: '`hasAtleastOneUpperCaseLetter(str)`',
        topic: 'string',
        description: 'String has atleast one upper-cased letter.',
        return_type: 'boolean'
    },
    {
        title: '`hasAtleastOneLowerCaseLetter(str)`',
        topic: 'string',
        description: 'String has atleast one lower-cased letter.',
        return_type: 'boolean'
    },
    {
        title: '`hexToRgb(hex)`',
        topic: 'string',
        description: 'Converts hex color to RGB.',
        return_type: 'array'
    },
    {
        title: '`humanizeNumber(num)`',
        topic: 'string',
        description: 'Humanize a number.',
        return_type: 'string'
    },
    {
        title: '`insertionSort(arr)`',
        topic: 'algorithm',
        description: 'Sort an array using the insertion sort technique.',
        return_type: 'array'
    },
    {
        title: '`integerReversal(integer)`',
        topic: 'mathematics',
        description: 'Reverse an integer.',
        return_type: 'number'
    },
    {
        title: '`isASCII(str)`',
        topic: 'string',
        description: 'String contains ASCII characters',
        return_type: 'boolean'
    },
    {
        title: '`isBool(str)`',
        topic: 'string',
        description: 'String contains true or false',
        return_type: 'boolean'
    },
    {
        title: '`isDataURI(str)`',
        topic: 'string',
        description: 'String is a data uri format.',
        return_type: 'boolean'
    },
    {
        title: '`isDivisible(dividend, divisor)`',
        topic: 'math',
        description: 'Check if the first number is divisible by second one.',
        return_type: 'boolean'
    },
    {
        title: '`isEmoji(str)`',
        topic: 'string',
        description: 'String is an emoji.',
        return_type: 'boolean'
    },
    {
        title: '`isEmpty(str)`',
        topic: 'string',
        description: 'String is empty.',
        return_type: 'boolean'
    },
    {
        title: '`isEndWith(str, target)`',
        topic: 'string',
        description: 'String ends with target.',
        return_type: 'boolean'
    },
    {
        title: '`isEquals(str, elem)`',
        topic: 'string',
        description: 'Compares the two strings entered.',
        return_type: 'boolean'
    },
    {
        title: '`isEven(number)`',
        topic: 'math',
        description: 'True if a number is even, false otherwise.',
        return_type: 'boolean'
    },
    {
        title: '`isFunction(val)`',
        topic: 'string',
        description: 'Value is a function.',
        return_type: 'boolean'
    },
    {
        title: '`isHexaDecimal(str)`',
        topic: 'string',
        description: 'String is hexadecimal.',
        return_type: 'boolean'
    },
    {
        title: '`isHexColor(str)`',
        topic: 'string',
        description: 'String is a hex color.',
        return_type: 'boolean'
    },
    {
        title: '`isIPAddress(str)`',
        topic: 'string',
        description: 'String is an IP address.',
        return_type: 'boolean'
    },
    {
        title: '`isJSON(str)`',
        topic: 'string',
        description: 'String is a JSON object.',
        return_type: 'boolean'
    },
    {
        title: '`isLowerCase(str)`',
        topic: 'string',
        description: 'String is all lower-cased.',
        return_type: 'boolean'
    },
    {
        title: '`isMACAddress(str)`',
        topic: 'string',
        description: 'String is a MAC Address.',
        return_type: 'boolean'
    },
    {
        title: '`isMD5(str)`',
        topic: 'string',
        description: 'String is a a MD5 type.',
        return_type: 'boolean'
    },
    {
        title: '`initials(str)`',
        topic: 'string',
        description: 'Get the initials of a persons name.',
        return_type: 'string'
    },
    {
        title: '`isOdd(number)`',
        topic: 'math',
        description: 'True if a number is odd, false otherwise.',
        return_type: 'boolean'
    },
    {
        title: '`ISO8601WeekNumber(dateObj)`',
        topic: 'string',
        description: 'Get ISO-8601 week number of a year.',
        return_type: 'number'
    },
    {
        title: '`isPalindrome(str)`',
        topic: 'string',
        description: 'String is a palindrome.',
        return_type: 'boolean'
    },
    {
        title: '`isPrime(number)`',
        topic: 'string',
        description: 'Number is a prime.',
        return_type: 'boolean'
    },
    {
        title: '`isUpperCase(str)`',
        topic: 'string',
        description: 'String is all upper-cased.',
        return_type: 'boolean'
    },
    {
        title: '`isValidEmail(str)`',
        topic: 'string',
        description: 'String is a valid email id.',
        return_type: 'boolean'
    },
    {
        title: '`kebabCase(str)`',
        topic: 'string',
        description: 'to Kebab Case.',
        return_type: 'string'
    },
    {
        title: '`lcm(arr)`',
        topic: 'math',
        description: 'Calculate LCM of an array of numbers',
        return_type: 'number'
    },
    {
        title: '`leibniz(limit)`',
        topic: 'math',
        description: 'Predict the value of PI',
        return_type: 'number'
    },
    {
        title: '`linearSearch(arr, elem)`',
        topic: 'algorithm',
        description: 'Search an element using linear search technique',
        return_type: 'number(position)'
    },
    {
        title: '`maxOrMin(arr, task)`',
        topic: 'math',
        description: 'Get maximum or minimum of an array',
        return_type: 'number'
    },
    {
        title: '`median(arr)`',
        topic: 'math',
        description: 'Calculate median of a sorted number array',
        return_type: 'number'
    },
    {
        title: '`modularExponential(base, power, mod)`',
        topic: 'algorithm',
        description: 'Modular Exponential Algorithm',
        return_type: 'number'
    },
    {
        title: '`nthRoot(number, n)`',
        topic: 'math',
        description: 'Calculates the nth root of a positive number',
        return_type: 'number'
    },
    {
        title: '`nthLargest(arr, nth)`',
        topic: 'algorithm',
        description: 'Find the nth largest number from an unsorted array',
        return_type: 'number'
    },
    {
        title: '`permutation(num,rep)`',
        topic: 'math',
        description: 'Calculates simple permutation.',
        return_type: 'number'
    },
    {
        title: '`pythagorasDistance(arg1, arg2)`',
        topic: 'math',
        description: 'Calculate the pythogorean distance if arg1 and arg2 are 2 sides of a right-angled triangle.',
        return_type: 'number'
    },
    {
        title: '`radToDeg(rad)`',
        topic: 'math',
        description: 'Convert radians to degrees',
        return_type: 'number'
    },
    {
        title: '`remove(arr)`',
        topic: 'algorithm',
        description: 'Remove an element from an array',
        return_type: 'arr'
    },
    {
        title: '`removeDuplicate(arr)`',
        topic: 'algorithm',
        description: 'Remove duplicates from an array',
        return_type: 'arr'
    },
    {
        title: '`removeTags(str)`',
        topic: 'string',
        description: 'Remove tags from an HTML statement',
        return_type: 'string'
    },
    {
        title: '`reverse(arr)`',
        topic: 'algorithm',
        description: 'Reverse an array',
        return_type: 'arr'
    },
    {
        title: '`reverseInPlace(str)`',
        topic: 'string',
        description: 'Reverse words of a sentence in place',
        return_type: 'string'
    },
    {
        title: '`rgbToHex(red,green,blue)`',
        topic: 'string',
        description: 'RGB to Hex format',
        return_type: 'string'
    },
    {
        title: '`romanize(num)`',
        topic: 'string',
        description: 'Romanize a number',
        return_type: 'string'
    },
    {
        title: '`round(number)`',
        topic: 'math',
        description: 'Round a number to two places',
        return_type: 'number'
    },
    {
        title: '`secureEmail(str)`',
        topic: 'string',
        description: 'Secures your email using asterisks',
        return_type: 'string'
    },
    {
        title: '`securePassword(str)`',
        topic: 'string',
        description: 'Secure password using astrisks',
        return_type: 'string'
    },
    {
        title: '`segregate(arr)`',
        topic: 'algorithm',
        description: 'Segregate 0\'s and 1\'s in an array',
        return_type: 'array'
    },
    {
        title: '`selectionSort(arr)`',
        topic: 'algorithm',
        description: 'Sort an array using the selection sort technique',
        return_type: 'arr'
    },
    {
        title: '`sigmoid(number)`',
        topic: 'math',
        description: 'Sigmoid Function',
        return_type: 'number'
    },
    {
        title: '`sineRule(sideOne, angleOne, angleTwo)`',
        topic: 'math',
        description: 'Sine Rule using two angles & one side',
        return_type: 'number'
    },
    {
        title: '`slopeOfALine(arg)`',
        topic: 'math',
        description: 'Calculates the slope of a line using points and angle of inclination. arg takes angle of inclination or an array of initial points and final points. Example arg = 60 degrees or [x0,y0,x1,y1]',
        return_type: 'number'
    },
    {
        title: '`snakeCase(str)`',
        topic: 'string',
        description: 'to Snake Case',
        return_type: 'string'
    },
    {
        title: '`sortChar(str)`',
        topic: 'string',
        description: 'Sort string characters in alphabetical order',
        return_type: 'string'
    },
    {
        title: '`splitName(str)`',
        topic: 'string',
        description: 'Return the first name and the last name of a person\'s name.',
        return_type: 'array'
    },
    {
        title: '`stringHammingDistance(str1, str2)`',
        topic: 'string',
        description: 'String Hamming Distance',
        return_type: 'number'
    },
    {
        title: '`subtract(firstNum, secondNum)`',
        topic: 'math',
        description: 'Subtract a number from another',
        return_type: 'number'
    },
    {
        title: '`sumOfArray(arr)`',
        topic: 'math',
        description: 'Addition of all the integers in an array',
        return_type: 'number'
    },
    {
        title: '`thousandSeperator(num)`',
        topic: 'string',
        description: 'Seperate thousands using commas',
        return_type: 'number'
    },
    {
        title: '`toFloat(str)`',
        topic: 'string',
        description: 'Parse string to float value',
        return_type: 'number'
    },
    {
        title: '`toInt(str)`',
        topic: 'string',
        description: 'Parse string to integer value',
        return_type: 'number'
    },
    {
        title: '`toTitleCase(str)`',
        topic: 'string',
        description: 'Convert string to titleCase',
        return_type: 'string'
    },
    {
        title: '`truncate(str,pos)`',
        topic: 'string',
        description: 'Truncate a string at provided position',
        return_type: 'string'
    },
    {
        title: '`trailingAndLeading(arr)`',
        topic: 'string',
        description: 'Remove leading and trailing zeroes from an array',
        return_type: 'array'
    },
    {
        title: '`unescape(str)`',
        topic: 'string',
        description: 'Unescape the string.',
        return_type: 'string'
    },
    {
        title: '`uuid()`',
        topic: 'string',
        description: 'Generate a UUID i.e universally unique identifier.',
        return_type: 'number'
    },
    {
        title: '`zeroFill(number, len)`',
        topic: 'string',
        description: 'Zerofill a number to the given length.',
        return_type: 'number'
    }
];

module.exports = funcs;
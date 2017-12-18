const funcs = [
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
        title: '`evenOrOdd(number)`',
        topic: 'math',
        description: 'Number is even or odd',
        return_type: 'boolean'
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
        title: '`flatten(arr, givenArr)`',
        topic: 'algorithm',
        description: 'Flatten/Merge two arrays.',
        return_type: 'array'
    },
    {
        title: '`gcd(numb1, numb2)`',
        topic: 'math',
        description: 'Calculate the greatest common divisor among the two numbers using Euclideans algorithm.',
        return_type: 'number'
    },
    {
        title: '`guid(len)`',
        topic: 'string',
        description: 'Generate a Global Unique Identifier',
        return_type: 'string'
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
        title: '`insertionSort(arr)`',
        topic: 'algorithm',
        description: 'Sort an array using the insertion sort technique.',
        return_type: 'array'
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
        title: '`nthRoot(number, n)`',
        topic: 'math',
        description: 'Calculates the nth root of a positive number',
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
        title: '`remove(arr)`',
        topic: 'algorithm',
        description: 'Remove an element from an array',
        return_type: 'arr'
    },
    {
        title: '`reverse(arr)`',
        topic: 'algorithm',
        description: 'Reverse an array',
        return_type: 'arr'
    },
    {
        title: '`rgbToHex(red,green,blue)`',
        topic: 'string',
        description: 'RGB to Hex format',
        return_type: 'string'
    },
    {
        title: '`secureEmail(str)`',
        topic: 'string',
        description: 'Secures your email using asterisks',
        return_type: 'string'
    },
    {
        title: '`selectionSort(arr)`',
        topic: 'algorithm',
        description: 'Sort an array using the selection sort technique',
        return_type: 'arr'
    },
    {
        title: '`slopeOfALine(arg)`',
        topic: 'math',
        description: 'Calculates the slope of a line using points and angle of inclination. arg takes angle of inclination or an array of initial points and final points. Example arg = 60 degrees or [x0,y0,x1,y1]',
        return_type: 'number'
    },
    {
        title: '`sumOfArray(arr)`',
        topic: 'math',
        description: 'Addition of all the integers in an array',
        return_type: 'number'
    },
];

module.exports = funcs;
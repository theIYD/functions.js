/**
 * Method 1: Recursive Function
 * @function factorialRecursive: Print factorial of a number using recursive function approach
 * Time complexity is O(n).
 * @param {*} n 
 */
const factorialRecursive = (n) => {
    if(n == 0) {
        return 1
    } else {
        return n*factorialRecursive(n-1);
    }
}

/**
 * Method 2: Iterative 
 * @function factorialIterative: Print factorial of a number using iterative approach
 * @param {*} n 
 * Time complexity is O(n).
 */
const factorialIterative = (n) => {
    let temp = 1, i;
    for(i=2; i<=n; i++) {
        temp*=i;
    }
    return temp;
}

/**
 * Method 3: One line solution
 * @function factorialOneLine: Print factorial of a number using a ternary operator.
 * @param {*} n 
 */
const factorialOneLine = (n) => {
    return (n==1 || n==0) ? 1 : n*factorialOneLine(n-1);
}

module.exports = {
    factorialRecursive,
    factorialIterative,
    factorialOneLine
}
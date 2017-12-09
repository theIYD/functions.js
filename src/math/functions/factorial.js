/**
 * Method 1: Recursive Function
 * @function factorialRecursive: Print factorial of a number using recursive function approach
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
 */
const factorialIterative = (n) => {
    let temp = 1, i;
    for(i=2; i<=n; i++) {
        temp*=i;
    }
    return temp;
}

module.exports = {
    factorialRecursive,
    factorialIterative
}
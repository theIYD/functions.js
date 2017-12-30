/**
 * Method 1 : Using recursion.
 * @function fibRecursion: Print nth fibonacci number using recursion.
 * Time Complexity: T(n) = T(n-1) + T(n-2) which is exponential.
 * @param {*} n 
 */
const fibRecursion = n => {
    if (n <= 1) return n;
    return fibRecursion(n-1) + fibRecursion(n-2);
}

/**
 * Method 2: Using dynamic programming
 * @function fibDynamic: Print nth fibonacci number using dynamic programming approach.
 * Time Complexity: O(n) 
 * @param {*} n 
 */
const fibDynamic = n => {
    let f = [];
    f.push(n+1);
    f[0] = 0;
    f[1] = 1;
    for(let i=2; i<=n; i++) {
        f[i] = f[i-1] + f[i-2];
    }
    return f[n];
}

module.exports = {
    fibRecursion,
    fibDynamic
};
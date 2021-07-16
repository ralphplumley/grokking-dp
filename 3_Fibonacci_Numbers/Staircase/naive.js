/*
    Time: O(3^N) - we are making three recursive calls in the same function
    Space: O(N) - for recursion
 */

const CountWays = function(n) {
    if (n === 0 || n === 1) return 1
    if (n === 2) return 2

    const count1 = CountWays(n-1)
    const count2 = CountWays(n-2)
    const count3 = CountWays(n-3)

    return count1 + count2 + count3
};

console.log(`Number of ways: ---> ${CountWays(3)}`);
console.log(`Number of ways: ---> ${CountWays(4)}`);
console.log(`Number of ways: ---> ${CountWays(5)}`);

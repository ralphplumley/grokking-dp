/*
    Time:
    Space:
 */

const CountWays = function(n) {

    const memo = []

    const recur = (n) => {
        if (n === 0 || n === 1) return 1
        if (n === 2) return 2

        if (typeof memo[n] === 'undefined') {

            const count1 = CountWays(n-1)
            const count2 = CountWays(n-2)
            const count3 = CountWays(n-3)

            memo[n] = count1 + count2 + count3
        }
        return memo[n]
    }

    return recur(n)
};

console.log(`Number of ways: ---> ${CountWays(3)}`);
console.log(`Number of ways: ---> ${CountWays(4)}`);
console.log(`Number of ways: ---> ${CountWays(5)}`);

const CountWays = function(n) {
    const memo = []

    const recur = (n) => {
        if (n === 0) return 1
        if (n < 0) return 0

        if (typeof memo[n] === 'undefined') {

            const count1 = CountWays(n - 1)
            const count3 = CountWays(n - 3)
            const count4 = CountWays(n - 4)

            memo[n] = count1 + count3 + count4
        }

        return memo[n]
    }

    return recur(n)
};

console.log(`Number of ways: ---> ${CountWays(4)}`);
console.log(`Number of ways: ---> ${CountWays(5)}`);
console.log(`Number of ways: ---> ${CountWays(6)}`);

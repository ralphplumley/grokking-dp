const solveRodCutting = function(lengths, prices, n) {

    const memo = []

    const recurse = (lengths, prices, n, index) => {
        if (n <= 0 || index >= lengths.length) return 0

        memo[index] = memo[index] || []
        if (typeof memo[index][n] !== 'undefined') return memo[index][n]

        let profit1 = prices[index] + recurse(lengths, prices, n - lengths[index], index)
        const profit2 = recurse(lengths, prices, n, index + 1)

        memo[index][n] = Math.max(profit1, profit2)
        return memo[index][n]
    }

    return recurse(lengths, prices, n, 0)
};

const lengths = [1, 2, 3, 4, 5];
const prices = [2, 6, 7, 10, 13];
console.log(`Maximum profit: ---> ${solveRodCutting(lengths, prices, 5)}`);

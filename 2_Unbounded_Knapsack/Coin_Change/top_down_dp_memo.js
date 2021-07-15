/*
    Time: O(C+T)
    Space: O(C+T)
 */
let countChange = function(denominations, total) {

    const memo = []

    const recurse = (denominations, total, index) => {
        if (total === 0) return 1
        if (total < 0 ||index >= denominations.length || denominations.length === 0) return 0

        memo[index] = memo[index] || []
        if (typeof memo[index][total] !== 'undefined') return memo[index][total]

        let sum1 = recurse(denominations, total - denominations[index], index)
        let sum2 = recurse(denominations, total, index + 1)

        memo[index][total] = sum1 + sum2
        return memo[index][total]
    }

    return recurse(denominations, total, 0)
};

console.log(`Number of ways to make change: ---> ${countChange([1, 2, 3], 5)}`);

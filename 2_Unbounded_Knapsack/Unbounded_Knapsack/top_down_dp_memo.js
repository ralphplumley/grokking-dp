let solveKnapsack = function(profits, weights, capacity) {
    const memo = []

    const recurse = (profits, weights, capacity, index) => {
       if (capacity <= 0 || profits.length === 0 || weights.length !== profits.length || index >= profits.length) return 0

        memo[index] = memo[index] || []
        if (typeof memo[index][capacity] !== 'undefined') return memo[index][capacity]

        let profit1 = 0
        if (weights[index] <= capacity) {
            profit1 = profits[index] + recurse(profits, weights, capacity - weights[index], index)
        }

        const profit2 = recurse(profits, weights, capacity, index + 1)
        memo[index][capacity] = Math.max(profit1, profit2)
        return memo[index][capacity]
    }

    return recurse(profits, weights, capacity, 0)
};

var profits = [15, 50, 60, 90];
var weights = [1, 3, 4, 5];
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 8)}`);

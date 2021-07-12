/*
    Naive implementation.
    Time: O(N*C) - where N is the number of items and C is the capacity
    Space: O(N*C)
 */

let solveKnapsack = function(profits, weights, capacity) {
    const dp = []

    const recurse = (profits, weights, capacity, currentIndex) => {
        // base check
        if (capacity <= 0 || currentIndex >= profits.length) return 0

        dp[currentIndex] = dp[currentIndex] || []
        if (typeof dp[currentIndex][capacity] !== 'undefined') return dp[currentIndex][capacity]

        // recursive call after choosing the element at the currentIndex
        // if the weight of the element at currentIndex exceeds the capacity,
        // we shouldn't process it
        let profit1 = 0
        if (weights[currentIndex] <= capacity) {
            profit1 = profits[currentIndex] + recurse(profits, weights, capacity - weights[currentIndex], currentIndex + 1)
        }

        // recursive call after excluding the element at the currentIndex
        const profit2 = recurse(profits, weights, capacity, currentIndex + 1)

        return dp[currentIndex][capacity] = Math.max(profit1, profit2)
    }

    return recurse(profits, weights, capacity, 0)
};

var profits = [1, 6, 10, 16];
var weights = [1, 2, 3, 5];
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`);
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`);

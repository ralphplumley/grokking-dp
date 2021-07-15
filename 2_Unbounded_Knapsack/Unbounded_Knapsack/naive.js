let solveKnapsack = function(profits, weights, capacity) {

    const recurse = (profits, weights, capacity, index) => {
        // base case
        if (capacity <= 0 || profits.length === 0 || weights.length !== profits.length || index >= profits.length) return 0

        let profit1 = 0
        // recursive call after choosing the items at the current index
        // note we did not increment index, as we call on all items
        if (weights[index] <= capacity) {
            profit1 = profits[index] + recurse(profits, weights, capacity - weights[index], index)
        }

        // recursive call after excluding the element at the current index
        const profit2 = recurse(profits, weights, capacity, index + 1)

        return Math.max(profit1, profit2)
    }

    return recurse(profits, weights, capacity, 0)
};

var profits = [15, 50, 60, 90];
var weights = [1, 3, 4, 5];
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 8)}`);

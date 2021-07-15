/*
    Time: O(2 ^ (C+T)), C = total coin denominations, T = total amount that we want to make change
    Space(C+T)
 */
let countChange = function(denominations, total) {

    const recurse = (denominations, total, index) => {
        if (total === 0) return 1
        if (total < 0 ||index >= denominations.length || denominations.length === 0) return 0

        let sum1 = recurse(denominations, total - denominations[index], index)
        let sum2 = recurse(denominations, total, index + 1)

        return sum1 + sum2
    }

    return recurse(denominations, total, 0)
};

console.log(`Number of ways to make change: ---> ${countChange([1, 2, 3], 5)}`);

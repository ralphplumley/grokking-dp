let countChange = function(denominations, total) {

    const memo = []

    const recurse = (denominations, total, index) => {
        if (total === 0) return 0
        if (denominations.length === 0 || index >= denominations.length) return Infinity

        memo[index] = memo[index] || []
        if (typeof memo[index][total] === 'undefined') {
            let count1 = Infinity
            if (denominations[index] <= total) {
                const result = recurse(denominations, total - denominations[index], index)
                if (result !== Infinity) count1 = result + 1
            }

            const count2 = recurse(denominations, total, index + 1)
            memo[index][total] = Math.min(count1, count2)
        }

        return memo[index][total]
    }

    const result = recurse(denominations, total, 0)
    return (result === Infinity) ? -1 : result
};

console.log(`Number of ways to make change: ---> ${countChange([1, 2, 3], 5)}`);
console.log(`Number of ways to make change: ---> ${countChange([1, 2, 3], 11)}`);
console.log(`Number of ways to make change: ---> ${countChange([1, 2, 3], 7)}`);
console.log(`Number of ways to make change: ---> ${countChange([3, 5], 7)}`)

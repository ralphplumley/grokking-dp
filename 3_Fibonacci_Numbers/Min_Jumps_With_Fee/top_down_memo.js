const findMinFee = function(fee) {
    const dp = []

    const recurse = (fee, index) => {
        if (index > fee.length - 1) return 0

        if (typeof dp[index] === 'undefined') {
            const take1Step = recurse(fee, index + 1)
            const take2Step = recurse(fee, index + 2)
            const take3Step = recurse(fee, index + 3)

            const min = Math.min(take1Step, take2Step, take3Step)

            dp[index] = fee[index] + Math.min(take1Step, take2Step, take3Step)
        }

        return dp[index]
    }

    return recurse(fee, 0)
};

console.log(`Minimum fee needed: ---> ${findMinFee([1, 2, 5, 2, 1, 2])}`);
console.log(`Minimum fee needed: ---> ${findMinFee([2, 3, 4, 5])}`);

const canPartition = function(nums) {
    const dp = []

    const recurse = (nums, index, sum1, sum2) => {
        // base check
        if (index === nums.length) return Math.abs(sum1 - sum2)

        dp[index] = dp[index] || []

        // check if we have not already processed similar problem
        if (typeof dp[index][sum1] === 'undefined') {
            // recurse call after including the number at the index in the first set
            const diff1 = recurse(nums, index + 1, sum1 + nums[index], sum2)
            const diff2 = recurse(nums, index + 1, sum1, sum2 + nums[index])

            dp[index][sum1] = Math.min(diff1, diff2)
        }
        return dp[index][sum1]
    }

    return recurse(nums, 0, 0, 0)
}

console.log(`Minimum subset difference is: ---> ${canPartition([1, 2, 3, 9])}`);
// console.log(`Minimum subset difference is: ---> ${canPartition([1, 2, 7, 1, 5])}`);
// console.log(`Minimum subset difference is: ---> ${canPartition([1, 3, 100, 4])}`);

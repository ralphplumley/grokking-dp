let canPartition = function(nums) {
    const recurse = (nums, index, sum1, sum2) => {
        // base check
        if (index === nums.length) return Math.abs(sum1 - sum2)

        // recursive call after including the number at the index in the first set
        const diff1 = recurse(nums, index + 1, sum1 + nums[index], sum2)
        const diff2 = recurse(nums, index + 1, sum1, sum2 + nums[index])

        return Math.min(diff1, diff2)
    }

    return recurse(nums, 0, 0 ,0)
};

console.log(`Minimum subset difference is: ---> ${canPartition([1, 2, 3, 9])}`);
// console.log(`Minimum subset difference is: ---> ${canPartition([1, 2, 7, 1, 5])}`);
// console.log(`Minimum subset difference is: ---> ${canPartition([1, 3, 100, 4])}`);

const countSubsets = function(nums, sum) {
    const recurse = (nums, sum, index) => {
        if (sum === 0) return 1
        if (nums.length === 0 || index >= nums.length) return 0


    }

    return recurse(nums, sum, 0)
}

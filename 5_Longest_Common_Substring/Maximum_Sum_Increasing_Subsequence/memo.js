const findMSIS = function(nums) {
    const memo = []

    const recurse = (nums, currentIndex, previousIndex) => {
        if (currentIndex === nums.length) return 0

        memo[currentIndex] = memo[currentIndex] || []
        if (typeof memo[currentIndex][previousIndex] === 'undefined') {
            // option 1: include nums[currentIndex] if it is larger than the last included number
            let sum1 = 0
            if (previousIndex === -1 || nums[currentIndex] > nums[previousIndex])
                sum1 = nums[currentIndex] + recurse(nums, currentIndex + 1, currentIndex)

            // option 2: exclude the number at the current index
            const sum2 = recurse(nums, currentIndex + 1, previousIndex)

            memo[currentIndex][previousIndex] = Math.max(sum1, sum2)
        }

        return memo[currentIndex][previousIndex]
    }

    return recurse(nums, 0, -1)
};

console.log(`Maximum Sum Increasing Subsequence is: ---> ${findMSIS([4, 1, 2, 6, 10, 1, 12])}`);
console.log(`Maximum Sum Increasing Subsequence is: ---> ${findMSIS([-4, 10, 3, 7, 15])}`);

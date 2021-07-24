const findMSIS = function(nums) {
    const recurse = (nums, currentIndex, previousIndex) => {
        if (currentIndex === nums.length) return 0

        // option 1: include nums[currentIndex] if it is larger than the last included number
        let sum1 = 0
        if (previousIndex === -1 || nums[currentIndex] > nums[previousIndex])
            sum1 = nums[currentIndex] + recurse(nums, currentIndex + 1, currentIndex)

        // option 2: exclude the number at the current index
        const sum2 = recurse(nums, currentIndex + 1, previousIndex)

        return Math.max(sum1, sum2)

    }

    return recurse(nums, 0, -1)
};

console.log(`Maximum Sum Increasing Subsequence is: ---> ${findMSIS([4, 1, 2, 6, 10, 1, 12])}`);
console.log(`Maximum Sum Increasing Subsequence is: ---> ${findMSIS([-4, 10, 3, 7, 15])}`);

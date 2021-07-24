const findLISLength = function(nums) {

    const recurse = (nums, currentIndex, previousIndex) => {
        if (currentIndex === nums.length) return 0

        // option 1: include nums[currentIndex] if it is larger than the last included number
        let c1 = 0
        if (previousIndex === -1 || nums[currentIndex] > nums[previousIndex])
            c1 = 1 + recurse(nums, currentIndex + 1, currentIndex)

        // option 2: exclude the number at current index
        const c2 = recurse(nums, currentIndex + 1, previousIndex)

        return Math.max(c1, c2)
    }

    return recurse(nums, 0, -1)
};

console.log(
    `Length of Longest Increasing Subsequence: ---> ${findLISLength([4, 2, 3, 6, 10, 1, 12])}`
);
console.log(`Length of Longest Increasing Subsequence: ---> ${findLISLength([-4, 10, 3, 7, 15])}`);

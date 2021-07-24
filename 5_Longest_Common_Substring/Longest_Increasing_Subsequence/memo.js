/*
    Time: O(N^2), N = length of nums
    Space: O(N^2 + N) => O(N^2)
 */
const findLISLength = function(nums) {

    const memo = new Map()

    const recurse = (nums, currentIndex, previousIndex, memo) => {
        if (currentIndex === nums.length) return 0

        const key = currentIndex + '#' + previousIndex
        if (memo.has(key)) return memo.get(key)

        // option 1: include nums[currentIndex] if it is larger than the last included number
        let c1 = 0
        if (previousIndex === -1 || nums[currentIndex] > nums[previousIndex])
            c1 = 1 + recurse(nums, currentIndex + 1, currentIndex, memo)

        // option 2: exclude the number at current index
        const c2 = recurse(nums, currentIndex + 1, previousIndex, memo)

        const result = Math.max(c1, c2)
        memo.set(key, result)
        return result
    }

    return recurse(nums, 0, -1, memo)
};

console.log(
    `Length of Longest Increasing Subsequence: ---> ${findLISLength([4, 2, 3, 6, 10, 1, 12])}`
);
console.log(`Length of Longest Increasing Subsequence: ---> ${findLISLength([-4, 10, 3, 7, 15])}`);

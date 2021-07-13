/*
    Time: O(2^n) - n numbers in nums
    Space: O(n) - used to store the recursion stack
 */
let canPartition = function(nums) {
    let sum = nums.reduce((acc, curr) => {
        return acc + curr
    })

    // if 'sum' is an odd number, we can't have two subsets with equal sum
    if (sum % 2 !== 0) return false

    return recurse(nums, sum / 2, 0)
};

const recurse = (nums, sum, index) => {
    // base case
    if (sum === 0) return true

    if (nums.length === 0 || index >= nums.length)  return false

    // recursive call after choosing the number at the currentIndex
    // if the number at index exceeds the sum, we shouldn't process it
    if (nums[index] <= sum) {
        if (recurse(nums, sum - nums[index], index + 1)) return true
    }

    // recurse call after excluding the number at the index
    return recurse(nums, sum, index + 1)
}

console.log(canPartition([1,2,3,4]))

const findLRSLength = function(str) {
    const memo = new Map()

    const recurse = (index1, index2) => {
        if (index1 === str.length || index2 === str.length) return 0
        if (index1 !== index2 && str[index1] === str[index2])
            return 1 + recurse(index1 + 1, index2 + 1)

        const key = index1 + '#' + index2
        if (memo.has(key)) return memo.get(key)

        const sum1 = recurse(index1, index2 + 1)
        const sum2 = recurse(index1 + 1, index2)

        const result = Math.max(sum1, sum2)
        memo.set(key, result)
        return result
    }

    return recurse(0, 0)
};

console.log(`Length of Longest Repeating Subsequence: ---> ${findLRSLength('tomorrow')}`);
console.log(`Length of Longest Repeating Subsequence: ---> ${findLRSLength('aabdbcec')}`);
console.log(`Length of Longest Repeating Subsequence: ---> ${findLRSLength('fmff')}`);

const findLRSLength = function(str) {
    const recurse = (index1, index2) => {
        if (index1 === str.length || index2 === str.length) return 0
        if (index1 !== index2 && str[index1] === str[index2])
            return 1 + recurse(index1 + 1, index2 + 1)

        const sum1 = recurse(index1, index2 + 1)
        const sum2 = recurse(index1 + 1, index2)

        return Math.max(sum1, sum2)
    }

    return recurse(0, 0)
};

console.log(`Length of Longest Repeating Subsequence: ---> ${findLRSLength('tomorrow')}`);
console.log(`Length of Longest Repeating Subsequence: ---> ${findLRSLength('aabdbcec')}`);
console.log(`Length of Longest Repeating Subsequence: ---> ${findLRSLength('fmff')}`);

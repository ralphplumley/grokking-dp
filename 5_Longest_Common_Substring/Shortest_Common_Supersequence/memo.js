const findSCSLength = function(str1, str2) {
    const memo = new Map()

    const recurse = (index1, index2) => {
        // if we have reached the end of a string, return the remaining length of the other string
        // as in this case we have to take all of the remaining other string
        if (index1 === str1.length) return str2.length - index2
        if (index2 === str2.length) return str1.length - index1

        if (str1[index1] === str2[index2]) return 1 + recurse(index1 + 1, index2 + 1)

        const key = index1 + '#' + index2
        if (memo.has(key)) return memo.get(key)

        let length1 = 1 + recurse(index1, index2 + 1)
        let length2 = 1 + recurse(index1 + 1, index2)

        const result = Math.min(length1, length2)
        memo.set(key, result)
        return result
    }

    return recurse(0, 0)
};

console.log(
    `Length of Shortest Common Subsequence: Substring: ---> ${findSCSLength('abcf', 'bdcf')}`
);
console.log(
    `Length of Shortest Common Subsequence: Substring: ---> ${findSCSLength(
        'dynamic',
        'programming'
    )}`
);

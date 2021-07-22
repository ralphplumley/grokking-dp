const findLCSLength = (s1, s2) => {
    const memo = []

    const recurse = (index1, index2) => {
        if (index1 === s1.length || index2 === s2.length) return 0

        memo[index1] = memo[index1] || []
        if (typeof memo[index1][index2] === 'undefined') {
            if (s1[index1] === s2[index2]) memo[index1][index2] = 1 + recurse(index1 + 1, index2 + 1)
            else {
                const c1 = recurse(index1, index2 + 1)
                const c2 = recurse(index1 + 1, index2)
                memo[index1][index2] = Math.max(c1, c2)
            }
        }

        return memo[index1][index2]
    }

    return recurse(0, 0)
}

console.log(`Length of Longest Common Subsequence: ---> ${findLCSLength('abdca', 'cbda')}`);
console.log(`Length of Longest Common Subsequence: ---> ${findLCSLength('passport', 'ppsspt')}`)

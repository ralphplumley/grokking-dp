const findLCSLength = (s1, s2) => {
    const recurse = (index1, index2) => {
        if (index1 === s1.length || index2 === s2.length) return 0
        if (s1[index1] === s2[index2]) return 1 + recurse(index1 + 1, index2 + 1)

        const c1 = recurse(index1, index2 + 1)
        const c2 = recurse(index1 + 1, index2)

        return Math.max(c1, c2)
    }

    return recurse(0, 0)
}

console.log(`Length of Longest Common Subsequence: ---> ${findLCSLength('abdca', 'cbda')}`);
console.log(`Length of Longest Common Subsequence: ---> ${findLCSLength('passport', 'ppsspt')}`)

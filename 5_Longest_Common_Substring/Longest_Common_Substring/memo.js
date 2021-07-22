const findLCSLength = function(s1, s2) {

    const memo = []

    const recurse = (index1, index2, count) => {
        if (index1 === s1.length || index2 === s2.length) return count

        memo[index1] = memo[index1] || []
        memo[index1][index2] = memo[index1][index2] || []
        if (typeof memo[index1][index2][count] === 'undefined') {
            let c1 = count
            if (s1[index1] === s2[index2]) {
                c1 = recurse(index1 + 1, index2 + 1, count + 1)
            }

            const c2 = recurse(index1, index2 + 1, 0)
            const c3 = recurse(index1 + 1, index2, 0)

            memo[index1][index2][count] = Math.max(c1, Math.max(c2, c3))
        }

        return memo[index1][index2][count]
    }

    return recurse(0, 0, 0)
};

console.log(`Length of Longest Common Substring: ---> ${findLCSLength('abdca', 'cbda')}`);
console.log(`Length of Longest Common Substring: ---> ${findLCSLength('passport', 'ppsspt')}`);

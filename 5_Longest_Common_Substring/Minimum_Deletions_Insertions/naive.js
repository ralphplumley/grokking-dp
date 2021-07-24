/*
    Time: O(2 ^ Math.max(m,n)), Size of recursion tree will be 2(m+n). M = s1.length, N = s2.length
    Space: O(Math.max(m,n)), Depth of recursion tree will go upto max(m,n)
 */

const findMDI = function(s1, s2) {

    const lcs = (s1, s2, m, n) => {
        if (m === 0 || n === 0) return 0
        if (s1.charAt(m - 1) === s2.charAt(n - 1)) return 1 + lcs(s1, s2, m - 1, n - 1)
        else return Math.max(lcs(s1, s2, m, n - 1), lcs(s1, s2, m - 1, n))
    }

    return s1.length + s2.length - 2 * lcs(s1, s2, s1.length, s2.length)

    // const c1 = -1;
    // console.log(`Minimum deletions needed: ${s1.length - c1}`);
    // console.log(`Minimum insertions needed: ${s2.length - c1}`);
};

console.log(findMDI('abc', 'fbc'))
// console.log(findMDI('abdca', 'cbda'))
// console.log(findMDI('passport', 'ppsspt'))

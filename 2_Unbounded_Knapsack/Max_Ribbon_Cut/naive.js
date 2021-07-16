/*
    Naive way would be to try every combination of ribbon lengths, to select the max one that gives the total length of N.
    Time: O(2 ^ (L+T)), L = total ribbon lengths, N = total count
    Space: O(L+T)
 */
let countRibbonPieces = function(ribbonLengths, total) {

    const recurse = (ribbonLengths, total, index) => {
        if (total === 0) return 0
        if (ribbonLengths.length === 0 || index >= ribbonLengths.length) return -Infinity

        let c1 = -Infinity
        if (ribbonLengths[index] <= total) {
            const result = recurse(ribbonLengths, total - ribbonLengths[index], index)
            if (result !== -Infinity) c1 = result + 1
        }

        const c2 = recurse(ribbonLengths, total, index + 1)

        return Math.max(c1, c2)
    }

    const result = recurse(ribbonLengths, total, 0)
    return (result === -Infinity) ? -1 : result
};

console.log(`Maximum number of ribbons: ---> ${countRibbonPieces([2, 3, 5], 5)}`);
console.log(`Maximum number of ribbons: ---> ${countRibbonPieces([2, 3], 7)}`);
console.log(`Maximum number of ribbons: ---> ${countRibbonPieces([3, 5, 7], 13)}`);
// console.log(`Maximum number of ribbons: ---> ${countRibbonPieces([3, 5], 7)}`);

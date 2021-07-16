/*
    Time:
    Space:
 */
let countRibbonPieces = function(ribbonLengths, total) {

    const memo = []

    const recurse = (ribbonLengths, total, index, memo) => {
        if (total === 0) return 0
        if (ribbonLengths.length === 0 || index >= ribbonLengths.length) return -Infinity

        memo[index] = memo[index] || []

        if (typeof memo[index][total] === 'undefined') {

            let c1 = -Infinity
            if (ribbonLengths[index] <= total) {
                const result = recurse(ribbonLengths, total - ribbonLengths[index], index, memo)
                if (result !== -Infinity) c1 = result + 1
            }

            const c2 = recurse(ribbonLengths, total, index + 1, memo)
            memo[index][total] = Math.max(c1, c2)
        }

        return memo[index][total]
    }

    const result = recurse(ribbonLengths, total, 0, memo)
    return (result === -Infinity) ? -1 : result
};

console.log(`Maximum number of ribbons: ---> ${countRibbonPieces([2, 3, 5], 5)}`);
console.log(`Maximum number of ribbons: ---> ${countRibbonPieces([2, 3], 7)}`);
console.log(`Maximum number of ribbons: ---> ${countRibbonPieces([3, 5, 7], 13)}`);
// console.log(`Maximum number of ribbons: ---> ${countRibbonPieces([3, 5], 7)}`);

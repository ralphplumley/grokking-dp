const LPS = (str) => {
    const memo = []

    const recurse = (start, end) => {
        if (start > end) return 0
        if (start === end) return 1

        memo[start] = memo[start] || []

        if (typeof memo[start][end] === 'undefined') {
            // case 1: elements at the beginning and the end are the same
            if (str[start] === str[end]) return 2 + recurse(start + 1, end - 1)

            // case 2: skip one element either from the beginning or the end
            let c1 = recurse(start + 1, end)
            let c2 = recurse(start, end - 1)

            memo[start][end] = Math.max(c1, c2)
        }

        return memo[start][end]
    }

    return recurse(0, str.length - 1)
}

console.log("Length of LPS ---> " + LPS("abdbca"));
console.log("Length of LPS ---> " + LPS("cddpd"));
console.log("Length of LPS ---> " + LPS("pqr"))
console.log("Length of LPS ---> " + LPS("a"))

const findSPMCount = function(str, pat) {

    const memo = new Map()

    const recurse = (strIndex, patIndex) => {
        // if we have reached the end of the pattern
        if (patIndex === pat.length) return 1

        // if we have reached the end of the string but pattern still has some characters left
        if (strIndex === str.length) return 0

        const key = strIndex + '#' + patIndex
        if (memo.has(key)) return memo.get(key)

        let c1 = 0
        if (str[strIndex] === pat[patIndex])
            c1 = recurse(strIndex + 1, patIndex + 1)

        const c2 = recurse(strIndex + 1, patIndex)

        const result = c1 + c2
        memo.set(key, result)
        return result
    }

    return recurse(0, 0)
};

console.log(`Count of pattern in the string: ---> ${findSPMCount('baxmx', 'ax')}`);
console.log(`Count of pattern in the string: ---> ${findSPMCount('tomorrow', 'tor')}`);

const findSI = function(m, n, p) {
    function findSIRecursive(m, n, p, mIndex, nIndex, pIndex) {
        // if we have reached the end of the all the strings
        if (mIndex === m.length && nIndex === n.length && pIndex === p.length) return true;

        // if we have reached the end of 'p' but 'm' or 'n' still have some characters left
        if (pIndex === p.length) return false;

        let b1 = false,
            b2 = false;
        if (mIndex < m.length && m.charAt(mIndex) == p.charAt(pIndex))
            b1 = findSIRecursive(m, n, p, mIndex + 1, nIndex, pIndex + 1);

        if (nIndex < n.length && n.charAt(nIndex) == p.charAt(pIndex))
            b2 = findSIRecursive(m, n, p, mIndex, nIndex + 1, pIndex + 1);

        return b1 || b2;
    }
    return findSIRecursive(m, n, p, 0, 0, 0);
};

console.log(`String leterleaving: ---> ${findSI('abd', 'cef', 'abcdef')}`);
console.log(`String leterleaving: ---> ${findSI('abd', 'cef', 'adcbef')}`);
console.log(`String leterleaving: ---> ${findSI('abc', 'def', 'abdccf')}`);
console.log(`String leterleaving: ---> ${findSI('abcdef', 'mnop', 'mnaobcdepf')}`);

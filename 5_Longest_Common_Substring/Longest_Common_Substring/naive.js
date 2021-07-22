const findLCSLength = function(s1, s2) {

    const recurse = (index1, index2, count) => {
        if (index1 === s1.length || index2 === s2.length) return count
        if (s1[index1] === s2[index2]) count = recurse(index1 + 1, index2 + 1, count + 1)

        const count1 = recurse(index1, index2 + 1, 0)
        const count2 = recurse(index1 + 1, index2, 0)

        return Math.max(count, Math.max(count1, count2))
    }

    return recurse(0, 0, 0)
};

console.log(`Length of Longest Common Substring: ---> ${findLCSLength('abdca', 'cbda')}`);
console.log(`Length of Longest Common Substring: ---> ${findLCSLength('passport', 'ppsspt')}`);

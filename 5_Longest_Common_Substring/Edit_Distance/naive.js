/*
    Time: O(3 ^ M+N), M and N are lengths of the input strings
    Space: O(N + M) for recursion stack
 */

const findMinOperations = function(str1, str2) {

    const recurse = (index1, index2) => {
        // if we have reached the end of str1,
        // then we have to insert all the remaining chars of str2
        if (index1 === str1.length) return str2.length - index2

        // if we have reached the end of str2,
        // then we have to delete all the remaining chars of str1
        if (index2 === str2.length) return str1.length - index1

        // if the strings have a matching character,
        // we can recursively match for the remaining lengths
        if (str1.charAt(index1) === str2.charAt(index2))
            return recurse(index1 + 1, index2 + 1)

        const sumOperation1 = 1 + recurse(index1 + 1, index2) // perform deletion
        const sumOperation2 = 1 + recurse(index1, index2 + 1) // perform insertion
        const sumOperation3 = 1 + recurse(index1 + 1, index2 + 1) // perform replacement

        return Math.min(sumOperation1, Math.min(sumOperation2, sumOperation3))
    }

    return recurse(0, 0)
};

console.log(`Minimum Edit Distance: ---> ${findMinOperations('bat', 'but')}`);
console.log(`Minimum Edit Distance: ---> ${findMinOperations('abdca', 'cbda')}`);
console.log(`Minimum Edit Distance: ---> ${findMinOperations('passpot', 'ppsspqrt')}`);

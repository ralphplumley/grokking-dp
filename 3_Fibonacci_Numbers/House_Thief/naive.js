const findMaxSteal = function(wealth) {
    const recurse = (index) => {
        if (index > wealth.length - 1) return 0

        const burgleCurrentHouse = wealth[index] + recurse(index + 2)
        const skipCurrent = recurse(index + 1)

        return Math.max(burgleCurrentHouse, skipCurrent)
    }

    return recurse(0)
};

console.log(`Maximum stealing: ---> ${findMaxSteal([2, 5, 1, 3, 6, 2, 4])}`);
console.log(`Maximum stealing: ---> ${findMaxSteal([2, 10, 14, 8, 1])}`);

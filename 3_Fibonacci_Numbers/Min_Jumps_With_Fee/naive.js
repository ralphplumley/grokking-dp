const findMinFee = function(fee) {
    const recurse = (fee, index) => {
        if (index > fee.length - 1) return 0

        const take1Step = recurse(fee, index + 1)
        const take2Step = recurse(fee, index + 2)
        const take3Step = recurse(fee, index + 3)

        const min = Math.min(take1Step, take2Step, take3Step)

        return min + fee[index]
    }

    return recurse(fee, 0)
};

console.log(`Minimum fee needed: ---> ${findMinFee([1, 2, 5, 2, 1, 2])}`);
console.log(`Minimum fee needed: ---> ${findMinFee([2, 3, 4, 5])}`);

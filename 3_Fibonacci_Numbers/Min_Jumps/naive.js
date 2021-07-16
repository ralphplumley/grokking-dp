const countMinJumps = function(jumps) {

    const recurse = (index) => {

        if (index === jumps.length - 1) return 0
        if (jumps[index] === 0) return Infinity

        let totalJumps = Infinity
        let start = index + 1
        const end = index + jumps[index]

        while (start < jumps.length && start <= end) {
            const minJumps = recurse(start++)
            if (minJumps !== Infinity) totalJumps = Math.min(totalJumps, minJumps + 1)
        }

        return totalJumps
    }

    return recurse(1)
};

console.log(`Minimum jumps needed: ---> ${countMinJumps([2, 1, 1, 1, 4])}`);
console.log(`Minimum jumps needed: ---> ${countMinJumps([1, 1, 3, 6, 9, 3, 0, 1, 3])}`);

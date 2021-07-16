const CountWays = function(n) {
    if (n === 0) return 1
    if (n < 0) return 0

    const count1 = CountWays(n - 1)
    const count3 = CountWays(n - 3)
    const count4 = CountWays(n - 4)

    return count1 + count3 + count4
};

console.log(`Number of ways: ---> ${CountWays(4)}`);
console.log(`Number of ways: ---> ${CountWays(5)}`);
console.log(`Number of ways: ---> ${CountWays(6)}`);

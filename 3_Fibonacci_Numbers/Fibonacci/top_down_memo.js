const calculateFibonacci = function(n) {
    const memo = []

    const fib = (n) => {
        if (n < 2) return n
        if (memo[n]) return memo[n]
        memo[n] = fib(n-1) + fib(n-2)
        return memo[n]
    }

    return fib(n)
};

console.log(`5th Fibonacci is ---> ${calculateFibonacci(5)}`);
console.log(`6th Fibonacci is ---> ${calculateFibonacci(6)}`);
console.log(`7th Fibonacci is ---> ${calculateFibonacci(7)}`);

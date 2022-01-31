// level {1/2/3}
// level 2

// Write a function in Javascript to print the sum of the first n fibonacci numbers.

function sumOfFibonacci(n) {
    const Fibonacci = [];
    if (n <= 0)
        return 0;
    
    Fibonacci[0] = 0;
    Fibonacci[1] = 1;

    const sum = Fibonacci[0] + Fibonacci[1];

    for (var i = 2; i <= n; i++){
        Fibonacci[i] = Fibonacci[i - 1] + Fibonacci[i - 2];
        sum += Fibonacci[i];
    }

    return sum;
}
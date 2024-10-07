function* primeGenerator(limit) {
    let number = 2;

    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    while (number <= limit) {
        if (isPrime(number)) {
            yield number;
        }
        number++;
    }
}

// Example usage:
const primes = primeGenerator(20);
for (let prime of primes) {
    console.log(prime);
}

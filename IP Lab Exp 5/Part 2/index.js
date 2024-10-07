const numbersArray = [1, 2, 3, 4, 5];

const squareIterator = {
    arr: numbersArray,
    index: 0,
    next() {
        if (this.index < this.arr.length) {
            const result = { value: this.arr[this.index] ** 2, done: false };
            this.index++;
            return result;
        } else {
            return { value: undefined, done: true };
        }
    }
};

// Example usage:
let iterator = squareIterator;
let iterationResult = iterator.next();
while (!iterationResult.done) {
    console.log(iterationResult.value);
    iterationResult = iterator.next();
}

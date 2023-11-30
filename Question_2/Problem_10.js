function PosNum(arr) {
    return arr.filter(num => num > 0);
}

const inputArray = [2, -5, 10, -3, 8, -1, 0, 7];
const positiveNumbers = PosNum(inputArray);
console.log(positiveNumbers);

function findMissingNumber(arr) {
    const n = arr.length + 1;
    const totalSum = (n * (n + 1)) / 2;
    
    const arrSum = arr.reduce((acc, curr) => acc + curr, 0);
    
    return totalSum - arrSum;
}

const inputArray = [1, 2, 3, 5, 6, 7, 8];
const missingNumber = findMissingNumber(inputArray);
console.log("The missing number is:", missingNumber);

function getMaxProduct(arr) {
    if (arr.length < 2) {
        return "The array should have at least two elements.";
    }

    let maxProduct = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let product = arr[i] * arr[j];
            if (product > maxProduct) {
                maxProduct = product;
            }
        }
    }

    return maxProduct;
}

const inputArray = [2, 3, 5, 6, 7];
const result = getMaxProduct(inputArray);
console.log("Maximum Product:", result);

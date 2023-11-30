function parseString(...params) {
    let isNumber = true;
    let sum = 0;
    let result = '';

    for (let param of params) {
        if (!isNaN(param)) {
            sum += parseFloat(param);
        } else {
            isNumber = false;
            result += param + ' ';
        }
    }

    if (isNumber) {
        return sum;
    } else {
        return result.trim();
    }
}

console.log(parseString("21", "24", "40"));
console.log(parseString("Hello", "Alpha"));
console.log(parseString("Summer", "2022"));

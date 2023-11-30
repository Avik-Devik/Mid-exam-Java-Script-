function removeacz(inputString) {
    let result = inputString.replace(/[acz]/gi, '');
    return result;
}

let input = "Avik Kumar Das";
let output = removeacz(input);
console.log(output);
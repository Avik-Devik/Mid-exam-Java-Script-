function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Example usage:
const inputString = 'hello';
const reversedString = reverseString(inputString);
console.log(reversedString);

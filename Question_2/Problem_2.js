function CountPairs(inpstr) {
    let count = 0;

    for (let i = 0; i < inpstr.length - 1; i++) {
        // Check if current character is aletter
        const letter = /[a-z]/.test(inpstr[i]);

        // Check if next character is an even digit
        const even = /[02468]/.test(inpstr[i + 1]);

        // If current character isletter and next character is an even digit,then count++
        if (letter && even) {
            count++;
        }
    }

    return count;
}

// Input
const input = "a3b2ccd2";
const result = CountPairs(input);
console.log(result);

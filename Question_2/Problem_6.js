function findShortestWord(str) {
    const words = str.replace(/[^\w\s]/g, '').split(' ');

    let shortestWord = words[0];
    let shortestLength = shortestWord.length;

    for (let i = 1; i < words.length; i++) {
        const currentWord = words[i];
        const currentLength = currentWord.length;

        if (currentLength < shortestLength) {
            shortestWord = currentWord;
            shortestLength = currentLength;
        }
    }

    return shortestWord;
}

const sentence = "The quick brown fox jumps over the lazy dog";
console.log(findShortestWord(sentence));

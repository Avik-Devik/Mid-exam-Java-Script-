function countWords(str) {
    const words = str.split(' ');
    return words.length;
  }
  
  const sentence = "Rain rain go away, come again another day.";
  console.log(countWords(sentence));
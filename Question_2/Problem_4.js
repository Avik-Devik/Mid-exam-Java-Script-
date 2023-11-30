function isPalindrome(str) {
    const alphanumericStr = str.toLowerCase().replace(/[\W_]/g, '');
    const reversedStr = alphanumericStr.split('').reverse().join('');
    return alphanumericStr === reversedStr;
  }
  
  console.log(isPalindrome("racecar"));
  console.log(isPalindrome("hello"));

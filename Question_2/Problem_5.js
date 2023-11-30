function mergeArrays(arr1, arr2) {
    const mergedArray = arr1.concat(arr2);
    const sortedArray = mergedArray.sort((a, b) => a - b);
    return sortedArray;
  }
  
  const array1 = [1, 3, 5, 7, 9];
  const array2 = [2, 4, 6, 8, 10];
  
  const mergedAndSortedArray = mergeArrays(array1, array2);
  console.log(mergedAndSortedArray);
  

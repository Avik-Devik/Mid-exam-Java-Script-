function removeDuplicates(names) {
    return [...new Set(names)];
}

let studentNames = ['Zara', 'Sadia', 'Mahin', 'Adnan', 'Maisha', 'Adnan', 'Faiyaz'];
studentNames = removeDuplicates(studentNames);
console.log(studentNames);

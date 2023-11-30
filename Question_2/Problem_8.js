let bookTitles = [];
let authorNames = [];
let copiesAvailable = [];

function createBookList(bookTitle, authorName, copies) {
    bookTitles.push(bookTitle);
    authorNames.push(authorName);
    copiesAvailable.push(copies);
}

function AddCopies(bookTitle, addedCopies) {
    const index = bookTitles.indexOf(bookTitle);
    if (index !== -1) {
        copiesAvailable[index] += addedCopies;
        console.log(`Updated number of copies available of ${bookTitle} to ${copiesAvailable[index]}`);
    } else {
        console.log(`Book "${bookTitle}" not found.`);
    }
}

function SellBook(bookTitle, soldCopies) {
    const index = bookTitles.indexOf(bookTitle);
    if (index !== -1) {
        if (copiesAvailable[index] >= soldCopies) {
            copiesAvailable[index] -= soldCopies;
            console.log(`Updated number of copies available of ${bookTitle} to ${copiesAvailable[index]}`);
        } else {
            console.log(`Not enough copies available for "${bookTitle}" to sell ${soldCopies} copies.`);
        }
    } else {
        console.log(`Book "${bookTitle}" not found.`);
    }
}

function GetDetails() {
    let details = [];
    for (let i = 0; i < bookTitles.length; i++) {
        details.push(`"${bookTitles[i]}" by "${authorNames[i]}" number of copies available ${copiesAvailable[i]}`);
    }
    return details.join(', ');
}

createBookList('Bohubrihi', 'Humayun Ahmed', 10);
AddCopies('Bohubrihi', 5);
SellBook('Bohubrihi', 3);
console.log(GetDetails());

let addBook = document.getElementById("add");
let bookName;

addBook.addEventListener("click", function () {
  bookName = prompt("Enter a book: ");
  addBookToLibrary();
});

//Array to store the books
const myLibrary = [];

//Constructor function to create "book" objects
function Book() {}

//Function to store the "book" objects into the array
function addBookToLibrary() {
  myLibrary.push(bookName);
  displayBook(bookName);
}

//Function to display books
function displayBook(bookName) {
  console.log(bookName);
}

let showBook = document.getElementById("show");
showBook.addEventListener("click", function () {
  console.log(myLibrary);
});

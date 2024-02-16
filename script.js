let addBook = document.getElementById("add");
let bookName;

// addBook.addEventListener("click", function () {
//   bookName = prompt("Enter a book: ");
//   addBookToLibrary();
// });

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
  const body = document.body;
  const libraryBody = document.getElementById("library-body");
  const bookContainer = document.createElement("div");
  bookContainer.innerHTML = bookName;
  bookContainer.classList.add("book-container");
  libraryBody.append(bookContainer);
  body.append(libraryBody);
}

let showBook = document.getElementById("show");
showBook.addEventListener("click", function () {
  console.log(myLibrary);
});

//Dialog Box functionality
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog" + "button");
// const closeButton = document.querySelector("dialog button");

//Showing the dialog box on the button click
addBook.addEventListener("click", function () {
  dialog.showModal();
});

// //Closing the dialog box by clicking on the "Close" button
// closeButton.addEventListener("click", function () {
//   dialog.close();
// });

const form = document.getElementById("book-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const bookTitle = document.getElementById("book-title").value;
  const authorName = document.getElementById("author-name").value;
  const pageNumber = document.getElementById("page-number").value;
  const readStatus = document.querySelector(
    'input[name = "read-status"]:checked'
  ).value;

  form.reset();

  console.log("Book Title:", bookTitle);
  console.log("Author Name:", authorName);
  console.log("Page Number:", pageNumber);
  console.log("Read Status:", readStatus);
});

const closeButton = document.getElementById("close");
closeButton.addEventListener("click", function (event) {
  event.preventDefault();
  dialog.close();
  form.reset();
});

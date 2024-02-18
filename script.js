let addBook = document.getElementById("add");
let bookName;
let removeButton;
var readStatus;

// addBook.addEventListener("click", function () {
//   bookName = prompt("Enter a book: ");
//   addBookToLibrary();
// });

//Array to store the books
const myLibrary = [];

//Constructor function to create "book" objects
function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  this.info = function () {
    return (
      this.title +
      " by " +
      this.author +
      ", " +
      this.pages +
      ", " +
      this.readStatus
    );
  };
  // displayBook(bookName);
}

//Function to display books
function displayBook(bookName) {
  const body = document.body;
  const libraryBody = document.getElementById("library-body");
  const bookContainer = document.createElement("div");
  const title = document.createElement("h3");
  title.innerHTML = bookName.title;
  const author = document.createElement("p");
  author.textContent = "Author: ";
  const pages = document.createElement("p");
  pages.textContent = "Pages: ";

  removeButton = document.createElement("button");

  removeButton.innerHTML = "Remove Book";

  //Buton to print the index value of the book object
  const indexButton = document.createElement("button");
  indexButton.innerHTML = "Check index";

  // Button to change the status
  const changeStatus = document.createElement("button");
  changeStatus.innerHTML = bookName.readStatus;

  changeStatus.addEventListener("click", function () {
    bookName.toggleStatus(changeStatus);
  });
  author.append(bookName.author);
  pages.append(bookName.pages);

  bookContainer.append(title);
  bookContainer.append(author);
  bookContainer.append(pages);
  bookContainer.append(status);
  bookContainer.append(removeButton);
  bookContainer.append(indexButton);
  bookContainer.append(changeStatus);
  bookContainer.classList.add("book-container");
  libraryBody.append(bookContainer);
  body.append(libraryBody);

  // calling the function to change the read status

  removeButton.addEventListener("click", function () {
    myLibrary.splice(myLibrary.indexOf(bookName), 1);
    libraryBody.removeChild(bookContainer);
  });

  indexButton.addEventListener("click", function () {
    console.log(myLibrary.indexOf(bookName));
  });

  // dynamicToggleButton.checked = bookData.toggleButtonState;
}

//adding function to the removeButton button:

// let showBook = document.getElementById("show");
// showBook.addEventListener("click", function () {
//   console.log(myLibrary);
// });

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
  dialog.close();

  bookName = new Book(bookTitle, authorName, pageNumber, readStatus);
  console.log(bookName);
  myLibrary.push(bookName);

  //When the form is submitted, the displayBook function is called to display the book card.
  displayBook(bookName);
});

//Function to store the "book" objects into the array
// function addBookToLibrary() {
//   myLibrary.push(bookName);
// }

//Function to close the dialog box using the close 'X' button
const closeButton = document.getElementById("close");
closeButton.addEventListener("click", function (event) {
  event.preventDefault();
  dialog.close();
  form.reset();
});

// Selecting the toggle switch using JavaScript

// toggleSwitch.addEventListener("click", function () {

// });

//Function to toggle a book's read status
Book.prototype.toggleStatus = function (buttonValue) {
  if (buttonValue.innerHTML === "Read") {
    buttonValue.innerHTML = "Not Read";
    this.readStatus = "Not read";
  } else if (buttonValue.innerHTML === "Not Read") {
    buttonValue.innerHTML = "Read";
    this.readStatus = "Read";
  }
};

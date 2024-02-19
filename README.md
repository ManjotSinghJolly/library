# enkindle - Library Management System

enkindle is a simple library management system implemented using HTML, CSS, and JavaScript. It allows users to add books to their library, including details such as the title, author, number of pages, and whether they have read the book or not. Users can also remove books from the library and change the read status of each book.

## Features

- **Add Books:** Users can add new books to the library by filling out a form with details like the title, author, number of pages, and read status.
- **Remove Books:** Each book card displayed in the library interface has a remove button. Clicking this button removes the corresponding book from the library.
- **Change Read Status:** Users can toggle the read status of each book between "Read" and "Not Read" using a button on the book card.
- **Responsive Design:** The library interface adapts to different screen sizes, ensuring a seamless user experience across devices.
- **Dynamic Grid Layout:** Book cards are displayed in a grid layout, automatically adjusting to fit the available space and maintaining a visually appealing presentation.

## JavaScript Concepts Used

- **Objects:** JavaScript objects are used to represent individual books in the library. Each book object contains properties such as title, author, pages, and read status.
- **Prototypes:** A prototype function is added to the Book constructor to enable toggling the read status of each book. This allows all book objects to share the same function definition, resulting in more efficient memory usage.
- **Array Storage:** All book objects created by users are stored in an array called `myLibrary`. This array allows for easy management and manipulation of book data, such as adding, removing, and updating book details.

## Usage

1. **Adding Books:** Click the "Add Book" button in the banner to open a dialog box. Fill out the form with the book details and click "Add Book" to add it to the library.
2. **Removing Books:** To remove a book, click the "Remove Book" button on the respective book card.
3. **Changing Read Status:** Toggle the read status of a book by clicking the appropriate button on the book card.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/ManjotSinghJolly/library.git
   ```

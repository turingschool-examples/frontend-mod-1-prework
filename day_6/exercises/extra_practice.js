// Create a book class
// Make sure that your book class has at least 3 properties and 2 methods.
// Log those instances using your repl console or console.logs

class Book {
  constructor(numPages, author, genreType) {
    this.numPages = numPages;
    this.author = author;
    this.genreType = genreType;
  }

  getGenreType() {
     console.log(this.genreType);
   }

   getNumPages() {
    console.log(this.numPages);
   }

   getAuthor() {
     console.log(this.author);
   }
};

var reading = new Book(300, "JK Rowling", "Fantasy")


// Call the methods here

reading.getGenreType();
reading.getNumPages();
reading.getAuthor();

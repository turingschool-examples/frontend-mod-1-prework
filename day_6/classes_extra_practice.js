// ## Extra Practice

// ### Create a Book Class

// Create a book class. Make sure that your book class has at least 3 properties and 2 methods. Log those instances using your repl console or console.logs
class book {
  constructor(isNew, coverType, price){
  this.isNew = isNew;
  this.coverType = coverType;
  this.price = price;
  }
    hardCover(){
      this.coverType = "Hard Cover";
    }
    usedBook(){
      this.isNew = false;
    }
}
var elevation = new book(true, "?", 8.95);
elevation.hardCover();
elevation.usedBook();
console.log(elevation);


// ### Create a Library Class

// Create a Library class. Add properties as you wish, but the be sure to include a `collection` property that starts as an empty array.
class library {
  constructor(title, author){
    this.collection = [''];
    this.title = title;
    this.author = author;
  }
  addBook(){
    this.collection.push();
  }
  titles(){

  }
  authors(){

  }
}

book1 = new library("Elevation", "Stephen King");
book1.addBook();

console.log(library);

// If you have time:

// * Add an `addBook` method that takes an instance of book and adds it to your collection.
// * Add a `titles` method that iterates over your collection of books and returns only their titles.
// * Add an `authors` method that iterates over your collection of books and returns the authors for each book.

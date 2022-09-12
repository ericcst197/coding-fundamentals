class Library {
  constructor(name) {
    this.name = name;
  }

  books = [];

  addBook(book) {
    return this.books.push(book);
  }

  getBooks() {
    return this.books.map(({ name, _ }) => name);
  }

  getBooksByCategory(category) {
    category = category.toLowerCase();
    return this.books
      .filter((book) => book.category.toLowerCase() === category)
      .map(({ name, _ }) => name);
  }
}

class Book {
  constructor(name, author, category) {
    this.name = name;
    this.author = author;
    this.category = category;
  }
}

const library = new Library("National Library Malaysia");

const bookA = new Book("Book A", "Mr. A", "Sci-Fi");
const bookB = new Book("Book B", "Mr. A", "Sci-Fi");
const bookC = new Book("Book C", "Mr. B", "Horror");

library.addBook(bookA);
library.addBook(bookB);
library.addBook(bookC);

const allBooks = library.getBooks();
const horrorBooks = library.getBooksByCategory("horror");

console.log(allBooks);
console.log(horrorBooks);

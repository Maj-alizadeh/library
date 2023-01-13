const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
Book.prototype.display = function () {
  return `${this.title} <br> ${this.author} <br> ${this.pages} <br> ${this.read}`;
};

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}

function displayBook() {
  for (let i = 0; i < myLibrary.length; i++) {
    const card = document.createElement('div');
    card.classList.add('book-card');
    card.innerHTML += myLibrary[i].display();
    document.body.appendChild(card);
  }
}
const book1 = new Book('The Hobbit', 'Tolkin', 295, 'has read');
const book2 = new Book('The Hobbit2', 'Tolkin', 395, 'has read');
const book3 = new Book('The Hobbit3', 'Tolkin', 195, 'has read');

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

// displayBook();

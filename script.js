const myLibrary = [];
const bookCardContainer = document.querySelector(".book-card-container");

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  display() {
    return `Title : ${this.title} <br><br> Author : ${this.author} <br><br> Pages : ${this.pages} <br><br> Read Status : ${this.read}`;
  }
}

// create a book card
function addCard(i, book) {
  const card = document.createElement("div");
  card.dataset.index = i;
  card.classList.add("book-card");
  card.innerHTML += book.display();
  return card;
}

// create delete button for each card
function addDeleteButton(i) {
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.classList.add("delete-button");
  deleteButton.dataset.index = i;
  return deleteButton;
}

// create read status button
function addReadStatusButton(i) {
  const readButton = document.createElement("button");
  readButton.innerHTML = "Read status";
  readButton.classList.add("read-status-button");
  readButton.dataset.index = i;
  return readButton;
}
// change read status
function changeReadStatus(e) {
  const { index } = e.target.dataset;
  const { read } = myLibrary[index];
  switch (read) {
    case "Read":
      myLibrary[index].read = "Not Read";
      break;
    case "Not Read":
      myLibrary[index].read = "Read";
      break;
    default:
      myLibrary[index].read = "";
  }
  displayBook();
}

// delete book card
function deleteCard(e) {
  myLibrary.splice(e.target.dataset.index, 1);
  const element = document.querySelector(
    `div[data-index="${e.target.dataset.index}"]`
  );
  element.remove();
}

// display book card on the page
function displayBook() {
  bookCardContainer.innerHTML = " ";
  for (let i = 0; i < myLibrary.length; i++) {
    const card = addCard(i, myLibrary[i]);
    const deleteButton = addDeleteButton(i);
    const readStatusButton = addReadStatusButton(i);
    card.appendChild(readStatusButton);
    card.appendChild(deleteButton);
    bookCardContainer.appendChild(card);
    readStatusButton.addEventListener("click", changeReadStatus);
    deleteButton.addEventListener("click", deleteCard);
  }
}

// add book to mylibrary array
function addBookToLibrary(book) {
  myLibrary.push(book);
  displayBook();
}

function addBookButton() {
  document.querySelector(".form-popup").style.display = "block";
}
function closeForm() {
  document.querySelector(".form-popup").style.display = "none";
}
document
  .querySelector(".add-book-button")
  .addEventListener("click", addBookButton);
document.querySelector(".close-button").addEventListener("click", closeForm);

function submitBooks(event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  let read = "";
  if (document.getElementById("read").checked) {
    read = document.getElementById("read").value;
  } else {
    read = document.getElementById("not-read").value;
  }
  const newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);
}

const form = document.querySelector(".form-container");
form.addEventListener("submit", submitBooks);

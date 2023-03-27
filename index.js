import time from './modules/date.js';
import NavFunction from './modules/nav.js';
import RenderBooks from './modules/render.js';

const inputTitle = document.querySelector('.input-title');
const inputAuthor = document.querySelector('.input-author');
const form = document.querySelector('.form');
const timeElement = document.querySelector('.time-stamp');
const bookList = document.querySelector('.books-list');

class BookList {
  constructor() {
    this.books = [];
  }

  addBook() {
    if (inputTitle.value.length !== 0 && inputAuthor.value.length !== 0) {
      if (this.books.length !== 0) {
        this.books.push({
          title: inputTitle.value,
          author: inputAuthor.value,
          id: this.books[this.books.length - 1].id + 1,
        });
        inputTitle.value = '';
        inputAuthor.value = '';
      } else {
        this.books.push({
          title: inputTitle.value,
          author: inputAuthor.value,
          id: 1,
        });
        inputTitle.value = '';
        inputAuthor.value = '';
      }

      localStorage.setItem('books', JSON.stringify(this.books));
      this.renderBooks();
      this.setRemoveEventListeners();
    }
  }

  renderBooks() {
    RenderBooks(this.books, bookList);
  }

  setRemoveEventListeners() {
    this.books.forEach((book) => {
      const removeBtn = document.getElementById(`remove-${book.id}`);
      removeBtn.addEventListener('click', () => {
        this.books = this.books.filter((element) => element.id !== book.id);

        localStorage.setItem('books', JSON.stringify(this.books));
        this.renderBooks();
        this.setRemoveEventListeners();
      });
    });
  }
}

time(timeElement);

const booksList = new BookList();

const reterevedBooks = localStorage.getItem('books');

if (reterevedBooks) {
  booksList.books.push(...JSON.parse(reterevedBooks));
  booksList.renderBooks();
  booksList.setRemoveEventListeners();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  booksList.addBook();
});

// Nav bar tabs

const navs = document.querySelectorAll('nav ul li');
NavFunction(navs);
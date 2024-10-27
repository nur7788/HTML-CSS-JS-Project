// Variables to store books, users, and borrowed books
let books = [];
let users = [];
let borrowedBooks = [];

// Adding a book to the library
document.getElementById('add-book-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const title = document.getElementById('book-title').value;
  const author = document.getElementById('book-author').value;
  books.push({ title, author });
  displayBooks();
  clearBookForm();
});

// Displaying available books
function displayBooks() {
  const bookList = document.getElementById('book-list');
  bookList.innerHTML = '';
  books.forEach((book, index) => {
    const li = document.createElement('li');
    li.textContent = `${book.title} by ${book.author}`;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remove';
    deleteButton.addEventListener('click', () => {
      books.splice(index, 1);
      displayBooks();
    });
    li.appendChild(deleteButton);
    bookList.appendChild(li);
    updateBookSelect();
  });
}

// Adding a user
document.getElementById('add-user-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const userName = document.getElementById('user-name').value;
  users.push(userName);
  displayUsers();
  clearUserForm();
});

// Displaying registered users
function displayUsers() {
  const userList = document.getElementById('user-list');
  userList.innerHTML = '';
  users.forEach((user, index) => {
    const li = document.createElement('li');
    li.textContent = user;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remove';
    deleteButton.addEventListener('click', () => {
      users.splice(index, 1);
      displayUsers();
      updateUserSelect();
    });
    li.appendChild(deleteButton);
    userList.appendChild(li);
    updateUserSelect();
  });
}

// Borrowing a book
document.getElementById('borrow-book-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const user = document.getElementById('user-select').value;
  const bookTitle = document.getElementById('book-select').value;
  borrowedBooks.push({ user, bookTitle });
  displayBorrowedBooks();
});

// Displaying borrowed books
function displayBorrowedBooks() {
  const borrowedList = document.getElementById('borrowed-list');
  borrowedList.innerHTML = '';
  borrowedBooks.forEach((borrow, index) => {
    const li = document.createElement('li');
    li.textContent = `${borrow.bookTitle} borrowed by ${borrow.user}`;
    const returnButton = document.createElement('button');
    returnButton.textContent = 'Return';
    returnButton.addEventListener('click', () => {
      borrowedBooks.splice(index, 1);
      displayBorrowedBooks();
    });
    li.appendChild(returnButton);
    borrowedList.appendChild(li);
  });
}

// Clear input forms after submission
function clearBookForm() {
  document.getElementById('book-title').value = '';
  document.getElementById('book-author').value = '';
}

function clearUserForm() {
  document.getElementById('user-name').value = '';
}

// Update book and user select options for borrowing
function updateBookSelect() {
  const bookSelect = document.getElementById('book-select');
  bookSelect.innerHTML = '';
  books.forEach((book) => {
    const option = document.createElement('option');
    option.value = book.title;
    option.textContent = book.title;
    bookSelect.appendChild(option);
  });
}

function updateUserSelect() {
  const userSelect = document.getElementById('user-select');
  userSelect.innerHTML = '';
  users.forEach((user) => {
    const option = document.createElement('option');
    option.value = user;
    option.textContent = user;
    userSelect.appendChild(option);
  });
}

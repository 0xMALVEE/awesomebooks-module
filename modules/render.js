const RenderBooks = (books, booksList) => {
  let finalHtml = '';
  let i = 0;
  books.forEach((book) => {
    let grayBg = '';
    if (i % 2 === 0) {
      grayBg = 'gray-bg';
    }
    const htmlToInsert = `
      <div class="books ${grayBg}">
        <p>"${book.title}" By ${book.author}</p>
        <button id="remove-${book.id}"> Remove </button>
      </div>
    `;
    i += 1;
    finalHtml += htmlToInsert;
  });
  booksList.innerHTML = `<div class="book-wrapper">${finalHtml}</div>`;
};

export default RenderBooks;
export const handleView = (() => {
  const bookPreviewsCont = document.querySelector(".books-container");
  const bookSpecificsCont = document.querySelector(".book-container");
  const bookCover = document.querySelector(".book__presentation--image img");
  const bookTitle = document.querySelector("[data-title]");
  const bookAuthor = document.querySelector("[data-author]");
  const bookDescription = document.querySelector("[data-description]");

  const displayPreviewsContainer = () => {
    bookPreviewsCont.classList.remove("hidden");
    bookPreviewsCont.innerHTML = "";
  };

  const handleBookPreviews = (books) => {
    displayPreviewsContainer();
    _displayBookPreviews(books);
  };

  function _displayBookPreviews(books) {
    books.forEach((book, index) => {
      const currBook = _generateMarkup(book, index);
      bookPreviewsCont.appendChild(currBook);
    });
  }

  function _generateMarkup(book, index) {
    const li = document.createElement("li");
    li.classList.add("book-preview");
    li.dataset.numBook = index;

    const bookPreviewContent = `
    <div class="book__info">
      <div class="book__info--image">
        <img src="https://covers.openlibrary.org/b/id/${book.cover}-M.jpg" />
      </div>
      <ul class="book__info--about">
        <li><strong>Title</strong>: ${book.title}</li>
        <li><strong>Author</strong>: ${book.author}</li>
      </ul>
    </div>
    <div class="learn__more">
      <ion-icon name="chevron-down-outline" class="chevron-down"></ion-icon>
    </div>
    `;

    li.insertAdjacentHTML("beforeend", bookPreviewContent);
    return li;
  }

  const toggleBookContainer = () => {
    bookSpecificsCont.classList.toggle("hidden");
  };

  const handleBookDisplay = (book, description) => {
    toggleBookContainer();
    _displayBooksSpecifics(book, description);
  };

  function _displayBooksSpecifics(book, description) {
    bookCover.src = `https://covers.openlibrary.org/b/id/${book.cover}-M.jpg`;
    bookTitle.textContent = `${book.title}`;
    bookAuthor.textContent = `${book.author}`;
    bookDescription.textContent = description;
  }

  return {
    displayPreviewsContainer,
    toggleBookContainer,
    handleBookPreviews,
    handleBookDisplay,
  };
})();

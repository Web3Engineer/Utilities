const getBookScriptIntoLocalStor = function (_book) {
  const bookScript = document.createElement("script");
  bookScript.src = `https://githubraw.com/Web3Engineer/bible-books/main/${_book}.js`;
  bookScript.async = false;
  bookScript.onload = function () {
    const book = eval(_book);
    localStorage.setItem(_book, JSON.stringify(book));
  };
  document.body.append(bookScript);
};
getBookScriptIntoLocalStor("Daniel");

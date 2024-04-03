const pullInBookJSONfuncc = function (_book, _chapter, _verse) {
  fetch(
    `"https://cdn.jsdelivr.net/gh/Web3Engineer/bible-books@main/${_book}.json"`
  )
    .then((response) => response.json()) //deals with the promise object (usually need to convert to object)
    .then((data) => {
      // At this point, data is already a JavaScript object
      // You can directly work with the data here
      console.log(data.chapters[_chapter].verses[_verse]); //Output the data to the console
      return data.chapters[_chapter].verses[_verse];
    })
    .catch((error) => {
      console.error("Error fetching JSON:", error);
    });
};
pullInBookJSONfuncc("John", 0, 0);

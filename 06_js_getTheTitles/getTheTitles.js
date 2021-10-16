const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

const getTheTitles = function(books) {
    const arr = []
    for (book of books) {
        arr.push(book.title)
    }
    return arr
};

// Do not edit below this line
module.exports = getTheTitles;

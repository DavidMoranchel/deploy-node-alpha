module.exports = function(app) {
  var book = require('../controllers/bookController');

  // book Routes
  app.route('/book')
    .get(book.list_all_books)
    .post(book.create_a_book)

  app.route('/book/:id')
    .get(book.read_a_book)
    .put(book.update_a_book)
    .delete(book.delete_a_book);

  app.route('/book/author/:id')
  .get(book.read_a_book_whit_author);
};




















// app.route('/book')
//   .get(book.list_all_books)
//   .post(book.create_a_book)
//
// app.route('/book/:id')
//   .get(book.read_a_book)
//   .put(book.update_a_book)
//   .delete(book.delete_a_book);

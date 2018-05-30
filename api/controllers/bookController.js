var mongoose = require('mongoose'),
  Book = mongoose.model('Book'),
  Author = mongoose.model('Author');

exports.list_all_books = function(req, res) {
  Book.find({}, function(err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};

exports.create_a_book = function(req, res) {
  var new_book = new Book(req.body);
  new_book.save(function(err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};

exports.read_a_book_whit_author = (req, res) => {
  Book.findById(req.params.id, function(err, book) {
    if (err)
      res.send(err);
    Author.findById(book.author, function(err, author) {
      if (err)
        res.send(err);
      res.json({
        book: book,
        author: author,
        status: res.statusCode
      });
      console.log(res);
    });
  });
};

exports.read_a_book = function(req, res) {
  Book.findById(req.params.id, function(err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};

exports.update_a_book = function(req, res) {
  Book.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};

exports.delete_a_book = function(req, res) {
  Book.remove({ _id: req.params.id }, function(err, book) {
    if (err)
      res.send(err);
    res.json({ message: 'Book successfully deleted' });
  });
};

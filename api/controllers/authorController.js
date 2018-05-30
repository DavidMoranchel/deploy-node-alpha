var mongoose = require('mongoose'),
  Author = mongoose.model('Author');

exports.list_all_authors = function(req, res) {
  Author.find({}, function(err, author) {
    if (err)
      res.send(err);
    res.json(author);
  });
};

exports.create_a_author = function(req, res) {
  var new_author = new Author(req.body);
  new_author.save(function(err, author) {
    if (err)
      res.send(err);
    res.json(author);
  });
};

exports.read_a_author = function(req, res) {
  Author.findById(req.params.id, function(err, author) {
    if (err)
      res.send(err);
    res.json(author);
  });
};

exports.update_a_author = function(req, res) {
  Author.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, author) {
    if (err)
      res.send(err);
    res.json(author);
  });
};

exports.delete_a_author = function(req, res) {
  Author.remove({ _id: req.params.id }, function(err, author) {
    if (err)
      res.send(err);
    res.json({ message: 'Author successfully deleted' });
  });
};

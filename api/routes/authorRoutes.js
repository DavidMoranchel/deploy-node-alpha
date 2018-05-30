module.exports = function(app) {
  var author = require('../controllers/authorController');

  // author Routes
  app.route('/author')
    .get(author.list_all_authors)
    .post(author.create_a_author)

  app.route('/author/:id')
    .get(author.read_a_author)
    .put(author.update_a_author)
    .delete(author.delete_a_author);
};

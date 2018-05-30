var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
  title: {
    type: String,
    required: 'Ingresa el titulo'
  },
  price: Number,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: 'Ingresa un autor'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Book', BookSchema);

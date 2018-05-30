var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AuthorSchema = new Schema({
  firstname: {
    type: String,
    required: 'Ingresa el nombre'
  },
  lastname: {
    type: String,
    // required: 'Ingresa el apellido'
  },
  biography: String,
  facebook : {
    type: String,
    unique: true,
    validate: {
        validator: function(text) {
            return text.indexOf('https://www.facebook.com/') === 0;
        },
        message: 'Facebook necesita empezar con https://www.facebook.com/'
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Author', AuthorSchema);

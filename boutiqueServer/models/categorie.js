var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CategorieSchema = new Schema({
  nom : String,
  description : String,
  id_boutique : String,
});

module.exports = mongoose.model('Categorie', CategorieSchema);

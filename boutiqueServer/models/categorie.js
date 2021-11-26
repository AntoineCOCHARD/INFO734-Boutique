var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CategorieSchema = new Schema({
  nom : String,
  description : String,
  id_boutique : String,
  image :{type : String,
    default : "https://previews.123rf.com/images/ionutparvu/ionutparvu1612/ionutparvu161200410/67602131-cat%C3%A9gories-signe-le-mot-word-word-logo-rouge-.jpg"},
});

module.exports = mongoose.model('Categorie', CategorieSchema);

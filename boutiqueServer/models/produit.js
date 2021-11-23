var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProduitSchema = new Schema({
  nom : String,
  description : String,
  prix : Number,
  photo :{type : String,
    default : "./images/default.png"},
  id_categorie : String,
});

module.exports = mongoose.model('Produit', ProduitSchema);

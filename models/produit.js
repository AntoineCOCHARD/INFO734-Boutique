var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProduitSchema = new Schema({
  title : String,
  description : String,
  prix : Number,
});

module.exports = mongoose.model('Produit', ProduitSchema);

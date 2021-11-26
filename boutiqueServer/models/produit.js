var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProduitSchema = new Schema({
  nom : String,
  description : String,
  prix : Number,
  image :{type : String,
    default : "https://www.inao.gouv.fr/var/inao_site/storage/images/media/phototheque/logos/logo-nouveau-site/25388-1-fre-FR/Logo-nouveau-site_image_full.jpg"},
  id_categorie : String,
});

module.exports = mongoose.model('Produit', ProduitSchema);

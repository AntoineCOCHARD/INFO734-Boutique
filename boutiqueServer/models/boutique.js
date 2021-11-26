var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BoutiqueSchema = new Schema({
  title : String,
  description : String,
  image :{type : String,
    default : "https://foiegrasartisanal.com/wp-content/uploads/2013/12/Logo-boutique@2x.png"},
  });

module.exports = mongoose.model('Boutique', BoutiqueSchema);

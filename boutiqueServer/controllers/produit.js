function createProduit(req, res) {
    let Produit = require('../models/produit');
    let newProduit = Produit ({
        nom: req.body.nom,
        description : req.body.description,
        prix : req.body.prix,
        image : req.body.image,
        id_categorie : req.body.id_categorie
    });
  
    newProduit.save()
    .then((savedProduit) => {

        //send back the created Produit
        res.json(savedProduit);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readProduits(req, res) {

    let Produit = require("../models/produit");
    if(req.params.id == "all"){
        Produit.find({})
        .then((produits) => {
            console.log(produits)
            res.status(200).json(produits);
        }, (err) => {
            res.status(500).json(err);
        });
    }
    else{
        Produit.find({id_categorie: req.params.id})
        .then((produits) => {
            console.log(produits)
            res.status(200).json(produits);
        }, (err) => {
            res.status(500).json(err);
        });
    }
    
 }


function readProduit(req, res) {

    let Produit = require("../models/produit");

    Produit.findById({_id : req.params.id})
    .then((produit) => {
        res.status(200).json(produit);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function updateProduit(req, res) {

    let Produit = require("../models/produit");

    Produit.findByIdAndUpdate({_id: req.params.id}, 
        {nom : req.body.nom, 
        description : req.body.description,
        prix : req.body.prix,
        id_categorie : req.body.id_categorie,
        image : req.body.image },
        {new : true})
    .then((updatedProduit) => {
        res.status(200).json(updatedProduit);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteProduit(req, res) {

    let Produit = require("../models/produit");

    Produit.findOneAndRemove({_id : req.params.id})
    .then((deletedProduit) => {
        res.status(200).json(deletedProduit);
    }, (err) => {
        res.status(500).json(err);
    });
 }



module.exports.create = createProduit;
module.exports.reads = readProduits;
module.exports.read = readProduit;
module.exports.delete = deleteProduit;
module.exports.update = updateProduit;


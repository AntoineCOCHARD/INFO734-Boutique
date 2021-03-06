function createCategorie(req, res) {
    let Categorie = require('../models/categorie');
    let newCategorie = Categorie ({
        nom: req.body.nom,
        description : req.body.description,
        id_boutique : req.body.id_boutique,
        image : req.body.image});
  
    newCategorie.save()
    .then((savedCategorie) => {

        //send back the created Categorie
        res.json(savedCategorie);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readCategories(req, res) {

    let Categorie = require("../models/categorie");
    if(req.params.id == "all"){
        Categorie.find({})
        .then((categories) => {
            console.log(categories)
            res.status(200).json(categories);
        }, (err) => {
            res.status(500).json(err);
        });
    }
    else{
        Categorie.find({id_boutique: req.params.id})
        .then((categories) => {
            console.log(categories)
            res.status(200).json(categories);
        }, (err) => {
            res.status(500).json(err);
        });
    }
 }



function readCategorie(req, res) {

    let Categorie = require("../models/categorie");

    Categorie.findById({_id : req.params.id})
    .then((categorie) => {
        res.status(200).json(categorie);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function updateCategorie(req, res) {

    let Categorie = require("../models/categorie");

    Categorie.findByIdAndUpdate({_id: req.params.id}, 
        {nom : req.body.nom, 
        description : req.body.description,
        id_boutique : req.body.id_boutique,
        image : req.body.image},
        {new : true})
    .then((updatedCategorie) => {
        res.status(200).json(updatedCategorie);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteCategorie(req, res) {

    let Categorie = require("../models/categorie");

    Categorie.findOneAndRemove({_id : req.params.id})
    .then((deletedCategorie) => {
        res.status(200).json(deletedCategorie);
    }, (err) => {
        res.status(500).json(err);
    });
 }



module.exports.create = createCategorie;
module.exports.reads = readCategories;
module.exports.read = readCategorie;
module.exports.delete = deleteCategorie;
module.exports.update = updateCategorie;


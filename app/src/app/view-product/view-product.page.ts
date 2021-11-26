import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-view',
  templateUrl: './view-product.page.html',
  styleUrls: ['./view-product.page.scss'],
})
export class ViewProductPage implements OnInit {
  produit : any;
  api : RestService;
  id : string;
  nom : string;
  description : string;
  prix : string;
  image : string;

  constructor(public restapi: RestService, 
    public loadingController: LoadingController, 
    private route: ActivatedRoute,
    public alertController: AlertController,
    public router : Router) {

    this.api = restapi;

  }

  

  

  async getProduit(id:any) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getProduit(this.id)
      .subscribe(res => {
        console.log(res);
        this.produit = res;
        this.nom = this.produit.nom;
        this.description = this.produit.description;
        this.prix = this.produit.prix;
        this.image = this.produit.image;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  async saveProduit(){
    await this.api.updateProduit(this.produit._id, this.produit)
    .subscribe(res => {
        console.log(res);
        this.router.navigate(['/listProduct/' + this.produit.id_categorie]);
      }, (err) => {
        console.log(err);
      });
  }

  async deleteProduit(){
    await this.api.deleteProduit(this.produit._id)
    .subscribe(res => {
        console.log(res);
        this.router.navigate(['/listProduct/' + this.produit.id_categorie]);
      }, (err) => {
        console.log(err);
      });
  }

  save() {

    console.log(this.description);
    console.log(this.nom);
    console.log(this.prix);
    console.log(this.produit._id);
    console.log(this.image);

    this.produit.nom = this.nom;
    this.produit.description = this.description;
    this.produit.prix = this.prix;
    this.produit.image = this.image;

    this.saveProduit();

  }

  delete() {

    this.deleteProduit();
    
  }

  async alertNoSave() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Attention !',
      message: 'Si vous continuez, les données <strong>ne</strong> seront <strong>pas</strong> sauvegardées',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Annuler');
          }
        }, {
          text: 'Continuer',
          handler: () => {
            console.log('Continuer');
            this.router.navigate(['/listProduct/' + this.produit.id_categorie])
          }
        }
      ]
    });

    await alert.present();
  }
  

  async alertDeleteProduct() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Attention !',
      message: 'Si vous continuez, le produit sera <strong>supprimé</strong>',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Annuler');
          }
        }, {
          text: 'Continuer',
          handler: () => {
            console.log('Continuer');
            this.delete()
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap)=> {
      this.id=params.get('id');
    });
    console.log("Current id: " + this.id);
    this.getProduit(this.id);
  }
}

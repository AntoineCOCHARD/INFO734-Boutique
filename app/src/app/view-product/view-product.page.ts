import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

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

  constructor(public restapi: RestService, 
    public loadingController: LoadingController, 
    private route: ActivatedRoute, 
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
        this.router.navigate(['/listProduct']);
      }, (err) => {
        console.log(err);
      });
  }

  async deleteProduit(){
    await this.api.deleteProduit(this.produit._id)
    .subscribe(res => {
        console.log(res);
        this.router.navigate(['/listProduct']);
      }, (err) => {
        console.log(err);
      });
  }

  save() {

    console.log(this.description);
    console.log(this.nom);
    console.log(this.prix);
    console.log(this.produit._id);

    this.produit.nom = this.nom;
    this.produit.description = this.description;
    this.produit.prix = this.prix;

    this.saveProduit();

  }

  delete() {

    this.deleteProduit();
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap)=> {
      this.id=params.get('id');
    });
    console.log("Current id: " + this.id);
    this.getProduit(this.id);
  }
}

import { Component } from '@angular/core';

import { LoadingController, NavController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'list-product.page.html',
  styleUrls: ['list-product.page.scss'],
})
export class ListProductPage {

  produits : any;
  id : string;
  api : RestService;

  constructor(public restapi: RestService, 
    public loadingController: LoadingController,
    public navController: NavController,
    private route: ActivatedRoute, 
    public router : Router) {

    this.api = restapi;

  }

  async getProduits(id:any) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getProduits(id)
      .subscribe(res => {
        console.log(res);
        this.produits = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }


  async deleteProduit(id:any){
    await this.api.deleteProduit(id)
    .subscribe(res => {
        console.log(res);
        this.ngOnInit();
      }, (err) => {
        console.log(err);
      });
  }



  delete(id:any) {
    this.deleteProduit(id);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap)=> {
      this.id=params.get('id');
    });
    console.log("Current id: " + this.id);
    if(this.id == null){
      this.getProduits("all");
    }
    else{
      this.getProduits(this.id);
    }
  }

  ionViewWillEnter() {
    this.ngOnInit();
  }

}

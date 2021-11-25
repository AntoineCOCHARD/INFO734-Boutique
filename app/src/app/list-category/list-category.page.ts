import { Component } from '@angular/core';

import { LoadingController, NavController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.page.html',
  styleUrls: ['./list-category.page.scss'],
})

export class ListCategoryPage {

  categories : any;
  api : RestService;
  id : string;

  constructor(public restapi: RestService, 
    public loadingController: LoadingController,
    public navController: NavController,
    private route: ActivatedRoute, 
    public alertController: AlertController,
    public router : Router) {

    this.api = restapi;
  }

  async getCategories(id:any) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getCategories(id)
      .subscribe(res => {
        console.log(res);
        this.categories = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  async deleteCategory(id:any){
    await this.api.deleteCategory(id)
    .subscribe(res => {
        console.log(res);
        this.ngOnInit();
      }, (err) => {
        console.log(err);
      });
  }



  delete(id:any) {
    this.deleteCategory(id);
  }

  async alertDeleteCategory(id:any) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Attention !',
      message: 'Si vous continuez, la catégorie sera <strong>supprimée</strong>',
      buttons: [
        {
          text: 'Annuler',
          handler: () => {
            console.log('Annuler');
          }
        }, {
          text: 'Continuer',
          handler: () => {
            console.log('Continuer');
            this.delete(id)
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
    if(this.id == null || this.id == ""){
      this.getCategories("all");
    }
    else{
      this.getCategories(this.id);
    }
  }

  ionViewWillEnter() {
    this.ngOnInit();
  }

}
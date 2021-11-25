import { Component, OnInit } from '@angular/core';

import { LoadingController, NavController } from '@ionic/angular';
import { RestService } from '../rest.service';
import {Router} from '@angular/router';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-list-boutique',
  templateUrl: './list-boutique.page.html',
  styleUrls: ['./list-boutique.page.scss'],
})
export class ListBoutiquePage implements OnInit {
  boutiques : any;
  api : RestService;

  constructor(public restapi: RestService, 
    public loadingController: LoadingController, 
    public navController : NavController, 
    public alertController: AlertController,
    public router : Router) {

    this.api = restapi;
  }

  async getBoutiques() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getBoutiques()
      .subscribe(res => {
        console.log(res);
        this.boutiques = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  async deleteBoutique(id:any){
    await this.api.deleteBoutique(id)
    .subscribe(res => {
        console.log(res);
        this.ngOnInit();
      }, (err) => {
        console.log(err);
      });
  }



  delete(id:any) {
    this.deleteBoutique(id);
  }

  async alertDeleteBoutique(id:any) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Attention !',
      message: 'Si vous continuez, la boutique sera <strong>supprimée</strong>',
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
            this.delete(id)
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
    this.getBoutiques();
  }

  ionViewWillEnter() {
    this.ngOnInit();
  }

}
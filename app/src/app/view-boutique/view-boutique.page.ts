import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-view-boutique',
  templateUrl: './view-boutique.page.html',
  styleUrls: ['./view-boutique.page.scss'],
})
export class ViewBoutiquePage implements OnInit {
  boutique : any;
  api : RestService;
  id : string;
  title : string;
  description : string;
  image : string;
  

  constructor(public restapi: RestService, 
    public loadingController: LoadingController, 
    private route: ActivatedRoute,
    public alertController: AlertController,
    public router : Router) {

    this.api = restapi;

  }

  

  

  async getBoutique(id:any) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getBoutique(this.id)
      .subscribe(res => {
        console.log(res);
        this.boutique = res;
        this.title = this.boutique.title;
        this.description = this.boutique.description;
        this.image = this.boutique.image;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  async saveBoutique(){
    await this.api.updateBoutique(this.boutique._id, this.boutique)
    .subscribe(res => {
        console.log(res);
        this.router.navigate(['/listBoutique']);
      }, (err) => {
        console.log(err);
      });
  }

  async deleteBoutique(){
    await this.api.deleteBoutique(this.boutique._id)
    .subscribe(res => {
        console.log(res);
        this.router.navigate(['/listBoutique']);
      }, (err) => {
        console.log(err);
      });
  }

  save() {

    console.log(this.description);
    console.log(this.title);
    console.log(this.boutique._id);
    console.log(this.image);

    this.boutique.title = this.title;
    this.boutique.description = this.description;
    this.boutique.image = this.image;

    this.saveBoutique();

  }

  delete() {

    this.deleteBoutique();
    
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
            this.router.navigate(['/listBoutique'])
          }
        }
      ]
    });

    await alert.present();
  }
  

  async alertDeleteBoutique() {
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
    this.getBoutique(this.id);
  }
}

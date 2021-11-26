import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RestService } from '../rest.service';
import { ActivatedRoute, ParamMap, Router  } from '@angular/router';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {
  private categories : any;
  private produit : FormGroup;
  public api : RestService;
  private id;

  constructor(public restapi: RestService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router,
    public alertController: AlertController,
    private formBuilder: FormBuilder) {
      this.produit = this.formBuilder.group({
            nom: [''],
            description: [''],
            prix: [''],
            id_categorie: [''],
            image: [''],
          });
      this.api = restapi;
  }

  async getCategories() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getCategories("all")
      .subscribe(res => {
        console.log(res);
        this.categories = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  async saveProduit(){
    await this.api.createProduit(this.produit.value)
    .subscribe(res => {
      this.router.navigate(['/listProduct/' + this.produit.value["id_categorie"]]);
      }, (err) => {
        console.log(err);
      });
  }

  save() {
    console.log(this.produit.value);
    this.saveProduit();

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
            this.router.navigate(['/listProduct/' + this.id])
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
    if(this.id == null){
      this.id = "";
    }
    this.getCategories();
  }

}

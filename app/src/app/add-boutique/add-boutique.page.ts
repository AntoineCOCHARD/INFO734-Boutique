import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router  } from '@angular/router';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-boutique',
  templateUrl: './add-boutique.page.html',
  styleUrls: ['./add-boutique.page.scss'],
})
export class AddBoutiquePage implements OnInit {

  private boutique : FormGroup;
  public api : RestService;

  constructor(public restapi: RestService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router,
    public alertController: AlertController,
    private formBuilder: FormBuilder) {
      this.boutique = this.formBuilder.group({
            title: [''],
            description: [''],
          });
      this.api = restapi;
  }

  async saveBoutique(){
    await this.api.createBoutique(this.boutique.value)
    .subscribe(res => {
        this.router.navigate(['/listBoutique']);
      }, (err) => {
        console.log(err);
      });
  }

  save() {
    console.log(this.boutique.value);
    this.saveBoutique();

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

  ngOnInit() {

  }

}

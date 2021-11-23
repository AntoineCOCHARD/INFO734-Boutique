import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {
  private categories : any;
  private produit : FormGroup;
  public api : RestService;

  constructor(public restapi: RestService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder) {
      this.produit = this.formBuilder.group({
            nom: [''],
            description: [''],
            prix: [''],
            id_categorie: [''],
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
        this.router.navigate(['/listProduct']);
      }, (err) => {
        console.log(err);
      });
  }

  save() {
    console.log(this.produit.value);
    this.saveProduit();

  }

  ngOnInit() {
    this.getCategories();
  }

}

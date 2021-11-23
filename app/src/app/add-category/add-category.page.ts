import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.page.html',
  styleUrls: ['./add-category.page.scss'],
})
export class AddCategoryPage implements OnInit {
  private boutiques : any;
  private category : FormGroup;
  public api : RestService;
  

  constructor(public restapi: RestService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder) {
      this.category = this.formBuilder.group({
            nom: [''],
            description: [''],
            id_boutique: [''],
          });
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

  async saveCategory(){
    await this.api.createCategory(this.category.value)
    .subscribe(res => {
        this.router.navigate(['/listCategory']);
      }, (err) => {
        console.log(err);
      });
  }

  save() {
    this.saveCategory();

  }

  ngOnInit() {
    this.getBoutiques();
  }

}

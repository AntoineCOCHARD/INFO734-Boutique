import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view-category.page.html',
  styleUrls: ['./view-category.page.scss'],
})
export class ViewCategoryPage implements OnInit {
  category : any;
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

  

  

  async getCategory(id:any) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getCategory(this.id)
      .subscribe(res => {
        console.log(res);
        this.category = res;
        this.nom = this.category.nom;
        this.description = this.category.description;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  async saveCategory(){
    await this.api.updateCategory(this.category._id, this.category)
    .subscribe(res => {
        console.log(res);
        this.router.navigate(['/listCategory']);
      }, (err) => {
        console.log(err);
      });
  }

  async deleteCategory(){
    await this.api.deleteCategory(this.category._id)
    .subscribe(res => {
        console.log(res);
        this.router.navigate(['/listCategory']);
      }, (err) => {
        console.log(err);
      });
  }

  save() {

    console.log(this.description);
    console.log(this.nom);
    console.log(this.category._id);

    this.category.nom = this.nom;
    this.category.description = this.description;

    this.saveCategory();

  }

  delete() {

    this.deleteCategory();
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap)=> {
      this.id=params.get('id');
    });
    console.log("Current id: " + this.id);
    this.getCategory(this.id);
  }
}

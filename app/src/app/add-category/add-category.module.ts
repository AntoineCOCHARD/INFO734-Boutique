import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddCategoryPage } from './add-category.page';

import {Validators, FormBuilder, FormGroup } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AddCategoryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddCategoryPage]
})
export class AddCategoryPageModule {}

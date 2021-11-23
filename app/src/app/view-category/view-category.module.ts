import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewCategoryPageRoutingModule } from './view-category-routing.module';

import { ViewCategoryPage } from './view-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewCategoryPageRoutingModule
  ],
  declarations: [ViewCategoryPage]
})
export class ViewCategoryPageModule {}

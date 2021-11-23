import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ListProductPage } from './list-product.page';

import { ListProductPageRoutingModule } from './list-product-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListProductPageRoutingModule
  ],
  declarations: [ListProductPage]
})
export class ListProductPageModule {}

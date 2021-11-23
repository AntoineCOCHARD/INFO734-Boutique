import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListBoutiquePageRoutingModule } from './list-boutique-routing.module';

import { ListBoutiquePage } from './list-boutique.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListBoutiquePageRoutingModule
  ],
  declarations: [ListBoutiquePage]
})
export class ListBoutiquePageModule {}

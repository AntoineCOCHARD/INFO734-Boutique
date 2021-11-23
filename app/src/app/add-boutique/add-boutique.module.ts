import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBoutiquePageRoutingModule } from './add-boutique-routing.module';

import { AddBoutiquePage } from './add-boutique.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddBoutiquePageRoutingModule
  ],
  declarations: [AddBoutiquePage]
})
export class AddBoutiquePageModule {}

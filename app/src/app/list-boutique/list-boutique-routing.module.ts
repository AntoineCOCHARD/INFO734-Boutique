import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListBoutiquePage } from './list-boutique.page';

const routes: Routes = [
  {
    path: '',
    component: ListBoutiquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListBoutiquePageRoutingModule {}

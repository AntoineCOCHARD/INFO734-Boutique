import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // ********************************** Produit ********************************** //
  {
    path: 'listProduct',
    loadChildren: () => import('./list-product/list-product.module').then( m => m.ListProductPageModule)
  },
  {
    path: 'listProduct/:id',
    loadChildren: () => import('./list-product/list-product.module').then( m => m.ListProductPageModule)
  },
  {
    path: 'addProduct',
    loadChildren: () => import('./add-product/add-product.module').then( m => m.AddProductPageModule)
  },
  {
    path: 'addProduct/:id',
    loadChildren: () => import('./add-product/add-product.module').then( m => m.AddProductPageModule)
  },
  {
    path: 'viewProduct/:id',
    loadChildren: () => import('./view-product/view-product.module').then( m => m.ViewProductPageModule)
  },
  // ********************************** Categorie ********************************** //
  {
    path: 'listCategory',
    loadChildren: () => import('./list-category/list-category.module').then( m => m.ListCategoryPageModule)
  },
  {
    path: 'listCategory/:id',
    loadChildren: () => import('./list-category/list-category.module').then( m => m.ListCategoryPageModule)
  },
  {
    path: 'addCategory',
    loadChildren: () => import('./add-category/add-category.module').then( m => m.AddCategoryPageModule)
  },
  {
    path: 'addCategory/:id',
    loadChildren: () => import('./add-category/add-category.module').then( m => m.AddCategoryPageModule)
  },
  {
    path: 'viewCategory/:id',
    loadChildren: () => import('./view-category/view-category.module').then( m => m.ViewCategoryPageModule)
  },
  // ********************************** Boutique ********************************** //
  {
    path: 'listBoutique',
    loadChildren: () => import('./list-boutique/list-boutique.module').then( m => m.ListBoutiquePageModule)
  },
  {
    path: 'addBoutique',
    loadChildren: () => import('./add-boutique/add-boutique.module').then( m => m.AddBoutiquePageModule)
  },
  {
    path: 'viewBoutique/:id',
    loadChildren: () => import('./view-boutique/view-boutique.module').then( m => m.ViewBoutiquePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

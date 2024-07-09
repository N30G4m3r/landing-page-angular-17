import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ProductsComponent } from './page/products/products.component';
import { ProductsDetailComponent } from './page/products-detail/products-detail.component';
import { ContactComponent } from './page/contact/contact.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/:id', component: ProductsDetailComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

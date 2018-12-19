import {NgModule} from '@angular/core';

import {Routes, RouterModule} from '@angular/router';

import {ProductsComponent} from './products.component';
import {EditComponent} from './edit/edit.component';
import {CreateComponent} from './create/create.component';

const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'create', component: CreateComponent},
  {path: 'edit', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}

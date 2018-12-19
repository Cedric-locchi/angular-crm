import {NgModule} from '@angular/core';

import {Routes, RouterModule} from '@angular/router';

import {InvoiceComponent} from './invoice.component';
import {CreateComponent} from './create/create.component';
import {EditComponent} from './edit/edit.component';

const routes: Routes = [
  {path: '', component: InvoiceComponent},
  {path: 'create', component: CreateComponent},
  {path: 'edit', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule {}

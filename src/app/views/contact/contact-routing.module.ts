import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContactComponent} from './contact.component';
import {CreateComponent} from './create/create.component';
import {EditComponent} from './edit/edit.component';

const routes: Routes = [
  {path: '', component: ContactComponent},
  {path: 'create', component: CreateComponent},
  {path: 'edit/:id', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {}

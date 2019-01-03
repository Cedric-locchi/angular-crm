import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContactComponent} from './contact.component';
import {ViewComponent} from './view/view.component';

const routes: Routes = [
  {path: '', component: ContactComponent},
  {path: 'view/:id', component: ViewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {}

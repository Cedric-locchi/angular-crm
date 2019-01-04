import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OpportunityComponent} from './opportunity.component';
import {ViewComponent} from './view/view.component';

const routes: Routes = [
  {path: '', component: OpportunityComponent},
  {path: 'view/:id', component: ViewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpportunityRoutingModule {}

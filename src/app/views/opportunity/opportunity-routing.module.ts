import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OpportunityComponent} from './opportunity.component';

const routes: Routes = [
  {path: '', component: OpportunityComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpportunityRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpportunityComponent } from './opportunity.component';
import {OpportunityRoutingModule} from './opportunity-routing.module';

@NgModule({
  declarations: [OpportunityComponent],
  imports: [
    CommonModule,
    OpportunityRoutingModule
  ]
})
export class OpportunityModule { }

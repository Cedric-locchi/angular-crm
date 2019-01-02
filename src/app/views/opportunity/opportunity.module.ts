import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import { OpportunityComponent } from './opportunity.component';
import {OpportunityRoutingModule} from './opportunity-routing.module';
import {ShareModuleModule} from '../../share-module/share-module.module';

@NgModule({
  declarations: [OpportunityComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OpportunityRoutingModule,
    ShareModuleModule
  ]
})
export class OpportunityModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { OpportunityComponent } from './opportunity.component';
import {OpportunityRoutingModule} from './opportunity-routing.module';
import {ShareModuleModule} from '../../share-module/share-module.module';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [OpportunityComponent, ViewComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    OpportunityRoutingModule,
    ShareModuleModule
  ]
})
export class OpportunityModule { }

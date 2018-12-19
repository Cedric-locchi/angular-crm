import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import { CommonModule } from '@angular/common';
import {QuoteRoutingModule} from './quote-routing.module';

import { QuoteComponent } from './quote.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [QuoteComponent, EditComponent, CreateComponent],
  imports: [
    CommonModule,
    QuoteRoutingModule,
    ReactiveFormsModule
  ]
})
export class QuoteModule { }

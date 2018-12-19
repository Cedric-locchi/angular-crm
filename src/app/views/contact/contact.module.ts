import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ContactRoutingModule} from './contact-routing.module';

import { ContactComponent } from './contact.component';
import { CreateComponent } from './create/create.component';
import {EditComponent} from './edit/edit.component';

@NgModule({
  declarations: [ContactComponent, CreateComponent, EditComponent],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }

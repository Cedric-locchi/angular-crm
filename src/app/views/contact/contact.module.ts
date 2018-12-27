import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ContactRoutingModule} from './contact-routing.module';

import { ContactComponent } from './contact.component';
import { CreateComponent } from './create/create.component';
import {EditComponent} from './edit/edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ContactComponent, CreateComponent, EditComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContactModule { }

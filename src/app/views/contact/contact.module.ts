import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContactRoutingModule} from './contact-routing.module';

import {ContactComponent} from './contact.component';
import {CreateComponent} from './create/create.component';
import {EditComponent} from './edit/edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SearchPipe} from '../../pipes/search/search.pipe';
import {ShareModuleModule} from '../../share-module/share-module.module';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [ContactComponent, CreateComponent, EditComponent, SearchPipe, ViewComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ShareModuleModule
  ]
})
export class ContactModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ProductsRoutingModule} from './products-routing.module';
import {ShareModuleModule} from '../../share-module/share-module.module';

import { ProductsComponent } from './products.component';
import {EditComponent} from './edit/edit.component';
import {CreateComponent} from './create/create.component';

@NgModule({
  declarations: [ProductsComponent, EditComponent, CreateComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ShareModuleModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ProductsModule { }

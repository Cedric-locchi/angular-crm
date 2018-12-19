import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import {ProductsRoutingModule} from './products-routing.module';
import {EditComponent} from './edit/edit.component';
import {CreateComponent} from './create/create.component';

@NgModule({
  declarations: [ProductsComponent, EditComponent, CreateComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }

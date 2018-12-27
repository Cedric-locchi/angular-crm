import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './card/card.component';
import {ModalComponent} from './modal/modal.component';

@NgModule({
  declarations: [
    CardComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    ModalComponent
  ]
})
export class ShareModuleModule {
}

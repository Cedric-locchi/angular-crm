import {Component, ContentChild, EventEmitter, Input, Output} from '@angular/core';
import {CreateComponent} from '../../views/contact/create/create.component';
import {CreateComponent as Create} from '../../views/products/create/create.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() title: string;
  @Input() modal: boolean;
  @Input() big: boolean;
  @Input() formContent;

  @Output() definedModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() content: EventEmitter<any> = new EventEmitter<any>();

  @ContentChild(CreateComponent) form;
  @ContentChild(Create) formProduct;

  constructor() {
  }

  close() {
    this.modal = false;
    this.definedModal.emit(false);
  }

  save() {
    switch (this.formContent) {
      case 'contact':
        this.content.emit(this.form);
        break;

      case 'opp':
        this.content.emit(this.content);
        break;
    }

  }

}

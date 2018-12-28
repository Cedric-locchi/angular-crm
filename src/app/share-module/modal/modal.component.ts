import {Component, ContentChild, EventEmitter, Input, Output} from '@angular/core';
import {CreateComponent} from '../../views/contact/create/create.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() title: string;
  @Input() modal: boolean;
  @Input() big: boolean;

  @Output() definedModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() content: EventEmitter<any> = new EventEmitter<any>();

  @ContentChild(CreateComponent) form;

  constructor() {
  }

  close() {
    this.modal = false;
    this.definedModal.emit(false);
  }

  save() {
    this.content.emit(this.form);
  }

}

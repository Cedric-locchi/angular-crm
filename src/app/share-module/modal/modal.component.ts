import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() title: string;
  @Input() modal: boolean;
  @Input() big: boolean;

  constructor() {}

}

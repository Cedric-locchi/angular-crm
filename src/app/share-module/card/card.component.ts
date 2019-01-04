import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../../interface/contact';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  open: boolean;
  @Input() item: Contact;

  constructor() {
    this.open = false;
  }

}

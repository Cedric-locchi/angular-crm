import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../../interface/contact';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() item: Contact;
  @Output() info: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  redirect(info, contact) {
    this.info.emit({info, contact});
  }

}

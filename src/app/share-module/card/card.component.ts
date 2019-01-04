import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Opportunity} from '../../interface/opportunity';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() item: Opportunity;

  @Output() opportunity: EventEmitter<number> = new EventEmitter<number>();
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  view(item) {
    this.opportunity.emit(item);
  }

  remove(id) {
    this.delete.emit(id);
  }

}

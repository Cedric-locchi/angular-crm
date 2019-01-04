import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  productGroup: FormGroup;

  name: FormControl;
  prix: FormControl;

  @Input() modal: boolean;

  @Output() saveProd: EventEmitter<any> = new EventEmitter();
  @Output() closeProd: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.name = new FormControl('', []);
    this.prix = new FormControl('', []);

    this.productGroup = new FormGroup({
      name: this.name,
      prix: this.prix
    });
  }

  close() {
    this.closeProd.emit(false);
  }

  save() {
    this.saveProd.emit(this.productGroup.value);
  }

}

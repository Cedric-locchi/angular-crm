import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  quoteGroup: FormGroup;
  name: FormControl;
  price: FormControl;
  descr: FormControl;
  total: number;

  quoteInformation: Array<any> = [];

  constructor() {
    this.total = 0;
  }

  private _buildFormControl() {

    this.name = new FormControl('', [Validators.required]);
    this.descr = new FormControl('', []);
    this.price = new FormControl('', [Validators.required]);

    this.quoteGroup = new FormGroup({
      name: this.name,
      descr: this.descr,
      price: this.price
    });

  }

  addProduct() {
    if (this.quoteGroup.status === 'VALID') {
      this.quoteInformation.push(this.quoteGroup.value);
      this.total = this.total + this.quoteGroup.value.price;
    }
  }

  removeIndex(index) {

    if (this.quoteInformation.length === 0) {
      this.total = 0;
    } else {
      this.total = this.total - this.quoteInformation[index].price;
      this.quoteInformation.splice(index, 1);
    }

  }

  ngOnInit() {
    this._buildFormControl();
  }

}

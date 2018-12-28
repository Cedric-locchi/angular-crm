import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  contactGroup: FormGroup;

  firstName: FormControl;
  lastName: FormControl;
  tel: FormControl;
  email: FormControl;
  company: FormControl;
  address: FormControl;
  country: FormControl;
  city: FormControl;
  zip: FormControl;

  constructor() {
    this._buildForm();
  }

  private _buildForm() {

    this.firstName = new FormControl('', []);
    this.lastName = new FormControl('', []);
    this.tel = new FormControl('', []);
    this.email = new FormControl('', []);
    this.company = new FormControl('', []);
    this.address = new FormControl('', []);
    this.country = new FormControl('', []);
    this.city = new FormControl('', []);
    this.zip = new FormControl('', []);

    this.contactGroup = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      tel: this.tel,
      email: this.email,
      company: this.company,
      address: this.address,
      country: this.country,
      city: this.city,
      zip: this.zip
    });

  }

}

import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ContactService} from '../../../services/contact/contact.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

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

  responseAlert: boolean;

  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
    this.responseAlert = false;
    this._buildForm();
  }

  get response() {
    if (this.contactService.response) {
      this.responseAlert = true;
      setTimeout(() => {
        this.responseAlert = false;
      }, 3000);
      return;
    }
  }

  addContact() {
    this.contactService._postContact(this.contactGroup.value);
    this.contactGroup.reset();
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

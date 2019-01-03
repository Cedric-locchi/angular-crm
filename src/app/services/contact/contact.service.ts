import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Contact} from '../../interface/contact';

import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private _informations: Array<Contact>;
  private _information: Contact;

  get informations(): Array<Contact> {
    return this._informations;
  }

  get information(): Contact {
    return this._information;
  }

  constructor(private http: HttpClient) {
    this._getContacts();
  }

  _getContacts() {
    this.http.get(environment.url + 'contact')
      .subscribe((data: Array<Contact>) => {
        this._informations = data;
      });
  }

  _getOneContact(id) {
    this.http.get(environment.url + 'contact/' + id)
      .subscribe((data: Contact) => {
        this._information = data;
      });
  }

  _updateContact(id, data) {
    this.http.put(environment.url + 'contact/' + id, data)
      .subscribe(() => {
       this._getContacts();
      });
  }

  _postContact(data) {

    const obj: any = {};

    obj.firstName = data.firstName.value;
    obj.lastName = data.lastName.value;
    obj.telephone = data.tel.value;
    obj.email = data.email.value;
    obj.company = data.company.value;
    obj.address = data.address.value;
    obj.pays = data.country.value;
    obj.ville = data.city.value;
    obj.zip = data.zip.value;
    obj.opportunity = [];
    obj.invoices = [];
    obj.quote = [];

    this.http.post(environment.url + 'contact', obj)
      .subscribe(() => {
        this._getContacts();
      });

  }

  _removeContact(id) {
    this.http.delete(environment.url + 'contact/' + id)
      .subscribe(() => {
        this._getContacts();
      });
  }

}

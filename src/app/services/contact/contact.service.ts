import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Contact} from '../../interface/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private _informations: Array<Contact>;
  private _information: Contact;
  private _response: Contact;

  get informations(): Array<Contact> {
    return this._informations;
  }

  get information(): Contact {
    return this._information;
  }

  get response() {
    return this._response;
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

  _getAsyncContact() {
    return this.http.get(environment.url + 'contact');
  }

  _getOneContact(id) {
    this.http.get(environment.url + 'contact/' + id)
      .subscribe((data: Contact) => {
        this._information = data;
      });
  }

  _updateContact(id, data) {
    this.http.put(environment.url + 'contact/' + id, data)
      .subscribe((res: Contact) => {
        this._response = res;
      });
  }

  _postContact(data) {

    data.invoices = [];
    data.quote = [];

    this.http.post(environment.url + 'contact', data)
      .subscribe((res: Contact) => {
        this._response = res;
      });

  }

  _removeContact(id) {
    this.http.delete(environment.url + 'contact/' + id)
      .subscribe((res: Response) => {
        this._getContacts();
      });
  }

}

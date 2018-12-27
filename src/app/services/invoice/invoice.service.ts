import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Invoice} from '../../interface/invoice';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) {
    this._getInvoices();
  }

  private _invoices: Array<Invoice>;
  private _invoice: Invoice;
  private _contactInvoice: Array<Invoice>;

  get invoices() {
    return this._invoices;
  }

  get invoice() {
    return this._invoice;
  }

  get contactInvoice() {
    return this._contactInvoice;
  }

  _getInvoices() {
    this.http.get(environment.url + 'invoice')
      .subscribe((invoices: Array<Invoice>) => {
        this._invoices = invoices;
      });
  }

  _getOneInvoice(id) {
    this.http.get(environment.url + 'invoice/' + id)
      .subscribe((invoice: Invoice) => {
        this._invoice = invoice;
      });
  }

  _getInvoiceFromContact(id) {
    this.http.get(environment.url + 'invoice/?contactId=' + id)
      .subscribe((res: Array<Invoice>) => {
        this._contactInvoice = res;
      });
  }

}

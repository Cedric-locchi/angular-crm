import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Invoice} from '../../interface/invoice';
import {environment} from '../../../environments/environment';

import {Utils} from '../../core/utils/utils';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private _invoices: Array<Invoice>;
  private _contactInvoice: Array<Invoice>;
  private _invoice: Invoice;
  private _totalInvoice: number;
  private _countInvoice: number;

  constructor(private http: HttpClient) {
    this._getInvoices();
    this._getTotalInvoices();
  }

  get invoices() {
    return this._invoices;
  }

  get invoice() {
    return this._invoice;
  }

  get contactInvoice() {
    return {
      invoices: this._contactInvoice,
      count: this._totalInvoice
    };
  }

  get total() {
    return {
      total: this._totalInvoice,
      count: this._countInvoice
    };
  }

  _getInvoices() {
    this.http.get(environment.url + 'invoice')
      .subscribe((invoices: Array<Invoice>) => {
        this._invoices = invoices;
      });
  }

  _getTotalInvoices() {
    this.http.get(environment.url + 'invoice')
      .subscribe((res: Array<Invoice>) => {
        this._totalInvoice = Utils.sumDocElement(res);
        this._countInvoice = res.length;
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
        this._totalInvoice = Utils.sumDocElement(res);
        this._contactInvoice = res;
      });
  }

}

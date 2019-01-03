import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Quote} from '../../interface/quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private _quotes: Array<Quote>;
  private _totalQuote: number;

  constructor(private http: HttpClient) {
  }

  get quotes() {
    return this._quotes;
  }

  get contactQuotes() {
    return {
      quote: this._quotes,
      count: this._totalQuote
    };
  }

  _getQuoteByContact(id) {
    this.http.get(environment.url + 'quote/?contactId=' + id)
      .subscribe((res: Array<Quote>) => {

        let total = 0;

        for (const item of res) {
          total = total + item.total;
        }

        this._totalQuote = total;
        this._quotes = res;
      });
  }
}

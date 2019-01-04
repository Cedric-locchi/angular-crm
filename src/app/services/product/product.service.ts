import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Product} from '../../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _product: Product;

  constructor(private http: HttpClient) {
    this._getProduct();
  }

  get getProduct() {
    return this._product;
  }

  _getProduct() {
    this.http.get(environment.url + 'product')
      .subscribe((res: Product) => {
        console.log(res);
        this._product = res;
      });
  }

  _postProduct(data) {
    this.http.post(environment.url + 'product', data)
      .subscribe(() => {
          this._getProduct();
      });
  }

}

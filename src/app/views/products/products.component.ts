import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  showModal: boolean;

  constructor(private productService: ProductService) {
  }

  get product() {
    return this.productService.getProduct;
  }

  ngOnInit() {
    this.showModal = false;
  }

  closeModal() {
    this.showModal = false;
  }

  saveProduct(evt) {
    this.productService._postProduct(evt);
    this.showModal = false;
  }


}

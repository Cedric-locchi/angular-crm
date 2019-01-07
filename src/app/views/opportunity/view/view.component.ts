import {Component, OnInit} from '@angular/core';
import {OpportunityService} from '../../../services/opportunity/opportunity.service';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../../services/product/product.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  lignes = [];

  constructor(private oppService: OpportunityService,
              private productService: ProductService,
              private route: ActivatedRoute) {
    const id = this.route.snapshot.params['id'];
    this.oppService._getOneOpportunity(id);
  }

  ngOnInit() {
  }

  get information() {
    return this.oppService.oneOpportunity;
  }

  get products() {
    return this.productService.getProduct;
  }

  addItem() {
    const obj = {
      product: '',
      pu: 0,
      qt: 1,
    };
    this.lignes.push(obj);
  }

  validateQuote(form) {
    console.log(form.value);
  }

}

import { Component, OnInit } from '@angular/core';
import {InvoiceService} from '../../services/invoice/invoice.service';
import {OpportunityService} from '../../services/opportunity/opportunity.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private invoiceService: InvoiceService,
              private opportunityService: OpportunityService) { }

  ngOnInit() {
  }

  get invoices() {
    return this.invoiceService.total;
  }

  get opportunity() {
    return this.opportunityService.opportunityCount;
  }

}

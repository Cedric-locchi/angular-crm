import {Component, OnInit} from '@angular/core';
import {ContactService} from '../../../services/contact/contact.service';
import {ActivatedRoute} from '@angular/router';
import {InvoiceService} from '../../../services/invoice/invoice.service';
import {OpportunityService} from '../../../services/opportunity/opportunity.service';
import {QuoteService} from '../../../services/quote/quote.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  info: boolean;
  id: number;
  totalOpp: number;
  countOpp: boolean;

  constructor(private route: ActivatedRoute,
              private invoiceService: InvoiceService,
              private opportunityService: OpportunityService,
              private quoteService: QuoteService,
              private contactService: ContactService) {

    const id = this.route.snapshot.params['id'];
    this.id = id;

    this.contactService._getOneContact(id);
    this.invoiceService._getInvoiceFromContact(id);
    this.quoteService._getQuoteByContact(id);
    this.opportunityService._getOpportunityByContact(id);

  }

  get information() {
    return this.contactService.information;
  }

  get invoices() {
    return this.invoiceService.contactInvoice;
  }

  get opportunity() {
    return this.opportunityService.contactOpportunity;
  }

  get quote() {
    return this.quoteService.contactQuotes;
  }

  ngOnInit() {
    this.info = true;
    this.totalOpp = 0;
    this.countOpp = false;

  }

}

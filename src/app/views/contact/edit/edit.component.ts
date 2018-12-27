import {AfterContentInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ContactService} from '../../../services/contact/contact.service';
import {InvoiceService} from '../../../services/invoice/invoice.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private contactService: ContactService,
              private invoiceService: InvoiceService) { }

  ngOnInit() {
    this.contactService._getOneContact(this.route.snapshot.params['id']);
    this.invoiceService._getInvoiceFromContact(this.route.snapshot.params['id']);
  }

  get information() {
    return this.contactService.information;
  }

  get invoices() {
    return this.invoiceService.contactInvoice;
  }

  get response() {
    return this.contactService.response;
  }

  updateContact(info) {
    this.contactService._updateContact(this.information.id, info);
  }

}

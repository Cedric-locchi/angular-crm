import {Component, OnInit} from '@angular/core';
import {ContactService} from '../../services/contact/contact.service';
import {Contact} from '../../interface/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contacts;

  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
    this.getContact();
  }

  getContact() {
    this.contacts = this.contactService._getAsynContact();
  }

}

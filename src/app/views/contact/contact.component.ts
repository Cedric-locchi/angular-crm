import {Component, OnInit} from '@angular/core';
import {ContactService} from '../../services/contact/contact.service';
import {Router} from '@angular/router';
import {Contact} from '../../interface/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  showModal: boolean;
  searchText: string;
  contact: Contact;

  constructor(private contactService: ContactService, private router: Router) {
  }

  ngOnInit(): void {
    this.showModal = false;
  }

  get informations() {
    return this.contactService.informations;
  }

  remove(contact) {
    this.contactService._removeContact(contact.id);
  }

  definedContact(item) {
    this.contact = item;
  }

  closeModal(state) {
    this.showModal = state;
  }

  saveContact(info) {
    this.showModal = false;
    this.contactService._postContact(info);
  }

}

import {Component, OnInit} from '@angular/core';
import {ContactService} from '../../services/contact/contact.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  showModal: boolean;

  constructor(private contactService: ContactService, private router: Router) {
  }

  ngOnInit(): void {
    this.showModal = false;
  }

  get informations() {
    return this.contactService.informations;
  }

  redirect(info) {
    switch (info.info) {

      case 'edit':
        this.router.navigate(['/admin/contact/edit', info.contact.id]);
        break;

      case 'remove':
        this.contactService._removeContact(info.contact.id);
        break;

    }
  }

  closeModal(state) {
    this.showModal = state;
  }

  saveContact(info) {
    this.showModal = false;
    this.contactService._postContact(info);
  }

}

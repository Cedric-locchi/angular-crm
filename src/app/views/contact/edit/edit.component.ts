import {AfterContentInit, Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ContactService} from '../../../services/contact/contact.service';
import {Contact} from '../../../interface/contact';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  @Input() information: Contact;

  constructor(private contactService: ContactService) {}

  updateContact(info) {
    this.contactService._updateContact(this.information.id, info);
  }

}

import {Component, OnInit} from '@angular/core';
import {OpportunityService} from '../../services/opportunity/opportunity.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactService} from '../../services/contact/contact.service';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.scss']
})
export class OpportunityComponent implements OnInit {

  opportunityForm: FormGroup;

  contact: FormControl;
  titre: FormControl;
  description: FormControl;
  montant: FormControl;

  form: boolean;
  formSubmitAttempt: boolean;


  constructor(private opportunityService: OpportunityService, private contactService: ContactService) {
  }

  ngOnInit() {
    this.form = false;
    this._buildForm();
  }

  get opportunity() {
    return this.opportunityService.opportunity;
  }

  get proposal() {
    return this.opportunityService.proposal;
  }

  get gagner() {
    return this.opportunityService.gagner;
  }

  get perdu() {
    return this.opportunityService.perdu;
  }

  get informations() {
    return this.contactService.informations;
  }

  next(item) {
    this.defineStep(item, 'proposal');
  }

  win(item) {
    this.defineStep(item, 'gagner');
  }

  loose(item) {
    this.defineStep(item, 'perdu');
  }

  save() {
    this.formSubmitAttempt = true;
    if (this.opportunityForm.status === 'VALID') {
      this.opportunityService._postOpportunity(this.opportunityForm.value);
      this.formSubmitAttempt = true;
      this.opportunityForm.reset();
      this.form = false;
    }
  }

  private _buildForm() {
    this.contact = new FormControl('', [Validators.required]);
    this.titre = new FormControl('', [Validators.required]);
    this.description = new FormControl('', []);
    this.montant = new FormControl('', [Validators.required]);

    this.opportunityForm = new FormGroup({
      contactId: this.contact,
      titre: this.titre,
      description: this.description,
      montant: this.montant
    });

  }

  private defineStep(item, state) {
    item.step = state;
    this.opportunityService._updateOpportunity(item);
  }

}

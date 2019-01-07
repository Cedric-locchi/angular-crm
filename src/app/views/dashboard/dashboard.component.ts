import { Component, OnInit } from '@angular/core';
import {OpportunityService} from '../../services/opportunity/opportunity.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private opportunityService: OpportunityService) { }

  ngOnInit() {
  }

  get opportunity() {
    return this.opportunityService.opportunityCount;
  }

}

import {Component, OnInit} from '@angular/core';
import {OpportunityService} from '../../../services/opportunity/opportunity.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  constructor(private oppService: OpportunityService,
              private route: ActivatedRoute) {
    const id = this.route.snapshot.params['id'];
    this.oppService._getOneOpportunity(id);
  }

  ngOnInit() {

  }

  get information() {
    return this.oppService.oneOpportunity;
  }

}

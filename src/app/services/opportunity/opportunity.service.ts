import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Opportunity} from '../../interface/opportunity';
import {forEach} from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class OpportunityService {

  private _opportunities: Array<Opportunity>;
  private _proposal: Array<Opportunity>;
  private _gagner: Array<Opportunity>;
  private _perdu: Array<Opportunity>;

  constructor(private http: HttpClient) {
    this._getOpportunity();
  }

  get opportunity() {
    return this._opportunities;
  }

  get proposal() {
    return this._proposal;
  }

  get gagner() {
    return this._gagner;
  }

  get perdu() {
    return this._perdu;
  }

  _updateOpportunity(item) {
    this.http.put(environment.url + 'opportunity/' + item.id, item)
      .subscribe(() => {
        this._getOpportunity();
      });
  }

  _postOpportuntiy(item) {

    item.step = 'en cours';

    this.http.post(environment.url + 'opportunity', item)
      .subscribe(() => {
        this._getOpportunity();
      });
  }

  _getOpportunity() {
    this.http.get(environment.url + 'opportunity')
      .subscribe((res: Array<Opportunity>) => {

        const opportunity = [];
        const proposal = [];
        const gagner = [];
        const perdu = [];

        for (let item of res) {
          switch (item.step) {
            case 'en cours':
              opportunity.push(item);
              break;

            case 'proposal':
              proposal.push(item);
              break;

            case 'gagner':
              gagner.push(item);
              break;

            case 'perdu':
              perdu.push(item);
              break;
          }
        }

        this._opportunities = opportunity;
        this._proposal = proposal;
        this._gagner = gagner;
        this._perdu = perdu;

      });
  }

}

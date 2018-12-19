import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  private  _nav: Array<any> = [
    {routerLink: '/admin', name: 'Tableau de bord', class: 'fas fa-tachometer-alt'},
    {routerLink: 'contact', name: 'Contact', class: 'fas fa-users'},
    {routerLink: 'invoice', name: 'Factures', class: 'fas fa-file-invoice'},
    {routerLink: 'quote', name: 'Devis', class: 'fas fa-file-alt'},
    {routerLink: 'product', name: 'Produits', class: 'fas fa-file-alt'},
  ];

  constructor() {
  }

  get Nav() {
    return this._nav;
  }

  ngOnInit() {
  }

}

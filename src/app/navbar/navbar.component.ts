import { Component, OnInit } from '@angular/core';

import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  links: any;

  constructor(private navbarService: NavbarService) { }

  ngOnInit() {
    this.links = this.navbarService.getLinks();
  }

}

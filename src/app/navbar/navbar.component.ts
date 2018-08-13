import { Component, OnInit } from '@angular/core';

import { NavlinksService } from './navlinks.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navlinks: any;

  constructor(private navlinksService: NavlinksService) { }

  ngOnInit() {
    this.navlinks = this.navlinksService.getLinks();
  }

}

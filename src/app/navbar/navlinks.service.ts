import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavlinksService {
  links: any;

  constructor() {
    this.links = [
      "TV",
      "MISC",
      "NEWS",
      "3X",
      "PICS",
      "SPORTS",
      "POLITICS"
    ];
  }

  getLinks(): any {
    return this.links;
  }

  setLinks(newLinks) {
    this.links = newLinks;
  }
}

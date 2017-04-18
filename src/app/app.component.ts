import { Component } from '@angular/core';

import { DataService } from './data-service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  levels: any;

  constructor(private dataService: DataService) {
  }

  loadXML() {
    this.dataService.getXML().subscribe((resp) => {
      // We call Array.prototype.slice.call to prevent an error in Safari...
      // Chrome and FF are fine! Safari doesn't like Angular sometimes!!!
      this.levels = Array.prototype.slice.call(resp.getElementsByTagName('level'));
    });
  }
}

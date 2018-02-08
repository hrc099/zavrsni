import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _dataService: DataService) { }

  logoutUser() {
    this._dataService.logoutUser()
      .subscribe(res => window.location.href = res.url);
  }
}
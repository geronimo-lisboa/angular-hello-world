import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  names: Array<string>;

  constructor() {
    this.names = ['Clint Eastwood', 'James Fonda', 'Lee Van Cleef'];
  }

  ngOnInit() {
  }

}

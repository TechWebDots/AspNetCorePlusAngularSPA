import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor() { }

  ngOnInit() {    
    this.fName  = 'Pamela';
    this.lName  = 'Johnson';
    this.gender  = 'F';
    this.age = 27;
    this.status = true;
    
  }
  public fName: string ;
  public lName: string ;
  public gender: string ;
  public age: number;
  public status: boolean;
  public appList: any[] =[
    {
      "ID": "1",
      "Name": "One"
    },
    {
      "ID": "2",
      "Name": "Two"
    }
  ];
}

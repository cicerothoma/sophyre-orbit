import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/services/interface/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = null;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.usersCollection.valueChanges().subscribe((value) => {
      this.users = value;
    })
  }
  
}

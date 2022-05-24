import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[];

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.usersService.getAll().subscribe(value => this.users = value)
  }

}

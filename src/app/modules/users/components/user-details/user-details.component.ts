import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../../services/users.service";
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: IUser;

  constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['user'] as IUser;

      if (state) {
        this.user = state
      } else {
        this.usersService.getById(id).subscribe(value => this.user = value)
      }
    })
  }

}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IUserDetails} from "../../models/IUserDetails";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  // DDOS
  // userDetails : IUserDetails;
  // constructor(private activatedRoute: ActivatedRoute,private userService: UserService) { }
  // ngOnInit(): void {
  //   // this.activatedRoute.url.subscribe(value => console.log(value));
  //   this.activatedRoute.params.subscribe(({id}) =>{
  //     this.userService.getUser(+id).subscribe(value => this.userDetails = value as IUserDetails)
  //   });
  // }

  //          private router: Router

  userDetailsObj: IUserDetails;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(value => {
      // // @ts-ignore
      // console.log(this.router.getCurrentNavigation().extras.state['data'] as IUserDetails);

      this.userDetailsObj = this.router.getCurrentNavigation()?.extras?.state?.['data'] as IUserDetails
    })
  }

  ngOnInit() {
    // this.activatedRoute.params.subscribe(value => {
    //   let {state: {data}} = history
    //   this.userDetailsObj = data as IUserDetails;
    // })
  }

}

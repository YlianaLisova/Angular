import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {IUser} from "../../interfaces";
import {UserService} from "../user.service";

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<IUser> {

  constructor(private userService: UserService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> | Promise<IUser> | IUser {
    const user = this.router.getCurrentNavigation()?.extras?.state?.['user']

    if (user) {
      return user
    }
    const {id} = route.params;
    return this.userService.getById(id)
  }
}

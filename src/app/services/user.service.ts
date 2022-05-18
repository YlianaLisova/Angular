import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../models";
import {urls} from "../constants";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(urls.users)
  }

  getById(id: string): Observable<IUser> {
    return this.httpClient.get<IUser>(`${urls.users}/${id}`)
  }
}

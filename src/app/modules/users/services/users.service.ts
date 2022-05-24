import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../interfaces";
import {urls} from "../../../constants/urls";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IUser[]>{
    return this.httpClient.get<IUser[]>(urls.users)
  }

  getById(id: number): Observable<IUser>{
    return this.httpClient.get<IUser>(`${urls.users}/${id}`)
  }
}

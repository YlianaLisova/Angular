import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {urls} from "../../../constants/urls";
import {IComment} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IComment[]>{
    return this.httpClient.get<IComment[]>(urls.comments)
  }

  getById(id: number): Observable<IComment>{
    return this.httpClient.get<IComment>(`${urls.comments}/${id}`)
  }
}

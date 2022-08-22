import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tag} from "../model/tag";

const _api = "http://localhost:3000/tag";
@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: HttpClient) { }

  getAllTags(): Observable<Array<Tag>>{
    return this.http.get<Array<Tag>>(_api );
  }

  getTagById(id: number): Observable<Tag>{
    return this.http.get<Tag>(_api+'/' + id);
  }
}

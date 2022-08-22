import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Account} from "../model/account";

const _api = "http://localhost:3000/account";
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  signup(a: any){
    let url = _api;
    return this.http.post<Account>(url,a)
  }

  login(){
    let url = _api;
    return this.http.get<any>(url)
  }
}

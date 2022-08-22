import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";

const _api = "http://localhost:3000/product";
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProduct(searchKey:string): Observable<Array<Product>>{
    let url = _api;
    if(searchKey != null){
      url += '?name_like=' + searchKey;
    }
    return this.http.get<Array<Product>>(url);
  }

  getProductByTag(tag: number): Observable<Array<Product>>{
    let url = _api;
    if(tag != 0){
      url += '?type=' + tag;
    }
    return this.http.get<Array<Product>>(url);
  }

  getProductById(id: number): Observable<Product>{
    let url = _api
    return this.http.get<Product>(url + '/' +id);
  }

}

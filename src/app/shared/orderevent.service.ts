import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Orderevent } from './orderevent.model';

@Injectable({
  providedIn: 'root'
})
export class OrderEventService {

  constructor(private http: HttpClient) { }
  readonly baseURL = 'http://localhost:3000/orderevent';
  insertOrder( order: Orderevent) {
    return this.http.post(this.baseURL, order);
  }
  getuserorderevent(cemail: string) {
    return this.http.get('http://localhost:3000/userorderevent' + `/${cemail}`);
  }
}

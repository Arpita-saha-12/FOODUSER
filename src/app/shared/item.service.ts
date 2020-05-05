import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }
  readonly baseURL = 'http://localhost:3000/items';
  readonly baseURL1 = 'http://localhost:3000/useritem';
  getItem() {
    return this.http.get(this.baseURL) ;
  }
  insertItem( item: Item) {
    return this.http.post(this.baseURL, item);
  }
  updateItem(item: Item) {
    return this.http.put(this.baseURL + `/${item._id}`, item);
  }
  deleteItem(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
  getitemcatid(category_id: string) {
    return this.http.get('http://localhost:3000/useritem' + `/${category_id}`);
  }
  getitemid(_id: string) {
    return this.http.get(this.baseURL + `/${_id}`);
  }
}

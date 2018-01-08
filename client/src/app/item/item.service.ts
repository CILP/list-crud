import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Item } from './item.model';
import { API_URL } from '../shared/constants/costants';

@Injectable()
export class ItemService {

  private itemEndpoint = `${API_URL}/Items`;

  constructor(private http: HttpClient) {}

  getItems(listId: string = ''): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.itemEndpoint}?filter={"listId": "${listId}"}`);
  }

  deleteItem(id: string): Observable<any> {
    return this.http.delete<any>(`${this.itemEndpoint}/${id}`);
  }

  createItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.itemEndpoint, item);
  }

  updateItem(id: string, portion: Item | {}): Observable<Item> {
    return this.http.patch<Item>(`${this.itemEndpoint}/${id}`, portion);
  }
}

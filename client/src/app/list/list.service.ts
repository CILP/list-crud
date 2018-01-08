import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { List } from './list.model';
import { API_URL } from '../shared/constants/costants';

@Injectable()
export class ListService {

  private listEndpoint = `${API_URL}/Lists`;

  constructor(private http: HttpClient) {}

  getList(id: string = ''): Observable<List[]> {
    return this.http.get<List[]>(`${this.listEndpoint}/${id}`);
  }

  deleteList(id: string): Observable<any> {
    return this.http.delete<any>(`${this.listEndpoint}/${id}`);
  }

  createList(list: List): Observable<List> {
    return this.http.post<List>(this.listEndpoint, list);
  }

  updateList(id: string, portion: List | {}): Observable<List> {
    return this.http.patch<List>(`${this.listEndpoint}/${id}`, portion);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { List } from './list.model';
import { API_URL } from '../shared/constants/costants';

const httpOptions = {
  headers: {'Content-Type': 'application/json'}
};

@Injectable()
export class ListService {

  private listEndpoint = `${API_URL}/Lists`;

  constructor(private http: HttpClient) {}

  getList(id: string = ''): Observable<List[]> {
    return this.http.get<List[]>(`${this.listEndpoint}/${id}`);
  }
}

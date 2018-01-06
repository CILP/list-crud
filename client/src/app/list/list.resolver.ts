import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { ListService } from './list.service';
import { List } from './list.model';

@Injectable()
export class ListResolver implements Resolve<List[]> {

  constructor (private listService: ListService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.listService.getList(route.params['id']);
  }
}

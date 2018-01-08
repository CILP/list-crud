import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { ItemService } from './item.service';
import { Item } from './item.model';

@Injectable()
export class ItemResolver implements Resolve<Item[]> {

  constructor (private itemService: ItemService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.itemService.getItems(route.params['id']);
  }
}

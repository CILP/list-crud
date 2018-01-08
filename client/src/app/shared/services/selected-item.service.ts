import { Injectable } from '@angular/core';
import { Item } from 'app/item/item.model';

@Injectable()
export class SelectedItemService {
    private selectedItem: Item;

    get item(): Item {
        return this.selectedItem;
    }

    set item(item: Item) {
        this.selectedItem = item;
    }
}
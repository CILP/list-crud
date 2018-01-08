import { Injectable } from '@angular/core';
import { List } from 'app/list/list.model';

@Injectable()
export class SelectedListService {
    private selectedList: List;

    get list(): List {
        return this.selectedList;
    }

    set list(list: List) {
        this.selectedList = list;
    }
}
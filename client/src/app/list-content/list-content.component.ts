import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterializeAction } from 'angular2-materialize';

import { SelectedListService } from 'app/shared/services/selected-list.service';
import { SelectedItemService } from 'app/shared/services/selected-item.service';
import { ItemService } from '../item/item.service';
import { ListService } from '../list/list.service';

import { List } from '../list/list.model';
import { Item } from '../item/item.model';

@Component({
  selector: 'app-list-content',
  templateUrl: './list-content.component.html',
  styleUrls: ['./list-content.component.css']
})
export class ListContentComponent implements OnInit {

  list: List;
  items: Item[];
  deleteModalActions = new EventEmitter<string | MaterializeAction>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private selectedListService: SelectedListService,
    private selectedItemService: SelectedItemService,
    private itemService: ItemService,
    private listService: ListService
  ) { }

  ngOnInit() {
    this.list = this.selectedListService.list;
    this.items = this.route.snapshot.data['items'];
  }

  deleteItem(itemId: string) {
    this.selectedItemService.item = this.items.find(i => i.id === itemId);
    this.deleteModalActions.emit({action: 'modal', params: ['open']});
  }

  editItem(item: Item) {
    this.selectedItemService.item = item;
    this.router.navigate(['/item/edit', item.id]);
  }

  closeDeleteModal() {
    this.deleteModalActions.emit({action: 'modal', params: ['close']});
  }
  
  agreeDeleteModal() {
    const itemId = this.selectedItemService.item.id;

    this.itemService
        .deleteItem(itemId)
        .subscribe(() => {
          const { id, quantity } = this.selectedListService.list;

          this.items = this.items.filter(i => i.id !== itemId);

          this.listService.updateList(id, { quantity: quantity - 1})
              .subscribe(() => {
                this.selectedItemService.item = null;
              })
        })
  }

}

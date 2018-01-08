import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Item } from './item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()
  item: Item;

  @Output()
  delete = new EventEmitter<string>();

  @Output()
  edit = new EventEmitter<Item>();

  constructor() { }

  ngOnInit() {
  }

  deleteItem() {
    this.delete.emit(this.item.id);
  }

  editItem() {
    this.edit.emit(this.item);
  }

}

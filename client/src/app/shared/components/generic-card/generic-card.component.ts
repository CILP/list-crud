import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { List } from 'app/list/list.model';
import { Item } from 'app/item/item.model';

@Component({
  selector: 'app-generic-card',
  templateUrl: './generic-card.component.html',
  styleUrls: ['./generic-card.component.css']
})
export class GenericCardComponent implements OnInit {

  @Input()
  cardData: List | Item;

  @Input()
  cardType: string;

  @Output()
  delete = new EventEmitter<string>();

  @Output()
  edit = new EventEmitter<List | Item>();

  @Output()
  see = new EventEmitter<List>();

  constructor() { }

  ngOnInit() {
    this.cardType;
  }

  deleteCard() {
    this.delete.emit(this.cardData.id);
  }

  editCard() {
    this.edit.emit(this.cardData);
  }

  // Only for List
  seeCard() {
    this.see.emit(this.cardData);
  }

}

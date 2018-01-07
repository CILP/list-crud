import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { List } from './list.model';
import { debug } from 'util';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  list: List;

  @Output()
  delete = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  deleteList() {
    this.delete.emit(this.list.id);
  }

}

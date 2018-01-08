import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SelectedListService } from 'app/shared/services/selected-list.service';

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

  constructor(
    private route: ActivatedRoute,
    private selectedListService: SelectedListService
  ) { }

  ngOnInit() {
    this.list = this.selectedListService.list;
    this.items = this.route.snapshot.data['items'];
  }

}

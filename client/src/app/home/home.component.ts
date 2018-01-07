import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaterializeAction } from 'angular2-materialize';

import { ListService } from '../list/list.service';

import { List } from '../list/list.model';
import { debug } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lists: List[];
  deleteModalActions = new EventEmitter<string | MaterializeAction>();

  selectedList: List;

  constructor(
    private route: ActivatedRoute,
    private listService: ListService
  ) { }

  ngOnInit() {
    this.lists = this.route.snapshot.data['lists'];
  }

  openDeleteModal(listId: string) {
    this.selectedList = this.lists.find(l => l.id === listId);
    this.deleteModalActions.emit({action: 'modal', params: ['open']});
  }

  closeDeleteModal() {
    this.deleteModalActions.emit({action: 'modal', params: ['close']});
  }
  
  agreeDeleteModal() {
    this.listService
        .deleteList(this.selectedList.id)
        .subscribe(() => {
          this.lists = this.lists.filter(l => l.id !== this.selectedList.id);
          this.selectedList = null;
        })
  }
}

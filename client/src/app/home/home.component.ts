import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterializeAction } from 'angular2-materialize';

import { ListService } from '../list/list.service';
import { SelectedListService } from '../shared/services/selected-list.service';

import { List } from '../list/list.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lists: List[];
  deleteModalActions = new EventEmitter<string | MaterializeAction>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listService: ListService,
    private selectedListService: SelectedListService
  ) { }

  ngOnInit() {
    this.lists = this.route.snapshot.data['lists'];
  }

  deleteList(listId: string) {
    this.selectedListService.list = this.lists.find(l => l.id === listId);
    this.deleteModalActions.emit({action: 'modal', params: ['open']});
  }

  editList(list: List) {
    this.selectedListService.list = list;
    this.router.navigate(['/list/edit', list.id]);
  }

  seeListContent(list: List) {
    this.selectedListService.list = list;
    this.router.navigate(['list/items', list.id]);
  }

  closeDeleteModal() {
    this.deleteModalActions.emit({action: 'modal', params: ['close']});
  }
  
  agreeDeleteModal() {
    const listId = this.selectedListService.list.id;

    this.listService
        .deleteList(listId)
        .subscribe(() => {
          this.lists = this.lists.filter(l => l.id !== listId);
          this.selectedListService.list = null;
        })
  }
}

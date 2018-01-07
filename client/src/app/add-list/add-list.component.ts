import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaterializeAction } from 'angular2-materialize';
import { ListService } from '../list/list.service';

import { List } from '../list/list.model';

declare const Materialize: any;

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {

  listForm: FormGroup;

  constructor(
    private listService: ListService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.listForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  createList() {
    const name: string = this.listForm.value.name;
    const description: string = this.listForm.value.description;

    const list: List = {
      name,
      description,
      quantity: 0
    };

    this.listService
        .createList(list)
        .subscribe(() => {
          Materialize.toast('List created successfully!', 2000);
        })
  }

}

import { Component, OnInit } from '@angular/core';

import { GenericForm } from '../shared/components/generic-form/generic-form.model';

declare const Materialize: any;

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {

  createFormOptions: GenericForm;

  constructor() { }

  ngOnInit() {
    this.createFormOptions = {
      target: 'List',
      submitText: 'Create List',
      cancelText: 'Cancel',
      successText: 'List created successfully!',
      serviceMethod: 'createList',
      fields: [
        {key: 'name', value: '', required: true},
        {key: 'description', value: '', required: true}
      ]
    };
  }
}

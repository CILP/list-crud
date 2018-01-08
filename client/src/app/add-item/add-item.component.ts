import { Component, OnInit } from '@angular/core';

import { GenericForm } from '../shared/components/generic-form/generic-form.model';

declare const Materialize: any;

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  createFormOptions: GenericForm;

  constructor() { }

  ngOnInit() {
    this.createFormOptions = {
      target: 'Item',
      submitText: 'Create Item',
      cancelText: 'Cancel',
      successText: 'Item created successfully!',
      serviceMethod: 'createItem',
      fields: [
        {key: 'name', value: '', required: true},
        {key: 'description', value: '', required: true}
      ]
    };
  }

}

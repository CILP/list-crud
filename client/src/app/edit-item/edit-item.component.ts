import { Component, OnInit } from '@angular/core';
import { GenericForm } from '../shared/components/generic-form/generic-form.model';

import { SelectedItemService } from '../shared/services/selected-item.service';

declare const Materialize: any;

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  editFormOptions: GenericForm;

  constructor(private selectedItemService: SelectedItemService) { }

  ngOnInit() {
    const { name, description } = this.selectedItemService.item;

    this.editFormOptions = {
      target: 'Item',
      submitText: 'Update Item',
      cancelText: 'Cancel',
      successText: 'Item updated successfully!',
      serviceMethod: 'updateItem',
      fields: [
        {key: 'name', value: name, required: false},
        {key: 'description', value: description, required: false}
      ]
    };
  }

}

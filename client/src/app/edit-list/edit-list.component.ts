import { Component, OnInit } from '@angular/core';
import { GenericForm } from '../shared/components/generic-form/generic-form.model';

import { SelectedListService } from '../shared/services/selected-list.service';

declare const Materialize: any;
@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {

  editFormOptions: GenericForm;
  constructor(private selectedListService: SelectedListService) { }

  ngOnInit() {
    const { name, description } = this.selectedListService.list;

    this.editFormOptions = {
      target: 'List',
      submitText: 'Update List',
      cancelText: 'Cancel',
      successText: 'List updated successfully!',
      serviceMethod: 'updateList',
      fields: [
        {key: 'name', value: name, required: false},
        {key: 'description', value: description, required: false}
      ]
    };
  }

}

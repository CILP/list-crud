import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaterializeAction } from 'angular2-materialize';

import { ListService } from 'app/list/list.service';
import { ItemService } from 'app/item/item.service';
import { SelectedListService } from 'app/shared/services/selected-list.service';
import { SelectedItemService } from 'app/shared/services/selected-item.service';

import { List } from 'app/list/list.model';
import { Item } from 'app/item/item.model';
import { GenericForm } from './generic-form.model';
import { Output } from '@angular/core/src/metadata/directives';

declare const Materialize: any;

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.css']
})
export class GenericFormComponent implements OnInit {

  genericForm: FormGroup;

  @Input()
  formOptions: GenericForm;

  constructor(
    private fb: FormBuilder,
    private listService: ListService,
    private itemService: ItemService,
    private selectedListService: SelectedListService,
    private selectedItemService: SelectedItemService
  ) { }

  ngOnInit() {
    const nameOption = this.formOptions.fields.find(f => f.key === 'name');
    const descriptionOption = this.formOptions.fields.find(f => f.key === 'description');

    this.genericForm = this.fb.group({
      name: [nameOption.value, nameOption.required ? Validators.required : null],
      description: [descriptionOption.value, descriptionOption.required ? Validators.required : null]
    });
  }

  submitForm() {
    const name: string = this.genericForm.value.name;
    const description: string = this.genericForm.value.description;
    const { target, serviceMethod } = this.formOptions;

    if (target === 'List') {
      if (serviceMethod === 'updateList') {
        let patchModel: { name?: string, description?: string} = {};

        if (name) {
          patchModel.name = name;
        }

        if (description) {
          patchModel.description = description;
        }

        this.listService[serviceMethod](this.selectedListService.list.id, patchModel)
            .subscribe(() => {
              Materialize.toast(this.formOptions.successText, 2000);
            });

      } else {
        this.listService[serviceMethod]({name, description})
          .subscribe(() => {
            Materialize.toast(this.formOptions.successText, 2000);
          });
      }
    } else if (target === 'Item') {
      if (serviceMethod === 'updateItem') {
        let patchModel: { name?: string, description?: string} = {};

        if (name) {
          patchModel.name = name;
        }

        if (description) {
          patchModel.description = description;
        }

        this.itemService[serviceMethod](this.selectedItemService.item.id, patchModel)
            .subscribe(() => {
              Materialize.toast(this.formOptions.successText, 2000);
            });
      } else {
        this.itemService[serviceMethod]({name, description})
          .subscribe(() => {
            const { id, quantity } = this.selectedListService.list;

            if (serviceMethod === 'createItem') {
              this.listService.updateList(id, { quantity: quantity + 1 })
                  .subscribe(() => {
                    Materialize.toast(this.formOptions.successText, 2000);
                  });
            } else {
              Materialize.toast(this.formOptions.successText, 2000);
            }
          });
      }
    }
  }

}

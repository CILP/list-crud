import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaterializeAction } from 'angular2-materialize';

import { ListService } from '../../../list/list.service';
import { SelectedListService } from '../../services/selected-list.service';

import { List } from '../../../list/list.model';
import { GenericForm } from './generic-form.model';

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
    private selectedListService: SelectedListService
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
            })

      } else {
        this.listService[serviceMethod]({name, description})
          .subscribe(() => {
            Materialize.toast(this.formOptions.successText, 2000);
          });
      }
    }
  }

}

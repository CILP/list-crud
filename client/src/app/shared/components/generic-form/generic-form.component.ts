import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaterializeAction } from 'angular2-materialize';
import { ListService } from '../../../list/list.service';

import { List } from '../../../list/list.model';
import { GenericForm } from './generic-form.model';

declare const Materialize: any;

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: []
})
export class GenericFormComponent implements OnInit {

  genericForm: FormGroup;

  @Input()
  formOptions: GenericForm;

  constructor(
    private listService: ListService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.genericForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  submitForm() {
    const name: string = this.genericForm.value.name;
    const description: string = this.genericForm.value.description;

    const genericModel: List = {
      name,
      description
    };

    this.listService[this.formOptions.serviceMethod](genericModel)
        .subscribe(() => {
          Materialize.toast(this.formOptions.successText, 2000);
        })
  }

}

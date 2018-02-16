import { Component, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import * as moment from 'moment';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class TodoFormComponent {

  date = new FormControl(moment());
  title: string = '';
  discription: string = '';

  form = new FormGroup({
    title: new FormControl('', Validators.required),
    date: new FormControl(moment(), Validators.required),
    discription: new FormControl('', Validators.required)
  });

  @Output() create: EventEmitter<{}> = new EventEmitter();

  onSubmit() {
    this.create.emit({ ...this.form.value, date: this.date.value.format('L') });
    setTimeout(() => this.reset())
  }

  reset() {
    for (let name in this.form.controls) {
      this.form.controls[name].setErrors(null);
    }
  }

}

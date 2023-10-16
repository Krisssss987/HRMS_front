import { Component } from '@angular/core';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule,FormBuilder, Validators} from '@angular/forms';
import {NgIf, JsonPipe} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';


@Component({
  selector: 'app-assign-task',
  templateUrl: './assign-task.component.html',
  styleUrls: ['./assign-task.component.css']
})
export class AssignTaskComponent {
  EmployeeName: string = '';
  EmployeeUID:string ='';
  Projecttitle: string = '';
  status:string = '';
  Remarks:string = '';




  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  

}

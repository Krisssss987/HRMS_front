import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-a-filter',
  templateUrl: './a-filter.component.html',
  styleUrls: ['./a-filter.component.css']
})
export class AFilterComponent {
  
  StartDate = new FormControl('', [Validators.required]);
  EndDate = new FormControl('', [Validators.required]);

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0;
  };

}

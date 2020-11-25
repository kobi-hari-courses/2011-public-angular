import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { CoreValidators } from './validators/core-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl('', [Validators.required, this.startsWithA]), 
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl(30, [Validators.min(18), Validators.max(120)]), 
    description: new FormControl('', CoreValidators.minWords(10)), 
    address: new FormGroup({
      city: new FormControl(), 
      street: new FormControl()
    })
  });

  startsWithA(control: AbstractControl): ValidationErrors | null {
    let val = String(control?.value);

    if (val.startsWith('a')) return null;

    return {'startsWithA': {startsWith: val.substr(0, 1)}};
  }


  ngOnInit(): void {
  }

  
}

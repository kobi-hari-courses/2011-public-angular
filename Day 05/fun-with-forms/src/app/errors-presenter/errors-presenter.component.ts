import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-errors-presenter',
  templateUrl: './errors-presenter.component.html',
  styleUrls: ['./errors-presenter.component.css']
})
export class ErrorsPresenterComponent implements OnInit {
  @Input()
  control: FormControl;

  constructor() { }

  ngOnInit(): void {
  }

}

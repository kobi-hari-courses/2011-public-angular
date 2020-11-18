import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-string-selector',
  templateUrl: './string-selector.component.html',
  styleUrls: ['./string-selector.component.css']
})
export class StringSelectorComponent implements OnInit {
  @Input()
  options: string[] = [];

  @Input()
  selectedOption: string = '';

  @Output() 
  optionSelected = new EventEmitter<string>();

  selectOption(value: string) {
    this.selectedOption = value;
    this.optionSelected.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

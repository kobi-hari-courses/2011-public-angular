import { Component, OnInit } from '@angular/core';
import { AdditionService } from 'src/app/services/addition.service';

@Component({
  selector: 'app-adder',
  templateUrl: './adder.component.html',
  styleUrls: ['./adder.component.css'], 
})
export class AdderComponent implements OnInit {
  result: number | null = null;


  constructor(public additionService: AdditionService) { }

  calc(op1: string, op2: string) {
    let a = Number(op1);
    let b = Number(op2);

    this.result = this.additionService.add(a, b);
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { AdditionService } from 'src/app/services/addition.service';
import { WrongAdditionService } from 'src/app/services/wrong-addition.service';

@Component({
  selector: 'app-adder-two',
  templateUrl: './adder-two.component.html',
  styleUrls: ['./adder-two.component.css']
})
export class AdderTwoComponent implements OnInit {
  result: number | null = null;


  constructor(public additionService: WrongAdditionService) { }

  calc(op1: string, op2: string) {
    let a = Number(op1);
    let b = Number(op2);

    this.result = this.additionService.add(a, b);
  }

  ngOnInit(): void {
  }

}

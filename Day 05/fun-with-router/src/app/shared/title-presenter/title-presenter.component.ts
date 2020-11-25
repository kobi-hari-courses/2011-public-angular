import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sh-title-presenter',
  templateUrl: './title-presenter.component.html',
  styleUrls: ['./title-presenter.component.css']
})
export class TitlePresenterComponent implements OnInit {
  @Input()
  caption: string = '';

  @Input()
  color: string = 'Blue';


  constructor() { }

  ngOnInit(): void {
  }

}

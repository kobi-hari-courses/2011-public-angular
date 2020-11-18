import { Component, Inject, OnInit } from '@angular/core';
import { URL_TOKEN } from 'src/app/app.module';
import { AdditionService } from 'src/app/services/addition.service';
import { HistoryService } from 'src/app/services/history.service';
import { WrongAdditionService } from 'src/app/services/wrong-addition.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'], 
  providers:[
    {provide: WrongAdditionService, useClass: WrongAdditionService},
    {provide: AdditionService, useExisting: WrongAdditionService}, 
  ]
})
export class GroupComponent implements OnInit {
  constructor(@Inject(URL_TOKEN) public url: string) { }

  ngOnInit(): void {
  }

}

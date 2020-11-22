import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.css']
})
export class WriterComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

  async setA(text: string) {
    let val = Number(text);
    await this.data.setA(val);
  }

  async setB(text: string) {
    let val = Number(text);
    await this.data.setB(val);
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from, Observable, Subject } from 'rxjs';
import { Show } from './models/models';
import { ShowsService } from './services/shows.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  keyword$ = new Subject<string>();
  allShows$: Observable<Show[]>;

  shows: Observable<Show[]>;

  constructor(private showsService: ShowsService){}

  ngOnInit(): void {
    this.allShows$ = from(this.showsService.getShows());
  }

}

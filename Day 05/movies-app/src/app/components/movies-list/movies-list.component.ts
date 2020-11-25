import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  captions: Promise<string[]>;

  constructor(
    private movies: MoviesService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.captions = this.movies.getAllTitles();
  }

  selectMovie(index: number) {
    this.router.navigate(['movies', index]);
  }



}

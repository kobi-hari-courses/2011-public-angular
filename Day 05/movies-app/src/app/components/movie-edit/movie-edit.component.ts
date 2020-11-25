import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  movie$: Observable<Movie>;

  constructor(
    private movies: MoviesService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.movie$ = this.route.params.pipe(
      map(prm => Number(prm['id'])), 
      switchMap(id => this.movies.getMovieByIndex(id))
    )  ;
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { map, mergeMap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie$: Observable<Movie>;


  constructor(
    private movies: MoviesService, 
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  ngOnInit() {
    let index$ = this.route.params.pipe(
      map(prms => Number(prms['id']))
    );

    this.movie$ = index$
        .pipe(switchMap(index => this.movies.getMovieByIndex(index)));
  }

  next() {
    let index = Number(this.route.snapshot.params['id']);
    this.router.navigate(['movies', index + 1]);
  }

  prev() {
    let index = Number(this.route.snapshot.params['id']);
    this.router.navigate(['movies', index - 1]);
  }

  edit() {
    let index = Number(this.route.snapshot.params['id']);
    this.router.navigate(['movies', index, 'edit']);
  }

}

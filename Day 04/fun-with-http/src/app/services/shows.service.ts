import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Show } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {
  constructor(private http: HttpClient) { }

  getShows(): Promise<Show[]> {
    return this.http
        .get<Show[]>('http://api.tvmaze.com/shows')
        .toPromise();
  }


}

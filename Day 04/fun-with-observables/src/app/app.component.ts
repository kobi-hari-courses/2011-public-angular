import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, interval, Observable, Observer, Subject } from 'rxjs';
import { debounceTime, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { NameSearchService } from './services/name-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  search$ = new Subject<string>();
  result$: Observable<string[]>;

  constructor(private namesService: NameSearchService){}


  onInput(value: string) {
    this.search$.next(value); 
  }

  ngOnInit(): void {
    this.result$ = this.search$.pipe(
      debounceTime(500),
      switchMap(search => this.namesService.searchNames(search))
    );
  }



  isShowingReader = true;

  toggleReader() {
    this.isShowingReader = !this.isShowingReader;
  }


  createObserver(id: string): Observer<number> {
    console.log(`Creating observer: ${id}`);

    return {
      next: val => console.log(`observer: ${id}, next: ${val}`), 
      complete: () => console.log(`observer: ${id}, completed`), 
      error: err => console.log(`observer: ${id}, error: ${err}`), 
    }
  }

  createIntervalObservable(): Observable<number> {
    return interval(1000);
  }

  createCustomObservable(): Observable<number> {
    return new Observable<number>(observer => {
      observer.next(42);
      setTimeout(() => observer.next(100), 2000);
      setTimeout(() => observer.next(200), 4000);
      setTimeout(() => observer.next(300), 6000);
      setTimeout(() => observer.next(400), 8000);
      setTimeout(() => observer.complete(), 10000);
      setTimeout(() => observer.next(600), 12000);
    });
  }

  createCustomSubject(): Observable<number> {
    let subject = new Subject<number>();

    subject.next(42);
    setTimeout(() => subject.next(100), 2000);
    setTimeout(() => subject.next(200), 4000);
    setTimeout(() => subject.next(300), 6000);
    setTimeout(() => subject.next(400), 8000);
    setTimeout(() => subject.complete(), 10000);
    setTimeout(() => subject.next(600), 12000);

    return subject;
  }

  createCustomBehaviorSubject(): Observable<number> {
    let subject = new BehaviorSubject<number>(42);

    setTimeout(() => subject.next(100), 2000);
    setTimeout(() => subject.next(200), 4000);
    setTimeout(() => subject.next(300), 6000);
    setTimeout(() => subject.next(400), 8000);
    setTimeout(() => subject.complete(), 10000);
    setTimeout(() => subject.next(600), 12000);

    return subject;
  }

  go() {
    let observer1 = this.createObserver('First');
    let observer2 = this.createObserver('Second');

    let observable = this.createCustomBehaviorSubject();

    observable.subscribe(observer1);

    setTimeout(() => {
      observable.subscribe(observer2);
    }, 3500)

  }
}

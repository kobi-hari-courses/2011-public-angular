import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private value: number = 0;
  // private value$ = new BehaviorSubject<number>(this.value);
  private value$ = new Subject<number>();

  constructor() { }

  getValue(): Observable<number> {
    return this.value$.asObservable();
  }

  async increment(): Promise<void> {
    this.value++;
    this.value$.next(this.value);
  }

  async decrement(): Promise<void> {
    this.value--;
    this.value$.next(this.value);
  }

}

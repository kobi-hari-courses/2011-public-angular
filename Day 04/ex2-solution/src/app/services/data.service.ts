import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private a: number = 0;
  private b: number = 0;

  private a$ = new BehaviorSubject<number>(0);
  private b$ = new BehaviorSubject<number>(0);

  constructor() { }

  getA(): Observable<number> {
    return this.a$.asObservable();
  }

  getB(): Observable<number> {
    return this.b$.asObservable();
  }

  async setA(value: number): Promise<void> {
    console.log(`Data Service.setA ${value}`);
    this.a = value;
    this.a$.next(this.a);
  }

  async setB(value: number): Promise<void> {
    console.log(`Data Service.setB ${value}`);
    this.b = value;
    this.b$.next(this.b);
  }
}

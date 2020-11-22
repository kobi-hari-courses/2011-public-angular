import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter-reader',
  templateUrl: './counter-reader.component.html',
  styleUrls: ['./counter-reader.component.css']
})
export class CounterReaderComponent implements OnInit, OnDestroy {
  value$: Observable<number>;

  // private sub: Subscription;


  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    // this.sub = this.counterService.getValue().subscribe(val => {
    //   console.log(`Counter changed with value: ${val}`);
    //   this.value = val;
    // });

    this.value$ = this.counterService
        .getValue()
        .pipe(tap(val => console.log('next ' + val)))
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }

}

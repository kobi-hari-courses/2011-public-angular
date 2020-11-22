import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css'], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReaderComponent implements OnInit {
  max$: Observable<number>;
  min$: Observable<number>;
  sum$: Observable<number>;

  title$ = of('Hello');

  constructor(private data: DataService) { }

  ngOnInit(): void {
    let a$ = this.data.getA();
    let b$ = this.data.getB();

    let ab$ = combineLatest(a$, b$);

    this.max$ = ab$.pipe(
      map(tpl => Math.max(tpl[0], tpl[1]))
    );
      
    this.min$ = ab$.pipe(
      map(tpl => Math.min(tpl[0], tpl[1]))
    );

    this.sum$ = ab$.pipe(
      map(tpl => tpl[0] + tpl[1])
    );


  }

}

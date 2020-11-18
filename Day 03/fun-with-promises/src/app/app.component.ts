import { ArrayType } from '@angular/compiler';
import { Component } from '@angular/core';
import { RandomizerService } from './services/randomizer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private random: RandomizerService){}

  createPromise(): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      setTimeout(() => resolve(42), 3000);
    });
  }

  // go() {
  //   console.log('promise started');
  //   let p = this.createPromise();
  //   p.then(res => {
  //     console.log('Promise completed with result: ' + res);
  //   })
  // }

  async go() {
    console.log('A');
    await this.mixedRaceExample();
    console.log('B');
  }

  async allExample() {
    console.log('Started example');
    let promises = [1, 2, 3, 4]
      .map(_ => this.random.next(10, 20));

    // let promises: Promise<number>[] = [];

    // for (let index = 0; index < 4; index++) {
    //   let p = this.random.next(10, 20);
    //   promises.push(p);
    // }

    let pall = Promise.all(promises);
    let resall = await pall;
    console.log(resall);

  }

  async raceExample() {
    console.log('Started example');
    let promises = [1, 2, 3, 4]
      .map(_ => this.random.next(10, 20));

    let prace = Promise.race(promises);
    let res = await prace;
    console.log(res);

  }

  async mixedRaceExample() {
    console.log('Started example');
    let promises = [1, 2, 3, 4]
      .map(i => (i % 2 === 0) 
              ? this.random.next(10, 20) 
              : this.random.nextString(['Hello', 'World']));

    let prace = Promise.race(promises);
    let res = await prace;
    
    console.log(res);
  }

  

  async syncExample() {

  }

  async play() {
    console.log(`Starting to randomize`);

    let p1 = this.random.next(5, 10);
    console.log(`after r1`);

    let p2 = this.random.next(10, 20);
    console.log(`after r2`);

    let p3 = this.random.next(20, 30);

    let r1 = await p1;
    let r2 = await p2;
    let r3 = await p3;

    console.log(`the random numbers are: ${r1} ${r2} ${r3}`);
  }


  async start() {
    console.log(1);
    let p = this.createPromise();
    console.log(2); // }
    let res = await p;
    console.log(3);

    return true;
  }
}


import { Injectable } from '@angular/core';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class RandomizerService {
  private delay(millis: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, millis));
  }

  async next(min: number, max: number): Promise<number> {
    let range = max - min;
    let rnd = Math.floor(range * Math.random()) + min;

    let delayTime = Math.random() * 3000 + 1000;
    await this.delay(delayTime);

    return rnd;
  }

  async nextString(options: string[]): Promise<string> {
    let index = await this.next(0, options.length);
    return options[index];
  }

  createCompletedPromise(): Promise<number> {
    return Promise.resolve(42);
  }

  createErrorPromise() {
    return Promise.reject<number>('Oy Vey');
  }

  createInProgressPromise(): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      setTimeout(() => resolve(42) , 3000);
    });

  }


  constructor() { }
}

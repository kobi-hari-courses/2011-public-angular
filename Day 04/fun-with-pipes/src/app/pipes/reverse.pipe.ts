import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse', 
  pure: true
})
export class ReversePipe implements PipeTransform {

  transform(value: unknown): string {
    if (typeof(value) == 'string') {
      return value.split('').reverse().join('');
    } else {
      return '';
    }
  }

}


// pure:
// 1. Deterministic: for the same input, you always get the same output
// 2. No side effects: does not cause any external modifications

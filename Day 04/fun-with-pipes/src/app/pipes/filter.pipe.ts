import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter', 
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: unknown, keyword: unknown): string[] {
    if (!value) return [];
    if (typeof(keyword) !== 'string') return value as string[];

    if (value instanceof Array) {
      var strings = value.filter(item => typeof(item) === 'string') as string[];
      return strings.filter(str => str.includes(keyword));
    }
    else {
      return [];
    }

  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: string[], property: string): any {
    return value.sort((a, b) =>  (a[property] > b[property]) ? 1 : -1);
    
  }
}

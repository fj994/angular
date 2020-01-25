import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): any {
    const CharArray = value.split('');
    CharArray.reverse();
    value = CharArray.join('');
    console.log(value);
    
    return value;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    console.log(value);
    return value * 1.60934;
  }

}

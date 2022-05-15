import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: number, req:string):any{
    if (!value) {
      return '';     
    }

    switch (req) {
      case 'm':
        return ((value * 1.601 *1000) + req);
      default:
        return (value*1.601+req);
    }
  }

}

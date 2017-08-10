import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'texto'
})
export class TextoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

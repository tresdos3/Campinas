import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'texto'
})
export class TextoPipe implements PipeTransform {
  transform(text: string, param: string): any {
    if (text != null) {
      text = text.trim();
      if (param == 'capitalize' || param == null) {
        if (param != null) {
          param = param.trim();
        }
        return text.substring(0, 1).toUpperCase() + text.substring(1).toLowerCase();
      } else {
        if (param == 'upper') {
          return text.toUpperCase();
        } else {
          if (param == 'lower') {
            return text.toLowerCase();
          } else {
            if (param == 'allfirtsupper') {
              let aux = text.split(' ');
              let final_text: string = '';
              aux.forEach(value => {
                final_text = final_text + (value.substring(0, 1).toUpperCase() + value.substring(1).toLowerCase()) + ' ';
              });
              return final_text.trim();
            } else {
              return text.substring(0, 1).toUpperCase() + text.substring(1).toLowerCase();
            }

          }
        }
      }
    }
  }

}
